import React from "react";
import portfolio from "./data/portfolio";

const services = [
  {
    icon: "👕",
    title: "T-Shirt Printing",
    text: "High-quality custom tees for businesses, gyms, brands and events.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "🦺",
    title: "Workwear Printing",
    text: "Professional branded uniforms and durable workwear solutions.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "🎨",
    title: "Logo Printing",
    text: "Sharp logo printing and custom branding for workwear, hoodies and uniforms.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#F8F9FA",
        color: "#111",
      }}
    >
      {/* NAVBAR */}
      <img src="/images/logo.png" alt="Logo" />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#111",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#D62828",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            KP
          </div>

          <div>
            <h2 style={{ margin: 0 }}>Kett Press Co</h2>

            <small style={{ color: "#bbb" }}>
              Custom Printing & Workwear
            </small>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#home" style={navLink}>
            Home
          </a>

          <a href="#services" style={navLink}>
            Services
          </a>

          <a href="#portfolio" style={navLink}>
            Portfolio
          </a>

          <a href="#quote" style={navLink}>
            Quote
          </a>

          <a href="#contact" style={navLink}>
            Contact
          </a>

          <a href="#quote">
            <button
              style={{
                background: "#D62828",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Get Quote
            </button>
          </a>
        </div>
      </nav>

      {/* HERO */}

      <section
        id="home"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px,7vw,72px)",
            marginBottom: "20px",
          }}
        >
          Premium Custom Printing
        </h1>

        <p
          style={{
            fontSize: "clamp(18px,3vw,28px)",
            color: "#ddd",
            maxWidth: "700px",
          }}
        >
          T-Shirts • Workwear • Hoodies • Business Branding
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#bbb",
          }}
        >
          Serving Kettering & Northamptonshire
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#quote">
            <button style={heroButton}>
              Get Instant Quote
            </button>
          </a>

          <a
            href="https://wa.me/447770118148"
            target="_blank"
            rel="noreferrer"
          >
            <button style={whatsappButton}>
              WhatsApp Us
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px,5vw,50px)",
            marginBottom: "20px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "60px auto 0",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    color: "#D62828",
                    fontSize: "26px",
                  }}
                >
                  {service.icon} {service.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        style={{
          background: "#111",
          color: "white",
          padding: "90px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(32px,5vw,50px)",
            marginBottom: "60px",
          }}
        >
          Recent Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          {portfolio.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#222",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}

      <section
        id="quote"
        style={{
          padding: "90px 20px",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#fff",
            borderRadius: "25px",
            padding: "50px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(32px,5vw,48px)",
              marginBottom: "40px",
            }}
          >
            Request A Quote
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <select style={inputStyle}>
              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Workwear</option>
            </select>

            <input
              type="number"
              placeholder="Quantity Needed"
              style={inputStyle}
            />

            <textarea
              rows="5"
              placeholder="Tell us about your order..."
              style={inputStyle}
            />

            <button
              style={{
                background: "#D62828",
                color: "white",
                border: "none",
                padding: "18px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        style={{
          background: "#111",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(34px,5vw,52px)",
            marginBottom: "30px",
          }}
        >
          Contact Kett Press Co
        </h2>

        <p>📞 07770 118148</p>

        <p>✉ info@kettpressco.com</p>

        <p>📍 Kettering, Northamptonshire</p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button style={whatsappButton}>
            WhatsApp Us
          </button>
        </a>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "black",
          color: "#bbb",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 Kett Press Co | Custom Printing | Workwear
      </footer>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const heroButton = {
  background: "#D62828",
  color: "white",
  border: "none",
  padding: "18px 35px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "18px 35px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
};