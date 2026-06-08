import { useEffect } from "react";

export default function ChurchEventHoodies() {
  useEffect(() => {
    document.title =
      "Church Event Hoodie Printing | Custom Event Hoodies | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Custom church event hoodie printing by Kett Press Co. Premium personalised hoodies for churches, youth groups, charities and community events across Northamptonshire.";

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
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: "1.2",
    marginBottom: "24px",
    fontWeight: "700",
  }}
>
  Custom Hoodies For A Local Church Event
</h1>

<p
  style={{
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "18px",
    padding: "0 15px",
  }}
>
  Premium custom hoodie printing completed for a local church
  event in Northamptonshire. High-quality garments, durable
  printing and a professional finish for volunteers,
  organisers and attendees.
</p>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/hoodie.jpg"
          alt="Custom Church Event Hoodies"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* PROJECT OVERVIEW */}
      <section
        style={{
          padding: "40px 20px 100px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2>Project Overview</h2>

        <p
          style={{
            lineHeight: "1.9",
            color: "#555",
          }}
        >
          Kett Press Co recently produced custom printed hoodies for a
          local church event in Northamptonshire. The goal was to provide
          a professional and consistent look for volunteers and attendees
          while creating memorable event apparel that could be worn long
          after the event finished.
        </p>

        <p
          style={{
            lineHeight: "1.9",
            color: "#555",
          }}
        >
          Using premium garments and high-quality printing techniques,
          we delivered durable custom hoodies designed to look great,
          feel comfortable and promote a strong sense of community.
        </p>
      </section>

      {/* GALLERY */}
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
            Project Gallery
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "25px",
            }}
          >
            <img
              src="/images/event1.jpg"
              alt="Church Event Hoodie Printing"
              style={{ width: "100%", borderRadius: "16px" }}
            />

            <img
              src="/images/event2.jpg"
              alt="Custom Event Hoodies"
              style={{ width: "100%", borderRadius: "16px" }}
            />

            <img
              src="/images/event3.jpg"
              alt="Printed Hoodies Northamptonshire"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
        </div>
      </section>

      {/* WHAT WE PRINTED */}
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
          What We Printed
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>Custom Hoodies</div>
          <div style={cardStyle}>Volunteer Apparel</div>
          <div style={cardStyle}>Event Clothing</div>
          <div style={cardStyle}>Community Merchandise</div>
          <div style={cardStyle}>Group Clothing</div>
          <div style={cardStyle}>Personalised Apparel</div>
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
                fontSize: "20px",
                marginBottom: "15px",
              }}
            >
              ★★★★★
            </div>

            <p style={{ lineHeight: "1.8" }}>
              "Amazing customer service, great quality and beautiful
              personalised designs."
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
        <h2>Church Event Hoodie Printing Northamptonshire</h2>

        <p>
          Kett Press Co provides professional hoodie printing for churches,
          youth groups, charities, community organisations and local events
          throughout Northamptonshire.
        </p>

        <p>
          Our custom hoodie printing service is ideal for volunteers,
          organisers, leadership teams and attendees who want high-quality
          personalised clothing that promotes their event and creates a
          professional appearance.
        </p>

        <p>
          We proudly serve customers across Kettering, Wellingborough,
          Corby, Northampton and the surrounding areas with premium custom
          printing on hoodies, T-shirts, workwear and branded apparel.
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
        <h2>Need Custom Hoodies For Your Event?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
          }}
        >
          Whether you're organising a church event, youth conference,
          charity fundraiser, sports club or community gathering,
          Kett Press Co can provide premium custom hoodie printing.
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