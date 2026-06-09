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

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#111827",
          color: "#fff",
          padding: "120px 20px",
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
              fontSize: "clamp(2.5rem,5vw,4rem)",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Areas We Cover Across Northamptonshire
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Kett Press Co provides premium T-shirt printing, workwear
            printing, hoodie printing and custom branded clothing for
            businesses, organisations, events and individuals throughout
            Northamptonshire.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2>Local Printing Specialists</h2>

        <p style={{ lineHeight: "1.9", color: "#555" }}>
          We work with businesses, schools, gyms, charities, churches,
          sports teams and organisations throughout Northamptonshire.
          Whether you need custom T-shirts, branded workwear, hoodies,
          uniforms or promotional clothing, Kett Press Co delivers
          professional results with fast turnaround times.
        </p>
      </section>

      {/* AREAS GRID */}
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
            Areas We Serve
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div style={areaCard}>Kettering</div>
            <div style={areaCard}>Northampton</div>
            <div style={areaCard}>Wellingborough</div>
            <div style={areaCard}>Corby</div>
            <div style={areaCard}>Rushden</div>
            <div style={areaCard}>Rothwell</div>
            <div style={areaCard}>Desborough</div>
            <div style={areaCard}>Burton Latimer</div>
          </div>
        </div>
      </section>

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