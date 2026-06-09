import { useEffect } from "react";

export default function GymWearPrintingNorthampton() {
  useEffect(() => {
    document.title =
      "Gym Wear Printing Northampton | Custom Fitness Clothing | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional gym wear printing in Northampton. Custom printed gym clothing, fitness apparel, PT uniforms, gym T-shirts and branded activewear by Kett Press Co.";

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  };

  const buttonStyle = {
    background: "#25D366",
    color: "#fff",
    border: "none",
    padding: "16px 30px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  };

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#111827",
          color: "#fff",
          padding: "140px 20px 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              lineHeight: "1.2",
              marginBottom: "25px",
            }}
          >
            Gym Wear Printing Northampton
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Premium custom gym wear printing for gyms, personal trainers,
            fitness brands, sports clubs and fitness events throughout
            Northampton and Northamptonshire.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/tshirt4.jpg"
          alt="Gym Wear Printing Northampton"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* OVERVIEW */}
      <section
        style={{
          padding: "40px 20px 100px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2>Professional Gym Clothing Printing</h2>

        <p
          style={{
            lineHeight: "1.9",
            color: "#555",
          }}
        >
          Kett Press Co provides professional gym wear printing in
          Northampton for fitness businesses, personal trainers,
          sports teams and activewear brands.
        </p>

        <p
          style={{
            lineHeight: "1.9",
            color: "#555",
          }}
        >
          Whether you need branded gym T-shirts, training tops,
          fitness hoodies or activewear merchandise, we deliver
          premium quality printing with a professional finish.
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          background: "#f8fafc",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Gym Wear We Print
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>Gym T-Shirts</div>
            <div style={cardStyle}>Personal Trainer Clothing</div>
            <div style={cardStyle}>Fitness Hoodies</div>
            <div style={cardStyle}>Training Wear</div>
            <div style={cardStyle}>Sports Club Apparel</div>
            <div style={cardStyle}>Fitness Brand Merchandise</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          padding: "100px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Why Fitness Businesses Choose Kett Press Co
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>Premium Quality Printing</div>
          <div style={cardStyle}>Fast Turnaround</div>
          <div style={cardStyle}>Bulk Order Discounts</div>
          <div style={cardStyle}>Professional Branding</div>
        </div>
      </section>

      {/* REVIEW */}
      <section
        style={{
          background: "#f8fafc",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2>Customer Feedback</h2>

          <div
            style={{
              ...cardStyle,
              marginTop: "30px",
            }}
          >
            <div
              style={{
                color: "#f59e0b",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              ★★★★★
            </div>

            <p style={{ lineHeight: "1.8" }}>
              Amazing customer service, great quality and beautiful
              personalised designs.
            </p>

            <strong>Ruvimbo Zimuto</strong>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section
        style={{
          padding: "100px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2>Custom Fitness Apparel Northampton</h2>

        <p>
          We help gyms, personal trainers, fitness coaches and sports
          clubs create professional branded clothing that promotes
          their business and strengthens their brand identity.
        </p>

        <p>
          Our gym wear printing service includes T-shirts, hoodies,
          sweatshirts, training tops and custom fitness apparel
          suitable for both everyday training and promotional use.
        </p>

        <p>
          We proudly serve Northampton, Kettering, Wellingborough,
          Corby and the wider Northamptonshire area.
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#111827",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2>Need Custom Gym Wear?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
          }}
        >
          Get premium custom gym wear, fitness apparel and branded
          training clothing printed by Kett Press Co.
        </p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button style={buttonStyle}>
            WhatsApp For A Quote
          </button>
        </a>
      </section>
    </>
  );
}