import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactBackground from './ContactBackground';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-theme text-theme relative isolate w-full scroll-mt-20 overflow-hidden px-[12%] py-10"
    >
      <ContactBackground />

      <div className="relative z-10">
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  );
}
