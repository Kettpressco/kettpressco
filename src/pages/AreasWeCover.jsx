import { useEffect } from "react";

export default function AreasWeCover() {
  useEffect(() => {
    document.title =
      "Areas We Cover | T-Shirt & Workwear Printing Across Northamptonshire | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Kett Press Co provides T-shirt printing, workwear printing, hoodie printing and custom clothing across Kettering, Northampton, Wellingborough, Corby, Rushden, Rothwell and Northamptonshire.";

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const areaCard = {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  };
  const heroImage = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "16px",
};

  return (
    <>
     <section
  style={{
    position: "relative",
    minHeight: "80vh",
    backgroundImage: "url('/images/work1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "1000px",
      textAlign: "center",
      color: "#fff",
      padding: "20px",
    }}
  >
    <h1
      style={{
        fontSize: "clamp(2.5rem,5vw,4.5rem)",
        lineHeight: "1.2",
        marginBottom: "20px",
      }}
    >
      Custom Printing Across Northamptonshire
    </h1>

    <p
      style={{
        maxWidth: "750px",
        margin: "0 auto",
        fontSize: "18px",
        lineHeight: "1.8",
      }}
    >
      Premium T-Shirt Printing, Workwear Printing,
      Hoodie Printing and Branded Apparel for
      businesses, events, organisations and teams
      across Northamptonshire.
    </p>
  </div>
</section>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "15px",
    marginTop: "50px",
  }}
>
  <img src="/images/work1.jpg" alt="" style={heroImage} />
  <img src="/images/work2.jpg" alt="" style={heroImage} />
  <img src="/images/work3.jpg" alt="" style={heroImage} />
</div>

      {/* GALLERY */}
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
          Recent Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          <img
            src="/images/event1.jpg"
            alt="Custom T-Shirt Printing"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/event2.jpg"
            alt="Printed Event Clothing"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/event3.jpg"
            alt="Custom Branded Apparel"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/work1.jpg"
            alt="Printed Workwear"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/work2.jpg"
            alt="Workwear Printing"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/work3.jpg"
            alt="Custom Uniform Printing"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
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
            Our Printing Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div style={areaCard}>T-Shirt Printing</div>
            <div style={areaCard}>Workwear Printing</div>
            <div style={areaCard}>Hoodie Printing</div>
            <div style={areaCard}>DTF Printing</div>
            <div style={areaCard}>Event Clothing</div>
            <div style={areaCard}>Branded Uniforms</div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section
        style={{
          padding: "100px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2>Popular Printing Services</h2>

        <ul style={{ lineHeight: "2.2" }}>
          <li>
            <a href="/t-shirt-printing-kettering">
              T-Shirt Printing Kettering
            </a>
          </li>

          <li>
            <a href="/t-shirt-printing-wellingborough">
              T-Shirt Printing Wellingborough
            </a>
          </li>

          <li>
            <a href="/t-shirt-printing-corby">
              T-Shirt Printing Corby
            </a>
          </li>

          <li>
            <a href="/workwear-printing-kettering">
              Workwear Printing Kettering
            </a>
          </li>

          <li>
            <a href="/workwear-printing-wellingborough">
              Workwear Printing Wellingborough
            </a>
          </li>

          <li>
            <a href="/workwear-printing-corby">
              Workwear Printing Corby
            </a>
          </li>

          <li>
            <a href="/construction-workwear-kettering">
              Construction Workwear Kettering
            </a>
          </li>

          <li>
            <a href="/gym-wear-printing-northampton">
              Gym Wear Printing Northampton
            </a>
          </li>
        </ul>
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
        <h2>Need Custom Printing?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
          }}
        >
          Contact Kett Press Co today for premium T-shirt printing,
          workwear printing, hoodie printing and branded apparel across
          Northamptonshire.
        </p>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              background: "#25D366",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            WhatsApp For A Quote
          </button>
             </a>
      </section>
    </>
  );
}