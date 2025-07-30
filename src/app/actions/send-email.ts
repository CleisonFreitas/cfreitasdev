'use server';

const sendEmail = async (formData: {
    fullname: string;
    email: string;
    phone: string;
    interest: string;
    details: string;
}) => {
    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: {
                    fullname: formData.fullname,
                    email: formData.email,
                    phone: formData.phone,
                    interest: formData.interest,
                    details: formData.details,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Email sending failed: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Email sent successfully:', data);
        return { success: true };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
}

export default sendEmail