"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post('/api/contact', userInput);


      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="relative overflow-hidden rounded-[1.85rem] border border-[#1b2c68a0] bg-[linear-gradient(180deg,rgba(13,18,36,0.96),rgba(10,13,55,0.92))] p-5 text-white shadow-[0_18px_48px_rgba(0,0,0,0.26)] lg:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_24%)]"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

      <div className="relative">
        <p className="mb-3 text-sm uppercase tracking-[0.32em] text-pink-200">Start a conversation</p>
        <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
          Let&apos;s build something thoughtful and technically meaningful.
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          If you have a question, opportunity, collaboration idea, or community initiative in mind, feel free to reach out. I&apos;m always open to conversations around technology, education, and impact.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-200">Your Name</label>
            <input
              className="w-full rounded-xl border border-[#353a52] bg-[#10172d]/80 px-4 py-3 text-white outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-200">Your Email</label>
            <input
              className="w-full rounded-xl border border-[#353a52] bg-[#10172d]/80 px-4 py-3 text-white outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-200">Your Message</label>
            <textarea
              className="w-full rounded-xl border border-[#353a52] bg-[#10172d]/80 px-4 py-3 text-white outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">
              All fiels are required!
            </p>}
            <button
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-200 ease-out hover:gap-3 md:px-12 md:text-sm md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Sending Message...</span>:
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
