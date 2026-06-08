```jsx
import { useEffect } from "react";

export default function WorkwearPrintingWellingborough() {
  useEffect(() => {
    document.title =
      "Workwear Printing Wellingborough | Branded Workwear & Uniform Printing | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional workwear printing in Wellingborough. Custom branded workwear, uniforms, polo shirts, hoodies and hi-vis clothing for businesses across Northamptonshire.";

    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const serviceCard = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              marginBottom: "20px",
            }}
          >
            Workwear Printing Wellingborough
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Professional branded workwear, uniforms, polo shirts,
            hoodies and hi-vis clothing for businesses throughout
            Wellingborough and Northamptonshire.
          </p>
        </div>
      </section>

      {/* SERVICES */}
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
          Workwear Printing Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={serviceCard}>👕 Printed Workwear</div>
          <div style={serviceCard}>🦺 Hi-Vis Clothing</div>
          <div style={serviceCard}>🏢 Company Uniforms</div>
          <div style={serviceCard}>👔 Polo Shirts</div>
          <div style={serviceCard}>🧥 Branded Hoodies</div>
          <div style={serviceCard}>🚚 Trade & Construction Workwear</div>
        </div>
      </section>

      {/* INDUSTRIES */}
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
            Industries We Serve
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div style={serviceCard}>Construction Companies</div>
            <div style={serviceCard}>Tradespeople</div>
            <div style={serviceCard}>Electricians</div>
            <div style={serviceCard}>Plumbers</div>
            <div style={serviceCard}>Landscaping Businesses</div>
            <div style={serviceCard}>Retail Businesses</div>
            <div style={serviceCard}>Gyms & Fitness Brands</div>
            <div style={serviceCard}>Hospitality & Catering</div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        style={{
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
            Recent Work
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "25px",
            }}
          >
            <img
              src="/images/work1.jpg"
              alt="Printed Workwear Wellingborough"
              style={{
                width: "100%",
                borderRadius: "16px",
              }}
            />

            <img
              src="/images/work2.jpg"
              alt="Branded Uniform Printing"
              style={{
                width: "100%",
                borderRadius: "16px",
              }}
            />

            <img
              src="/images/work3.jpg"
              alt="Custom Workwear Northamptonshire"
              style={{
                width: "100%",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
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
            ⭐⭐⭐⭐⭐ Customer Reviews
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            <div style={serviceCard}>
              <p>"Amazing professional work."</p>
              <strong>Tinashe</strong>
            </div>

            <div style={serviceCard}>
              <p>"High quality hoodie and print."</p>
              <strong>Bessie Gore</strong>
            </div>

            <div style={serviceCard}>
              <p>
                "Amazing customer service, great quality and beautiful
                personalised designs."
              </p>
              <strong>Ruvimbo Zimuto</strong>
            </div>
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
        <h2>Workwear Printing in Wellingborough</h2>

        <p>
          Kett Press Co provides professional workwear printing in
          Wellingborough for businesses, tradespeople, contractors,
          retailers and organisations throughout Northamptonshire.
        </p>

        <p>
          We supply branded uniforms, printed polo shirts, hoodies,
          sweatshirts and custom workwear designed to help businesses
          create a professional image while promoting their brand.
        </p>

        <p>
          We proudly serve Wellingborough, Rushden, Finedon,
          Irthlingborough, Earls Barton and surrounding areas.
        </p>
      </section>
    </>
  );
}
```
