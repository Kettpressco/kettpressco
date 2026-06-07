import { useEffect } from "react";

const heroButton = {
  background: "#f97316",
  color: "white",
  border: "none",
  padding: "14px 30px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "14px 30px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};

export default function TshirtPrintingCorby() {
  useEffect(() => {
    document.title =
      "T-Shirt Printing Corby | Custom Printed T-Shirts | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional T-Shirt Printing in Corby. Custom printed T-shirts for businesses, events, gyms, schools and organisations throughout Northamptonshire.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* HERO */}

      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/tshirt4.jpg')",
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
          T-Shirt Printing Corby
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Premium custom T-shirt printing for businesses,
          events, sports teams, gyms and organisations
          throughout Corby and Northamptonshire.
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
        <span>✓ Premium DTF Printing</span>
        <span>✓ Fast Turnaround</span>
        <span>✓ Bulk Discounts</span>
        <span>✓ Northamptonshire Based</span>
        <span>✓ Quality Checked</span>
      </div>

      {/* SERVICES */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Our T-Shirt Printing Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={serviceCard}>
            <h3>Business T-Shirts</h3>
            <p>
              Professional branded T-shirts for businesses,
              teams and organisations.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Event Merchandise</h3>
            <p>
              High-quality printed apparel for events,
              promotions and campaigns.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Gym & Fitness Wear</h3>
            <p>
              Custom T-shirts for gyms, fitness brands
              and personal trainers.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Bulk Orders</h3>
            <p>
              Competitive pricing and discounts for
              larger quantity orders.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Recent Printing Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/tshirt3.jpg"
            alt="Custom T-Shirt Printing"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <img
            src="/images/tshirt.jpg"
            alt="Printed Clothing"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <img
            src="/images/tshirt2.jpg"
            alt="Branded Apparel"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Why Choose Kett Press Co?
        </h2>

        <p
          style={{
            textAlign: "center",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          We provide premium custom garment printing with
          exceptional quality, fast turnaround times and
          competitive pricing. Our DTF printing technology
          delivers vibrant colours, excellent durability and
          professional results for businesses and organisations
          across Corby and Northamptonshire.
        </p>
      </section>

      {/* SERVICE AREAS */}

      <section
        style={{
          background: "#f7f7f7",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Areas We Serve
        </h2>

        <p
          style={{
            textAlign: "center",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          We provide T-shirt printing throughout Corby,
          Kettering, Wellingborough, Northampton,
          Rushden, Burton Latimer, Rothwell and the
          wider Northamptonshire area.
        </p>
      </section>

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
        <h2>Need T-Shirt Printing in Corby?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 30px",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Contact Kett Press Co today for high-quality custom
          T-shirt printing, workwear and branded clothing with
          fast turnaround and competitive pricing.
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