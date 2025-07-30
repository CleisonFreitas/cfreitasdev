import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import CustomTitle from "../lib/custom-title";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { serviceItems } from "../data/service_data";
import { Button } from "@/components/ui/button";
import { LangType } from "../types/lang_type";
import { FormEvent, useState } from "react";
import Loading from "@/components/ui/loading";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
    fullname: z.string().min(3, { message: "Full name must be at least 10 characters." }),
    email: z.string().email({ message: "Must have a valid email" }),
    phone: z.string().min(8, { message: "Must be a valid number." }),
    interest: z.string().nullable(),
    details: z.string().min(10,
        { message: `It's important to give more details about your needs` }
    ).nullable(),
    services: z.string().nullable()
});

type FormData = z.infer<typeof formSchema>

type FieldType = {
    name: "fullname" | "email" | "phone" | "interest" | "services" | "details";
    label: string;
    placeholder: string | number | readonly string[] | undefined;
    type: "input" | "textarea" | "select"
};

const Contact = ({ t }: LangType) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            interest: "",
            services: "",
            details: "",
        },
    });

    const fields: FieldType[] = [
        {
            name: "fullname",
            label: `${t['contact.form.fullname']}`,
            placeholder: `${t['contact.form.fullname.placeholder']}`,
            type: "input"
        },
        {
            name: "email",
            label: `${t['contact.form.email']}`,
            placeholder: `${t['contact.form.email.placeholder']}`,
            type: "input"
        },
        {
            name: "phone",
            label: `${t['contact.form.phone']}`,
            placeholder: `${t['contact.form.phone.placeholder']}`,
            type: "input"
        },
        {
            name: "services",
            label: `${t['contact.form.service']}`,
            placeholder: `${t['contact.form.service.placeholder']}`,
            type: "select"
        },
        {
            name: "details",
            label: `${t['contact.form.details']}`,
            placeholder: `${t['contact.form.details.placeholder']}`,
            type: "textarea"
        }
    ]

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        emailjs
            .sendForm(
                process.env.EMAILJS_SERVICE_ID as string,
                process.env.EMAILJS_TEMPLATE_ID as string, form.current, {
                publicKey: process.env.EMAILJS_PUBLIC_KEY as string,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        const data = {
            fullname: formData.get("fullname") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            interest: formData.get("interest") as string,
            details: formData.get("details") as string,
        };
        console.log(data);
        const result = formSchema.safeParse(data);
        if (!result.success) {
            console.error(result.error.format());
            alert("Please fill in all required fields correctly.");
            setLoading(false);
            return;
        }
        try {
            await emailjs.sendForm(
                process.env.EMAILJS_SERVICE_ID!,
                process.env.EMAILJS_TEMPLATE_ID!,
                form,
                {
                    publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                }
            );

            alert("✅ Email sent successfully!");
            form.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("❌ Failed to send email.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="flex justify-center w-full px-1 md:px-0 flex-col items-center gap-4 md:mt-[90px]">
            <CustomTitle title={t['menus.contact']} subtitle={t['contact.section']} />
            <Form {...form}>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                >
                    {fields.map((item, index) => {
                        switch (item.type) {
                            case 'input':
                                return (
                                    <FormField
                                        key={index}
                                        control={form.control}
                                        name={item.name}
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>{item.label}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder={item.placeholder as string}
                                                        value={field.value ?? ''}
                                                        className="bg-neutral-900 lg:text-xl"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                );

                            case 'textarea':
                                return (
                                    <FormField
                                        key={index}
                                        control={form.control}
                                        name={item.name}
                                        render={({ field }) => (
                                            <FormItem className="col-span-1 lg:col-span-2">
                                                <FormLabel>Project Details...</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className="h-[200px] rounded-lg bg-neutral-900 border-none placeholder:text-xl"
                                                        {...field}
                                                        placeholder={item.placeholder as string}
                                                        value={field.value ?? ''}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                );

                            case 'select':
                                return (
                                    <FormField
                                        key={index}
                                        control={form.control}
                                        name="interest"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Services</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full bg-neutral-900 border-none py-7">
                                                            <SelectValue placeholder={t['contact.form.service.placeholder']} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {serviceItems.map((item) => (
                                                            <SelectItem key={item.id} value={item.id}>
                                                                {t[item.title]}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                );
                        }
                    })}

                    <div className="col-span-1 lg:col-span-2 flex justify-center md:justify-start lg:justify-end">
                        <Button
                            className="capitalize mt-3 mb-4 bg-gray-950 text-white border-2 border-white py-5 w-full md:w-[225px]"
                            type="submit"
                        >
                            {loading ? <Loading /> : t['contact.form.button']}
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}
export default Contact;
