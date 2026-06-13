import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "T-Shirts",
    message: "",
    file: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleFile(e) {
    setForm({ ...form, file: e.target.files[0] });
  }

  function handleSubmit(e) {
  e.preventDefault();

  emailjs.send(
    "service_eqmypnr",
    "template_g5kcy1d",
    {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    },
    "m_ajFD20nrQF449yR"
  )
  .then(
    () => {
      alert("Quote sent successfully! We will contact you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "T-Shirts",
        message: "",
        file: null,
      });
    },
    () => {
      alert("Failed to send. Please try again or WhatsApp us.");
    }
  );
}

  const whatsappNumber = "447442514098"; // UK format for WhatsApp

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Get A Free Quote</h1>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Upload your design or tell us what you need and we’ll get back to you quickly.
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "12px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "12px" }}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={{ padding: "12px" }}
        />

        {/* SERVICE DROPDOWN */}
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{ padding: "12px" }}
        >
          <option value="T-Shirts">T-Shirts</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Workwear">Workwear</option>
        </select>

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Tell us about your order..."
          value={form.message}
          onChange={handleChange}
          rows="5"
          style={{ padding: "12px" }}
        />

        {/* FILE UPLOAD */}
        <input
          type="file"
          onChange={handleFile}
          style={{ padding: "10px" }}
        />

        <button
          type="submit"
          style={{
            background: "#D62828",
            color: "#fff",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Quote Request
        </button>
      </form>

      {/* WHATSAPP BUTTON */}
      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Message Us on WhatsApp
        </a>
      </div>
    </div>
  );
}