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

export default function dtfprintingnorthamptonshire() {
  useEffect(() => {
    document.title =
      "DTF Printing Northamptonshire | Custom Garment Printing | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional DTF printing in Northamptonshire. High-quality direct-to-film printing for T-shirts, hoodies, workwear and custom clothing.";
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
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/event2.jpg')",
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
          DTF Printing Northamptonshire
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
          Premium Direct-To-Film printing for businesses,
          brands, events and organisations across
          Northamptonshire.
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
          What Is DTF Printing?
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          DTF (Direct-To-Film) printing is one of the most
          durable and vibrant garment printing methods available.
          It produces full-colour prints with excellent detail and
          long-lasting results on T-shirts, hoodies, workwear and
          many other garments.
        </p>
      </section>

      {/* GALLERY */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Recent Printing Projects
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
          src="/images/event1.jpg"
          alt="DTF Printing"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />

        <img
          src="/images/event2.jpg"
          alt="Custom Printing"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />

        <img
          src="/images/event3.jpg"
          alt="Printed Clothing"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* SERVICES */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "32px",
        }}
      >
        Our DTF Printing Services
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
          <h3>T-Shirt Printing</h3>
          <p>Premium full-colour custom T-shirt printing.</p>
        </div>

        <div style={serviceCard}>
          <h3>Hoodie Printing</h3>
          <p>High-quality printed hoodies for brands and teams.</p>
        </div>

        <div style={serviceCard}>
          <h3>Workwear Printing</h3>
          <p>Durable branded clothing for businesses and trades.</p>
        </div>

        <div style={serviceCard}>
          <h3>Bulk Orders</h3>
          <p>Competitive pricing for larger quantity orders.</p>
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
        <h2>Get a Free DTF Printing Quote</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 30px",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Need custom garment printing in Northamptonshire?
          Contact Kett Press Co today for a fast,
          no-obligation quote.
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