import GeneralContainer from "@/components/generalContainer"
import AbountContent from "@/components/about/aboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'This is the about section of the site.'
}

const About = () => {
    return (
        <GeneralContainer>
            <AbountContent />
        </GeneralContainer>
    )
}

export default About;