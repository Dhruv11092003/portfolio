import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./index.css";

const ContactMe = () => {
  const [form, setForm] = useState({ inquiredBy: "", email: "", contactNo: "", message: "" });

  const onChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (!form.inquiredBy || !form.email || !form.contactNo || !form.message) {
      alert("Please Fill the required Details");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contactMe`, form, {
        headers: { Accept: "application/json" },
      });

      if (response.status === 201) {
        alert("Request Sent Successfully");
        setForm({ inquiredBy: "", email: "", contactNo: "", message: "" });
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return (
    <section className="section-block" id="contactMe">
      <h2 className="section-head">Contact</h2>
      <motion.form className="contact-form glass-panel" onSubmit={submitForm} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <input id="inquiredBy" value={form.inquiredBy} onChange={onChange} placeholder="Name" required />
        <input id="email" value={form.email} onChange={onChange} placeholder="Email" required />
        <input id="contactNo" value={form.contactNo} onChange={onChange} placeholder="Contact Number" required />
        <textarea id="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} required />
        <button type="submit">Send</button>
      </motion.form>
    </section>
  );
};

export default ContactMe;
