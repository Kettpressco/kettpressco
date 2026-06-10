import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomTshirtPrintingKettering() {
  return (
    <>
      <Helmet>
        <title>
          Custom T-Shirt Printing Kettering | Workwear, Hoodies & Branded Clothing | Kett Press Co
        </title>

        <meta
          name="description"
          content="Professional custom T-shirt printing in Kettering. Printed workwear, hoodies, uniforms and branded clothing for businesses, schools, gyms, churches and events across Northamptonshire."
        />

        <link
          rel="canonical"
          href="https://kettpressco.com/custom-t-shirt-printing-kettering"
        />
      </Helmet>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* HERO */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div>
            <span
              style={{
                background: "#D62828",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Kettering Custom Clothing Specialists
            </span>

            <h1
              style={{
                fontSize: "clamp(40px,6vw,70px)",
                lineHeight: "1.1",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Custom T-Shirt Printing in Kettering
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#555",
                maxWidth: "700px",
              }}
            >
              Premium T-shirt printing, branded workwear, hoodies,
              uniforms and promotional clothing for businesses,
              tradespeople, schools, gyms, churches and events
              throughout Kettering and Northamptonshire.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/#quote"
                style={{
                  background: "#D62828",
                  color: "#fff",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Request A Quote
              </a>

              <a
                href="tel:07770118148"
                style={{
                  border: "2px solid #D62828",
                  color: "#D62828",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Call Now
              </a>
            </div>
          </div>

          <img
            src="/images/work1.jpg"
            alt="Custom T-Shirt Printing Kettering"
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </section>

        {/* TRUST BAR */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          {[
            "Fast Turnaround",
            "Premium Print Quality",
            "Bulk Orders Welcome",
            "Local Northamptonshire Service",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "25px",
                borderRadius: "15px",
                background: "#f7f7f7",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              {item}
            </div>
          ))}
        </section>

        {/* SERVICES */}

        <section style={{ marginBottom: "80px" }}>
          <h2>What We Print</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
              marginTop: "30px",
            }}
          >
            <div>
              <h3>Custom T-Shirts</h3>
              <p>
                Printed T-shirts for businesses, events,
                promotions and teams.
              </p>
            </div>

            <div>
              <h3>Branded Workwear</h3>
              <p>
                Professional uniforms and work clothing
                with your logo.
              </p>
            </div>

            <div>
              <h3>Custom Hoodies</h3>
              <p>
                Hoodies for schools, churches, sports
                clubs and businesses.
              </p>
            </div>

            <div>
              <h3>Logo Printing</h3>
              <p>
                Sharp, durable branding for professional
                company clothing.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}

        <section style={{ marginBottom: "80px" }}>
          <h2>Recent Kett Press Co Work</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <img src="/images/work1.jpg" alt="" />
            <img src="/images/work2.jpg" alt="" />
            <img src="/images/work3.jpg" alt="" />
            <img src="/images/event1.jpg" alt="" />
            <img src="/images/event2.jpg" alt="" />
            <img src="/images/event3.jpg" alt="" />
          </div>
        </section>

        {/* MAP */}

        <section style={{ marginBottom: "80px" }}>
          <h2>Serving Kettering & Surrounding Areas</h2>

          <iframe
            title="Kettering Map"
            src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "20px",
              marginTop: "20px",
            }}
            loading="lazy"
          />

          <p style={{ marginTop: "25px" }}>
            We provide custom clothing printing throughout
            Kettering, Barton Seagrave, Burton Latimer,
            Rothwell, Desborough, Mawsley and surrounding
            Northamptonshire locations.
          </p>
        </section>

        {/* FAQ */}

        <section style={{ marginBottom: "80px" }}>
          <h2>Frequently Asked Questions</h2>

          <h3>Can you print my company logo?</h3>
          <p>
            Yes. We print company logos, artwork and branding
            onto T-shirts, hoodies and workwear.
          </p>

          <h3>Do you supply the garments?</h3>
          <p>
            Yes. We can supply a wide range of T-shirts,
            hoodies and workwear ready for printing.
          </p>

          <h3>Do you offer bulk orders?</h3>
          <p>
            Yes. We regularly produce bulk orders for
            businesses, events and organisations.
          </p>

          <h3>How long does printing take?</h3>
          <p>
            Turnaround depends on quantity and garment type,
            but we always aim for fast, reliable delivery.
          </p>
        </section>

        {/* INTERNAL LINKS */}

        <section style={{ marginBottom: "80px" }}>
          <h2>Related Printing Services</h2>

          <ul>
            <li>
              <a href="/custom-t-shirt-printing-northampton">
                Custom T-Shirt Printing Northampton
              </a>
            </li>

            <li>
              <a href="/hoodie-printing-northampton">
                Hoodie Printing Northampton
              </a>
            </li>

            <li>
              <a href="/gym-wear-printing-northampton">
                Gym Wear Printing Northampton
              </a>
            </li>

            <li>
              <a href="/dtf-printing-northamptonshire">
                DTF Printing Northamptonshire
              </a>
            </li>
          </ul>
        </section>

        {/* CTA */}

        <section
          style={{
            background: "#f5f5f5",
            padding: "60px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Need Custom T-Shirt Printing In Kettering?</h2>

          <p>
            Get a fast quote for branded clothing, workwear,
            uniforms and promotional apparel.
          </p>

          <a
            href="/#quote"
            style={{
              background: "#D62828",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "10px",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            Request Your Quote
          </a>
        </section>
      </main>
    </>
  );
}