// @flow strict
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <section id="contact" className="relative z-50 my-12 mt-24 text-white lg:my-24">
      <div className="sticky top-10 z-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white">
            CONTACT
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative py-3 lg:py-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200/70">
              <span className="text-yellow-300">Connect</span>,{" "}
              <span className="text-[#16f2b3]">collaborate</span>, and{" "}
              <span className="text-sky-300">start a conversation</span>
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Open to meaningful conversations
              <span className="block bg-gradient-to-r from-violet-300 via-white to-pink-300 bg-clip-text text-transparent">
                across technology, education,
              </span>
              <span className="block">and community leadership.</span>
            </h2>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
