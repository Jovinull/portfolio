import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className='bg-theme text-theme w-full scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-[length:90%_auto] bg-center bg-no-repeat px-[12%] py-10 dark:bg-none'
    >
      <ContactHeader />
      <ContactForm />
    </section>
  );
}
