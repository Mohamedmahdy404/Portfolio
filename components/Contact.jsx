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
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    if (name === "name" && trimmedValue.length < 3) {
      return t.contact.validation.name;
    }

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(trimmedValue)) {
      return t.contact.validation.email;
    }

    if (name === "message" && trimmedValue.length < 10) {
      return t.contact.validation.message;
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = Object.fromEntries(
      Object.entries(form).map(([name, value]) => [
        name,
        validateField(name, value),
      ])
    );

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

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
        noValidate
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
            onBlur={handleBlur}
            required
            minLength={3}
            placeholder={t.contact.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.name ? "border-red-400" : "border-transparent"}`}
          />
          {errors.name && (
            <span id="contact-name-error" className="mt-2 text-sm text-red-300" role="alert">
              {errors.name}
            </span>
          )}
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
            onBlur={handleBlur}
            required
            placeholder={t.contact.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.email ? "border-red-400" : "border-transparent"}`}
          />
          {errors.email && (
            <span id="contact-email-error" className="mt-2 text-sm text-red-300" role="alert">
              {errors.email}
            </span>
          )}
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
            onBlur={handleBlur}
            required
            minLength={10}
            placeholder={t.contact.messagePlaceholder}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.message ? "border-red-400" : "border-transparent"}`}
          />
          {errors.message && (
            <span id="contact-message-error" className="mt-2 text-sm text-red-300" role="alert">
              {errors.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? t.contact.sending : t.contact.send}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
