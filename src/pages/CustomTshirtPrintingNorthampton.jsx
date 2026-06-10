import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomTshirtPrintingNorthampton() {
  const gallery = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>
          Custom T-Shirt Printing Northampton | Branded Clothing & Workwear |
          Kett Press Co
        </title>

        <meta
          name="description"
          content="Custom T-shirt printing in Northampton for businesses, events, schools, gyms and organisations. Premium branded workwear, hoodies and logo printing from Kett Press Co."
        />

        <link
          rel="canonical"
          href="https://kettpressco.com/custom-t-shirt-printing-northampton"
        />
      </Helmet>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          lineHeight: "1.8",
        }}
      >
        {/* HERO */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                background: "#D62828",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "999px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Northampton Printing Specialists
            </span>

            <h1
              style={{
                fontSize: "clamp(40px,6vw,68px)",
                marginTop: "20px",
                lineHeight: "1.1",
              }}
            >
              Custom T-Shirt Printing Northampton
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "#555",
                maxWidth: "700px",
              }}
            >
              Professional custom T-shirt printing, branded workwear,
              promotional clothing, uniforms and custom hoodies for
              businesses, schools, gyms, charities and events across
              Northampton and Northamptonshire.
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
                  fontWeight: "bold",
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
                  fontWeight: "bold",
                }}
              >
                Call Now
              </a>
            </div>
          </div>

          <img
            src="/images/work1.jpg"
            alt="Custom T-Shirt Printing Northampton"
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
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Premium Print Quality",
            "Fast Turnaround",
            "Business Workwear",
            "Northamptonshire Coverage",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#f8f8f8",
                padding: "25px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </section>

        {/* ABOUT */}

        <section style={{ marginTop: "90px" }}>
          <h2>Professional Custom Clothing Printing In Northampton</h2>

          <p>
            Kett Press Co supplies custom printed clothing for organisations
            throughout Northampton. We help businesses create a professional
            image through branded uniforms, custom workwear, promotional
            clothing and high-quality printed apparel.
          </p>

          <p>
            Whether you need staff uniforms, branded T-shirts for events,
            custom hoodies for teams or promotional clothing for marketing,
            our printing solutions help your organisation stand out.
          </p>
        </section>

        {/* GALLERY */}

        <section style={{ marginTop: "90px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Recent Printing Projects
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Kett Press Co Printing Project"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            ))}
          </div>
        </section>

        {/* SERVICES */}

        <section style={{ marginTop: "90px" }}>
          <h2>Services Available In Northampton</h2>

          <ul>
            <li>Custom T-Shirt Printing</li>
            <li>Branded Workwear Printing</li>
            <li>Company Logo Printing</li>
            <li>Custom Hoodie Printing</li>
            <li>Event Clothing</li>
            <li>Gym & Fitness Apparel</li>
            <li>School & College Clothing</li>
            <li>Charity Event Merchandise</li>
          </ul>
        </section>

        {/* INDUSTRIES */}

        <section style={{ marginTop: "90px" }}>
          <h2>Industries We Serve</h2>

          <ul>
            <li>Construction Companies</li>
            <li>Electricians & Tradespeople</li>
            <li>Restaurants & Hospitality</li>
            <li>Schools & Colleges</li>
            <li>Churches & Ministries</li>
            <li>Gyms & Fitness Brands</li>
            <li>Sports Clubs</li>
            <li>Corporate Businesses</li>
            <li>Local Startups</li>
            <li>Event Organisers</li>
          </ul>
        </section>

        {/* LOCAL AREAS */}

        <section style={{ marginTop: "90px" }}>
          <h2>Areas We Cover Around Northampton</h2>

          <p>
            We provide custom printing services throughout Northampton
            including Brackmills, Sixfields, Moulton Park, Kingsthorpe,
            Duston, Abington, Weston Favell, Upton, St James,
            Delapre and surrounding areas.
          </p>
        </section>

        {/* FAQ */}

        <section style={{ marginTop: "90px" }}>
          <h2>Frequently Asked Questions</h2>

          <h3>Where can I get custom T-shirt printing in Northampton?</h3>
          <p>
            Kett Press Co provides professional custom T-shirt printing,
            workwear printing and branded clothing for businesses and
            organisations throughout Northamptonshire.
          </p>

          <h3>Can you print company logos onto clothing?</h3>
          <p>
            Yes. We print logos, branding, artwork and custom designs onto
            T-shirts, hoodies, uniforms and workwear.
          </p>

          <h3>Do you provide branded workwear in Northampton?</h3>
          <p>
            Yes. We supply printed workwear and uniforms for trades,
            construction companies, hospitality businesses and offices.
          </p>

          <h3>Do you print hoodies?</h3>
          <p>
            Yes. Custom hoodies are popular for businesses, sports teams,
            schools, churches and events.
          </p>

          <h3>Why choose Kett Press Co?</h3>
          <p>
            We focus on quality printing, reliable turnaround times,
            professional branding and excellent customer service for
            organisations across Northamptonshire.
          </p>
        </section>

        {/* CTA */}

        <section
          style={{
            marginTop: "100px",
            background: "#f5f5f5",
            padding: "60px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Need Custom T-Shirt Printing In Northampton?</h2>

          <p>
            Get professional branded clothing, workwear and custom printing
            from Kett Press Co.
          </p>

          <a
            href="/#quote"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#D62828",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request Your Quote
          </a>
        </section>
      </main>
    </>
  );
}