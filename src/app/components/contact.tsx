'use client';

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

const Contact = () => {
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
            label: "Full name",
            placeholder: "Type the full name",
            type: "input"
        },
        {
            name: "email",
            label: "Email",
            placeholder: "Type the email address",
            type: "input"
        },
        {
            name: "phone",
            label: "Phone Number",
            placeholder: "Type the phone number",
            type: "input"
        },
        {
            name: "services",
            label: "Services",
            placeholder: "Choose the service",
            type: "select"
        },
        {
            name: "details",
            label: "Details",
            placeholder: "Tell me the details.",
            type: "textarea"
        }
    ]

    const onSubmit = (values: FormData) => {
        console.log("🚀 Submitted:", values)
    }
    return (
        <section className="flex justify-center w-full px-4 flex-col items-center gap-4 md:mt-[90px]">
            <CustomTitle title="contact me" subtitle={'Feel free to get in touch!'} />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
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
                                                        className="h-[200px] bg-neutral-900 border-none placeholder:text-xl"
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
                                                            <SelectValue placeholder="Service of interest" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {serviceItems.map((item) => (
                                                            <SelectItem key={item.id} value={item.id}>
                                                                {item.title}
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

                    <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end">
                        <Button
                            className="mt-3 mb-4 bg-gray-950 text-white border-2 border-white py-5 w-full lg:w-[225px]"
                            type="submit"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}
export default Contact;
