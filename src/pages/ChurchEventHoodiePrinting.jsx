export default function ChurchEventHoodiePrinting() {
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
          Church Event Hoodie Printing
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Custom printed and embroidered hoodies for churches, youth groups,
          outreach teams, conferences, retreats and faith-based events across
          Kettering and Northamptonshire.
        </p>
      </section>

      {/* Intro */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom Clothing for Church Communities</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Church hoodies and event clothing help build unity, identity and
            belonging within your congregation. Whether it's for youth groups,
            worship teams, mission trips or volunteer teams, branded clothing
            helps bring people together.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            At Kett Press Co, we provide high-quality printing and embroidery
            tailored for church groups of all sizes.
          </p>
        </div>
      </section>

      {/* Image */}
      <section style={sectionStyle}>
        <img
          src="/images/hoodie1.jpg"
          alt="Church Hoodie Printing"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* Use Cases */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Church Clothing Uses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Youth Groups</h3>
            <p>
              Matching hoodies for youth meetings, camps, and weekly gatherings.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Church Events</h3>
            <p>
              Conferences, retreats, revival meetings and special services.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Volunteer Teams</h3>
            <p>
              Easily identify ushers, helpers and outreach volunteers.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Mission Trips</h3>
            <p>
              Matching clothing for domestic and international mission work.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Churches Choose Custom Hoodies</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Build unity and identity within the church</li>
            <li>Perfect for youth engagement and retention</li>
            <li>Professional appearance at events</li>
            <li>Affordable bulk ordering</li>
            <li>Custom designs with scripture, logos or themes</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Hoodie Styles
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
            alt="Church Hoodie"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/hoodie1.jpg"
            alt="Church Hoodie"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/hoodie2.jpg"
            alt="Church Hoodie"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Why Us */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work with churches and community groups across Northamptonshire
            to produce high-quality, long-lasting printed and embroidered
            clothing.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you need 10 hoodies or 200, we provide fast turnaround and
            reliable service.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Get A Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Planning a church event or youth project? Get in touch for a free
            quote on custom hoodies and event clothing.
          </p>

          <p>
            <strong>Kett Press Co</strong>
            <br />
            Kettering, Northamptonshire
            <br />
            Email: kettpressco@gmail.com
            <br />
            Phone: 07547 947457
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
            Request A Quote
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