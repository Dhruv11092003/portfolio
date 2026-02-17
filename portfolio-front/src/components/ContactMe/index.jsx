import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const initialFormState = {
  inquiredBy: "",
  email: "",
  contactNo: "",
  message: "",
};

const ContactMe = () => {
  const [form, setForm] = useState(initialFormState);

  const onChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const { inquiredBy, email, contactNo, message } = form;
    if (!inquiredBy || !email || !contactNo || !message) {
      alert("Please Fill the required Details");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contactMe`,
        form,
        { headers: { Accept: "application/json" } }
      );

      if (response.status === 201) {
        alert("Request Sent Successfully");
        setForm(initialFormState);
      }
    } catch {
      alert("Something Went Wrong");
    }
  };

  return (
    <section className="section-wrap" id="contactMe">
      <h2 className="font-display text-3xl font-bold">Let&apos;s Build Something Powerful</h2>
      <motion.form
        onSubmit={submitForm}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mt-6 grid gap-3 rounded-3xl p-5 sm:p-8"
      >
        <input
          id="inquiredBy"
          value={form.inquiredBy}
          onChange={onChange}
          placeholder="Name"
          required
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <input
          id="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <input
          id="contactNo"
          value={form.contactNo}
          onChange={onChange}
          placeholder="Contact Number"
          required
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <textarea
          id="message"
          value={form.message}
          onChange={onChange}
          placeholder="Message"
          rows={5}
          required
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <button
          type="submit"
          className="w-fit rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactMe;
