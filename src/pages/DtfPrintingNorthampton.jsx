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

export default function DtfPrintingNorthampton() {
  useEffect(() => {
    document.title =
      "DTF Printing Northampton | Custom Garment Printing | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional DTF Printing Northampton. Custom DTF transfers, T-shirt printing, hoodie printing and workwear printing across Northamptonshire.";
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
          DTF Printing Northampton
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Premium Direct-To-Film printing for businesses,
          brands, events, gyms and organisations throughout
          Northampton.
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

      {/* BENEFITS */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Benefits of DTF Printing
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={serviceCard}>
            <h3>Vibrant Full Colour Prints</h3>
            <p>
              Sharp, detailed prints with outstanding colour
              reproduction and image quality.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Long Lasting Durability</h3>
            <p>
              Designed to withstand regular washing and
              everyday wear.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>No Minimum Orders</h3>
            <p>
              Perfect for one-off garments or large production runs.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Works On Multiple Fabrics</h3>
            <p>
              Suitable for cotton, polyester and blended materials.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE PRINTED */}

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          What Can Be Printed?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={serviceCard}>
            <h3>T-Shirts</h3>
            <p>
              Custom branded T-shirts for businesses,
              events and promotions.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Hoodies</h3>
            <p>
              Premium printed hoodies for teams,
              organisations and brands.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Workwear</h3>
            <p>
              Durable branded workwear for trades,
              companies and staff uniforms.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Sportswear</h3>
            <p>
              Custom teamwear and performance clothing
              with vibrant print quality.
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
            src="/images/event1.jpg"
            alt="DTF Printing Project"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <img
            src="/images/event2.jpg"
            alt="Custom Printed Apparel"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <img
            src="/images/event3.jpg"
            alt="Branded Clothing"
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontWeight: "600",
          }}
        >
          <span>✓ Premium DTF Printing</span>
          <span>✓ Fast Turnaround</span>
          <span>✓ Bulk Order Discounts</span>
          <span>✓ Northamptonshire Based</span>
          <span>✓ Quality Checked</span>
          <span>✓ Friendly Service</span>
        </div>
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
          We provide DTF Printing throughout Northamptonshire
          including Northampton, Kettering, Corby,
          Wellingborough, Rushden, Burton Latimer,
          Rothwell, Market Harborough and surrounding areas.
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
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Need DTF Printing in Northampton?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Whether you need custom T-shirts, branded workwear,
          hoodies or promotional clothing, Kett Press Co
          delivers premium DTF printing with fast turnaround
          and competitive pricing.
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