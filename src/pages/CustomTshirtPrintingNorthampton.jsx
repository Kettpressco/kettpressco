import React from "react";
import { Helmet } from "react-helmet-async";
import RelatedProducts from "../components/RelatedProducts";

export default function CustomTshirtPrintingNorthampton() {
  const gallery = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
  ];

  const sectionStyle = {
    marginTop: "90px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  };

  const buttonStyle = {
    display: "inline-block",
    background: "#D62828",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const darkButtonStyle = {
    ...buttonStyle,
    background: "#111",
  };

  const linkStyle = {
    color: "#D62828",
    fontWeight: "600",
    textDecoration: "underline",
  };

  return (
    <>
      <Helmet>
        <title>
          Custom T-Shirt Printing Northampton | Personalised T-Shirts | Kett
          Press Co
        </title>

        <meta
          name="description"
          content="Custom T-shirt printing in Northampton for businesses, events, schools, gyms, clubs and organisations. Shop personalised T-shirts or request a custom clothing quote from Kett Press Co."
        />

        <link
          rel="canonical"
          href="https://www.kettpressco.com/custom-t-shirt-printing-northampton"
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
              Custom Clothing In Northampton
            </span>

            <h1
              style={{
                fontSize: "clamp(40px,6vw,68px)",
                marginTop: "20px",
                marginBottom: "20px",
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
              Create personalised T-shirts with your own logo, artwork or
              design. Kett Press Co provides custom printed clothing for
              businesses, events, schools, gyms, clubs and organisations across
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
              <a href="#shop-custom-tshirts" style={buttonStyle}>
                Shop Custom T-Shirts
              </a>

              <a href="/#quote" style={darkButtonStyle}>
                Request A Quote
              </a>

              <a
                href="tel:07770118148"
                style={{
                  border: "2px solid #D62828",
                  color: "#D62828",
                  padding: "13px 28px",
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
            alt="Custom T-shirt printing in Northampton by Kett Press Co"
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
            "Custom Artwork Printing",
            "Small & Large Orders",
            "Fast Turnaround",
            "Northamptonshire Based",
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
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Personalised T-Shirts & Custom Clothing In Northampton</h2>

            <p style={{ color: "#444" }}>
              Kett Press Co helps customers create personalised T-shirts using
              their own logos, artwork, graphics and designs. Our custom
              clothing service is suitable for businesses, teams, schools,
              events and individuals throughout Northampton.
            </p>

            <p style={{ color: "#444" }}>
              Whether you need branded T-shirts for your staff, matching shirts
              for an event, promotional clothing for your business or
              personalised garments for a group, we can help you create
              clothing that matches your requirements.
            </p>

            <p style={{ color: "#444" }}>
              For our broader local printing service, including general T-shirt
              printing options for businesses and organisations, visit our{" "}
              <a href="/t-shirt-printing-northampton" style={linkStyle}>
                T-shirt printing Northampton
              </a>{" "}
              page.
            </p>
          </div>
        </section>

        {/* CUSTOM PRINTING OPTIONS */}
        <section style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            What Can You Create?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>Logo T-Shirts</h3>

              <p style={{ color: "#555" }}>
                Add your business logo to T-shirts for staff uniforms,
                promotions and customer-facing teams.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Event T-Shirts</h3>

              <p style={{ color: "#555" }}>
                Create personalised clothing for birthdays, charity events,
                celebrations, festivals and group activities.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Team Clothing</h3>

              <p style={{ color: "#555" }}>
                Produce matching custom clothing for clubs, sports teams,
                schools and community organisations.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Promotional Clothing</h3>

              <p style={{ color: "#555" }}>
                Print your company branding or campaign message onto clothing
                for promotions and marketing activities.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Gym & Fitness T-Shirts</h3>

              <p style={{ color: "#555" }}>
                Create personalised shirts for gyms, personal trainers, fitness
                teams and active lifestyle brands.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Custom Artwork</h3>

              <p style={{ color: "#555" }}>
                Upload your own artwork or design and personalise selected
                garments through our online ordering process.
              </p>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section
          id="shop-custom-tshirts"
          style={{
            marginTop: "90px",
            background: "#f8fafc",
            padding: "70px 30px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,4vw,2.8rem)",
                marginBottom: "15px",
              }}
            >
              Shop Custom T-Shirts
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "1.05rem",
              }}
            >
              Browse popular T-shirts available for personalisation. Choose
              your garment, colour and size, then add your artwork or branding
              when placing your order.
            </p>
          </div>

          <RelatedProducts
            categories={["T-Shirt", "Tshirt", "T Shirt"]}
            limit={8}
            title="Popular T-Shirts For Personalisation"
          />
        </section>

        {/* HOW IT WORKS */}
        <section style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            How Custom T-Shirt Printing Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>1. Choose Your T-Shirt</h3>

              <p style={{ color: "#555" }}>
                Browse available garments and select your preferred style,
                colour and size.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>2. Add Your Design</h3>

              <p style={{ color: "#555" }}>
                Upload your business logo, artwork or custom design when
                personalising your garment.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>3. Place Your Order</h3>

              <p style={{ color: "#555" }}>
                Complete your order online or contact us for help with larger
                quantities and more complex requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Custom Clothing Services Available In Northampton</h2>

            <ul>
              <li>Personalised T-Shirt Printing</li>
              <li>Custom Logo T-Shirts</li>
              <li>Business Branded Clothing</li>
              <li>Custom Hoodie Printing</li>
              <li>Event T-Shirts</li>
              <li>Gym & Fitness Apparel</li>
              <li>School & College Clothing</li>
              <li>Charity Event Merchandise</li>
              <li>Team Clothing</li>
              <li>Promotional Apparel</li>
            </ul>

            <p style={{ color: "#444" }}>
              Customers looking for our complete range of local T-shirt
              printing services can also visit our{" "}
              <a href="/t-shirt-printing-northampton" style={linkStyle}>
                Northampton T-shirt printing service
              </a>
              .
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Recent Custom Clothing Projects
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
                alt={`Custom clothing printing project ${index + 1}`}
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

        {/* INDUSTRIES */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Custom T-Shirts For Businesses & Organisations</h2>

            <p style={{ color: "#444" }}>
              Personalised clothing can be used by many different types of
              businesses, groups and organisations throughout Northampton.
            </p>

            <ul
              style={{
                columns: 2,
              }}
            >
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
              <li>Charities</li>
              <li>Community Groups</li>
            </ul>
          </div>
        </section>

        {/* PRINTING METHOD */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Custom DTF T-Shirt Printing</h2>

            <p style={{ color: "#444" }}>
              We use DTF printing for many custom clothing orders. This method
              is suitable for colourful artwork, detailed graphics and business
              branding across many popular garment types.
            </p>

            <p style={{ color: "#444" }}>
              The best printing option can depend on your design, garment and
              intended use. Contact us if you need help deciding how to produce
              your personalised clothing.
            </p>
          </div>
        </section>

        {/* LOCAL AREAS */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Custom T-Shirt Printing Across Northampton</h2>

            <p style={{ color: "#444" }}>
              We provide custom clothing services for customers across
              Northampton, including Brackmills, Sixfields, Moulton Park,
              Kingsthorpe, Duston, Abington, Weston Favell, Upton, St James,
              Delapre and surrounding areas.
            </p>

            <p style={{ color: "#444" }}>
              Kett Press Co is based in Kettering, Northamptonshire, serving
              customers across Northampton and the wider county.
            </p>

            <p style={{ color: "#444" }}>
              Visit our main{" "}
              <a href="/t-shirt-printing-northampton" style={linkStyle}>
                T-shirt printing Northampton page
              </a>{" "}
              for information about our broader local printing service.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3>Can I create my own personalised T-shirt?</h3>

              <p style={{ color: "#555" }}>
                Yes. You can choose an available garment and provide your own
                logo, artwork or custom design for printing.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Can you print company logos onto T-shirts?</h3>

              <p style={{ color: "#555" }}>
                Yes. We can print business logos and custom branding onto
                suitable T-shirts and other clothing.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Do you offer small custom T-shirt orders?</h3>

              <p style={{ color: "#555" }}>
                Yes. We can help with smaller personalised orders as well as
                larger business and organisation requirements.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Can I order custom T-shirts online?</h3>

              <p style={{ color: "#555" }}>
                Yes. You can browse selected products on this page and continue
                through the online customisation and ordering process.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Do you provide general T-shirt printing in Northampton?</h3>

              <p style={{ color: "#555" }}>
                Yes. You can find more information about our wider local service
                on our{" "}
                <a href="/t-shirt-printing-northampton" style={linkStyle}>
                  T-shirt printing Northampton
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "100px",
            background: "#111",
            color: "#fff",
            padding: "60px 30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Create Your Custom T-Shirts</h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "20px auto",
            }}
          >
            Shop personalised T-shirts online or contact Kett Press Co for help
            creating custom clothing for your business, event, team or
            organisation.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <a href="#shop-custom-tshirts" style={buttonStyle}>
              Shop Custom T-Shirts
            </a>

            <a
              href="/#quote"
              style={{
                ...buttonStyle,
                background: "#fff",
                color: "#111",
              }}
            >
              Request Your Quote
            </a>
          </div>

          <p
            style={{
              marginTop: "30px",
            }}
          >
            Looking for our complete Northampton service? Visit{" "}
            <a
              href="/t-shirt-printing-northampton"
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              T-Shirt Printing Northampton
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}