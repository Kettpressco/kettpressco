export default function TShirtPrintingCostGuide() {
  const cardStyle = {
    background: "#fff",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #111 0%, #222 50%, #e63946 100%)",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                background: "#fff",
                color: "#e63946",
                padding: "8px 18px",
                borderRadius: "30px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Kett Press Co Cost Guide
            </span>

            <h1
              style={{
                fontSize: "clamp(2.4rem,5vw,4rem)",
                lineHeight: "1.1",
                marginTop: "25px",
                marginBottom: "20px",
              }}
            >
              How Much Does T-Shirt Printing Cost in Kettering?
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#f1f1f1",
              }}
            >
              One of the most common questions we get at Kett Press Co is:
              "How much does custom T-shirt printing cost?" The answer
              depends on factors such as garment type, print size,
              quantity ordered and printing method. This guide explains
              what affects pricing and how to get the best value for your
              custom clothing order.
            </p>
          </div>

          <div>
            <img
              src="/images/PoloTshirt.jpg"
              alt="Custom printed polo shirts by Kett Press Co"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <div style={cardStyle}>
          <h2>What Affects T-Shirt Printing Prices?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Not all printed garments cost the same. A simple one-colour
            logo on the chest will generally cost less than a full-colour
            design covering the front and back of a garment.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            The biggest pricing factors include:
          </p>

          <ul style={{ lineHeight: "2" }}>
            <li>Garment quality and brand</li>
            <li>Quantity ordered</li>
            <li>Number of print locations</li>
            <li>Artwork complexity</li>
            <li>Printing method used</li>
            <li>Turnaround time required</li>
          </ul>
        </div>

        {/* IMAGE SECTION */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
            marginBottom: "40px",
          }}
        >
          <img
            src="/images/Tshirt9.jpg"
            alt="Printed workwear and branded clothing"
            style={{
              width: "100%",
              borderRadius: "18px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          />

          <img
            src="/images/Tshirt10.jpg"
            alt="Custom T-shirt printing in Kettering"
            style={{
              width: "100%",
              borderRadius: "18px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <div style={cardStyle}>
          <h2>Typical Custom T-Shirt Printing Costs</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Every project is different, but as a general guide:
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ background: "#111", color: "#fff" }}>
                <th style={{ padding: "15px", textAlign: "left" }}>
                  Product
                </th>
                <th style={{ padding: "15px", textAlign: "left" }}>
                  Typical Price Range
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  Printed T-Shirts
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  £7.99 - £20+
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  Branded Polo Shirts
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  £12 - £25+
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  Custom Hoodies
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  £15 - £35+
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px" }}>
                  Workwear Packages
                </td>
                <td style={{ padding: "15px" }}>
                  Varies by garment, branding, quantity and bundles 
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h2>Does Ordering More Reduce The Cost?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Yes. Larger orders generally reduce the cost per garment.
            Businesses ordering uniforms, schools ordering leavers
            hoodies and event organisers purchasing bulk clothing
            usually benefit from better overall pricing.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            This is because setup costs are spread across more garments,
            reducing the average cost per item.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>DTF Printing vs Screen Printing Costs</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF printing is ideal for small and medium-sized orders
            because there are minimal setup costs and it allows
            full-colour artwork.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Screen printing becomes increasingly cost-effective on
            larger quantity orders and is often used for schools,
            clubs and promotional campaigns.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>How To Get The Best Value</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>Order multiple garments together</li>
            <li>Use the same logo placement across garments</li>
            <li>Plan ahead and avoid rush orders</li>
            <li>Choose garments suited to your intended use</li>
            <li>Ask for professional advice on print methods</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>What is the cheapest way to print T-shirts?</h3>
          <p style={{ lineHeight: "1.8" }}>
            For many small orders, DTF printing offers excellent value
            because there are low setup costs and no colour limitations.
          </p>

          <h3>Can I order just one printed T-shirt?</h3>
          <p style={{ lineHeight: "1.8" }}>
            Yes. Small quantity orders are possible depending on the
            garment and artwork requirements.
          </p>

          <h3>Which lasts longer, DTF or vinyl?</h3>
          <p style={{ lineHeight: "1.8" }}>
            Both can be durable when properly applied and cared for,
            though suitability depends on the garment and design.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.3rem",
              marginBottom: "20px",
            }}
          >
            Need A Quote For Custom Clothing?
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Kett Press Co supplies custom T-shirts, hoodies, workwear,
            polo shirts and branded clothing throughout Kettering,
            Corby, Wellingborough, Northampton and across
            Northamptonshire.
          </p>

          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Contact us today for a free quotation and expert advice.
          </p>
        </div>
      </section>
    </div>
  );
}