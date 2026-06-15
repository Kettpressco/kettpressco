export default function CustomHoodiesForSchools() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* Hero */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            marginBottom: "20px",
          }}
        >
          Custom Hoodies For Schools
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Looking for custom school hoodies in Kettering or Northamptonshire?
          Kett Press Co supplies high-quality printed and embroidered hoodies
          for schools, leavers groups, sports teams, clubs and educational
          events.
        </p>
      </section>

      {/* Intro */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Schools Choose Custom Hoodies</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Custom hoodies are a popular choice for school leavers, sports
            teams, clubs, educational trips and staff uniforms. They help
            create a sense of belonging while providing a practical garment that
            students and staff can wear throughout the year.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            At Kett Press Co, we provide professional printing and embroidery
            services with a range of colours, sizes and branding options to suit
            schools across Northamptonshire.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section style={sectionStyle}>
        <img
          src="/images/hoodie.jpg"
          alt="Custom School Hoodies"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* Services */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Popular School Hoodie Options
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Leavers Hoodies</h3>
            <p>
              Celebrate the end of the school year with personalised leavers
              hoodies featuring names, year groups and custom designs.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Sports Team Hoodies</h3>
            <p>
              Branded hoodies for football teams, netball teams, athletics
              groups and other school sports clubs.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>School Clubs</h3>
            <p>
              Ideal for drama groups, music clubs, debate teams and after-school
              activities.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>School Trips</h3>
            <p>
              Matching hoodies help identify students during educational trips,
              tours and residential visits.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Available Customisation Options</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>School logos</li>
            <li>Student names</li>
            <li>Nicknames</li>
            <li>Year group prints</li>
            <li>Front and back printing</li>
            <li>Embroidery options</li>
            <li>Multiple hoodie colours</li>
            <li>Adult and youth sizes</li>
          </ul>
        </div>
      </section>

      {/* Bulk Orders */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Bulk School Orders</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We can accommodate both small and large school orders. Whether you
            need hoodies for a class, a year group, a sports team or an entire
            school event, we can provide a solution tailored to your
            requirements.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Bulk ordering helps reduce costs while ensuring a consistent and
            professional finish across every garment.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Hoodie Styles Available
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/hoodie.jpg"
            alt="Hoodie Style"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/hoodie1.jpg"
            alt="Hoodie Style"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/hoodie2.jpg"
            alt="Hoodie Style"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Based in Kettering, we provide custom clothing printing and
            embroidery services for schools throughout Northamptonshire. Our
            focus is on quality garments, professional branding and excellent
            customer service.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work closely with schools, teachers, organisers and parents to
            ensure every order meets expectations.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Request A Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Planning a school hoodie order? Contact us today for pricing,
            artwork guidance and delivery information.
          </p>

          <p>
            <strong>Kett Press Co</strong>
            <br />
            Kettering, Northamptonshire
            <br />
            Email: info@kettpressco.com
            <br />
            Phone: 075442 514098
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#000",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get A Quote
          </a>
        </div>
      </section>

      {/* Map */}
      <section style={{ paddingBottom: "60px" }}>
        <iframe
          title="Kettering Map"
          src="https://www.google.com/maps?q=Kettering,%20Northamptonshire&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}