import ContactForm from "../contact/ContactForm.tsx";
import ContactInfo from "../contact/ContactInfo.tsx";
import Section from "../layout/Section.tsx";
import SectionTitle from "../layout/SectionTitle.tsx";
import Reveal from "../ui/Reveal.tsx";

function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          description="If you want to talk about internships, new grad roles, or any of the projects here, send me a message."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ContactInfo />
        </Reveal>
        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
