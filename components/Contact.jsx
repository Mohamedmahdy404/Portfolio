import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Contact() {
  const formRef = useRef();
  const { t, isArabic } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3qoht0k",
        "template_ya1zh1k",
        {
          from_name: form.name,
          to_name: "Mohamed Yasser Mahdy",
          from_email: form.email,
          to_email: "mohamedmahdy3162@gmail.com",
          message: form.message,
        },
        "ysFXjcCCQcAJ-2hWs"
      )
      .then(
        () => {
          setLoading(false);
          alert(t.contact.success);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(t.contact.error);
        }
      );
  };

  return (
    <motion.div
      variants={slideIn(isArabic ? "right" : "left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark p-8 rounded-2xl shadow-md shadow-primary ${isArabic ? "xl:mr-36 lg:mr-16 md:mr-10 text-right" : "xl:ml-36 lg:ml-16 md:ml-10"}`}
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>{t.contact.eyebrow}</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>{t.contact.title}</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            {t.contact.name}
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder={t.contact.namePlaceholder}
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
            {t.contact.email}
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t.contact.emailPlaceholder}
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
            {t.contact.message}
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder={t.contact.messagePlaceholder}
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>

        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {loading ? t.contact.sending : t.contact.send}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
