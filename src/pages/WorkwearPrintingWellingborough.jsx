import { useEffect } from "react";

const heroButton = {
  background: "#f97316",
  color: "white",
  border: "none",
  padding: "14px 30px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
};

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "14px 30px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
};

const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};

export default function WorkwearPrintingWellingborough() {
  useEffect(() => {
    document.title =
      "Workwear Printing Wellingborough | Custom Printed Workwear | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional Workwear printing in Wellingborough. Custom printed workwear for businesses, gyms, sports teams, events and organisations across Northamptonshire.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>

      {/* HERO */}

      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/workwear4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "140px 20px",
          borderRadius: "20px",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px,5vw,64px)",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          Workwear Printing Wellingborough
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#eee",
          }}
        >
          Professional branded workwear for businesses across
      Wellingborough and Northamptonshire. Custom polo shirts,
      hoodies, uniforms, hi-vis clothing and staff apparel
      printed to the highest standards.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <a href="/#quote">
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
      </div>

      {/* TRUST BAR */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "60px",
          fontWeight: "600",
        }}
      >
        <span>✓ Fast Turnaround</span>
        <span>✓ Bulk Discounts</span>
        <span>✓ Premium DTF Printing</span>
        <span>✓ Northamptonshire Based</span>
        <span>✓ Business Orders Welcome</span>
      </div>

      {/* INTRO */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "32px",
          }}
        >
          Professional Workwear Printing in Wellingborough
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Kett Press Co provides premium workwear printing for
          businesses, gyms, clubs, sports teams, schools and
          organisations across Northamptonshire. Whether you need
          a small batch or a large bulk order, we deliver
          high-quality prints with fast turnaround times.
        </p>
      </section>

      {/* GALLERY */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Recent workwear Printing Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        <img
          src="/images/tshirt4.jpg"
          alt="Custom Gym wear Printing"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />

        <img
          src="/images/workwear.jpg"
          alt="Branded Sweatshirt"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />

        <img
          src="/images/work3.jpg"
          alt="Business Workwear"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* INDUSTRIES WE SERVE */}
<section
  style={{
    padding: "100px 20px",
    background: "#f8fafc",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span
      style={{
        color: "#2563eb",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      Industries We Serve
    </span>

    <h2
      style={{
        fontSize: "clamp(2rem,5vw,3rem)",
        marginTop: "10px",
        marginBottom: "20px",
        color: "#111827",
      }}
    >
      Professional Workwear for Every Industry
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 50px",
        color: "#6b7280",
        lineHeight: "1.7",
      }}
    >
      We supply high-quality branded workwear and custom printed uniforms
      for businesses across Northamptonshire and the UK.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
      }}
    >
      {[
        {
          icon: "🏗️",
          title: "Construction Companies",
          text: "Branded hi-vis clothing, jackets and site uniforms.",
        },
        {
          icon: "🔧",
          title: "Tradespeople",
          text: "Professional workwear for everyday jobs and callouts.",
        },
        {
          icon: "⚡",
          title: "Electricians",
          text: "Custom printed uniforms that build trust with customers.",
        },
        {
          icon: "🚰",
          title: "Plumbers",
          text: "Durable branded clothing designed for daily use.",
        },
        {
          icon: "🌿",
          title: "Landscaping Businesses",
          text: "Hard-wearing apparel for outdoor working environments.",
        },
        {
          icon: "💪",
          title: "Gyms & Fitness Brands",
          text: "Printed uniforms and teamwear for fitness professionals.",
        },
        {
          icon: "🛍️",
          title: "Retail Businesses",
          text: "Smart branded uniforms that enhance your brand image.",
        },
        {
          icon: "🍽️",
          title: "Hospitality & Catering",
          text: "Professional staff uniforms for restaurants and events.",
        },
      ].map((industry) => (
        <div
          key={industry.title}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            {industry.icon}
          </div>

          <h3
            style={{
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            {industry.title}
          </h3>

          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.6",
            }}
          >
            {industry.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "32px",
        }}
      >
        Our Workwear Printing Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        <div style={serviceCard}>
          <h3>Business Hoodies</h3>
          <p>
            Professional branded hoodies for staff,
            teams and businesses.
          </p>
        </div>

        <div style={serviceCard}>
          <h3>Gym & Fitness Wear</h3>
          <p>
            Custom wear for gyms, fitness brands
            and personal trainers.
          </p>
        </div>

        <div style={serviceCard}>
          <h3>Event Merchandise</h3>
          <p>
            High-quality printed workwear for events,
            promotions and campaigns.
          </p>
        </div>

        <div style={serviceCard}>
          <h3>Bulk Orders</h3>
          <p>
            Competitive pricing and discounts for
            larger quantities.
          </p>
        </div>
      </div>

      {/* CTA */}

      <div
        style={{
          background: "#111",
          color: "white",
          padding: "60px 30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Get a Free workwear Printing Quote
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Whether you need 10 branded Tshirts, Hoodies, Caps, Sweatshirt or 500, Kett Press Co
          provides premium custom printing with fast
          turnaround across Northamptonshire.
        </p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button style={whatsappButton}>
            WhatsApp For A Quote
          </button>
        </a>
      </div>

    </div>
  );
}