import ContactForm from "@/components/forms/contactForm";
import GeneralContainer from "@/components/generalContainer"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
}

const Contact = () => {
    return (
        <GeneralContainer>
            <ContactForm />
        </GeneralContainer>
    )
}

export default Contact;