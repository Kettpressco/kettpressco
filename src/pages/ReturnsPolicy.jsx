import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ReturnsPolicy() {
  const pageStyle = {
    minHeight: "100vh",
    background: "#f7f7f7",
    color: "#111",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px 80px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "clamp(25px, 5vw, 55px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
  };

  const headingStyle = {
    fontSize: "clamp(34px, 6vw, 52px)",
    lineHeight: "1.1",
    margin: "0 0 15px",
    fontWeight: "800",
  };

  const sectionHeadingStyle = {
    fontSize: "24px",
    marginTop: "38px",
    marginBottom: "12px",
    fontWeight: "700",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#444",
    marginBottom: "16px",
  };

  const listStyle = {
    fontSize: "16px",
    lineHeight: "1.9",
    color: "#444",
    paddingLeft: "24px",
    marginBottom: "20px",
  };

  return (
    <>
      <Helmet>
        <title>Returns & Refund Policy | Kett Press Co</title>

        <meta
          name="description"
          content="Read the Kett Press Co returns and refund policy for custom printed T-shirts, personalised clothing, branded workwear and non-personalised products."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.kettpressco.com/returns-policy"
        />
      </Helmet>

      <div style={pageStyle}>
        <main style={containerStyle}>
          <div style={cardStyle}>
            {/* Breadcrumb */}
            <div
              style={{
                marginBottom: "30px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "#111",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Home
              </Link>

              <span style={{ margin: "0 8px" }}>/</span>

              <span>Returns & Refund Policy</span>
            </div>

            {/* Page Header */}
            <header
              style={{
                borderBottom: "1px solid #e5e5e5",
                paddingBottom: "30px",
                marginBottom: "35px",
              }}
            >
              <h1 style={headingStyle}>
                Returns & Refund Policy
              </h1>

              <p
                style={{
                  ...paragraphStyle,
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                We want you to be happy with your order from Kett Press Co.
                Please read our returns and refund policy carefully,
                particularly when ordering personalised or custom-printed
                products.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#777",
                  margin: 0,
                }}
              >
                Last updated: 22 July 2026
              </p>
            </header>

            {/* Custom Products */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Custom & Personalised Products
              </h2>

              <p style={paragraphStyle}>
                Many products sold by Kett Press Co are made or personalised
                specifically for each customer. Because of this, products that
                have been personalised, customised or printed specifically for
                you cannot normally be returned, exchanged or refunded simply
                because you have changed your mind.
              </p>

              <p style={paragraphStyle}>
                This includes, but is not limited to:
              </p>

              <ul style={listStyle}>
                <li>Custom printed T-shirts</li>
                <li>Personalised hoodies and sweatshirts</li>
                <li>Printed or embroidered workwear</li>
                <li>
                  Clothing printed with your logo, artwork, name or custom
                  design
                </li>
                <li>
                  Garments produced specifically to your requested
                  specifications
                </li>
              </ul>

              <p style={paragraphStyle}>
                We strongly recommend checking all artwork, spelling, garment
                sizes, colours, quantities and order details carefully before
                approving or placing your order.
              </p>

              <p style={paragraphStyle}>
                Once printing or production has started, we may not be able to
                cancel or change your order.
              </p>
            </section>

            {/* Faulty Items */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Faulty, Damaged or Incorrect Items
              </h2>

              <p style={paragraphStyle}>
                If your order arrives faulty, damaged, incorrectly printed, or
                is significantly different from what you ordered, please
                contact us as soon as possible after receiving your order.
              </p>

              <p style={paragraphStyle}>
                When contacting us, please provide:
              </p>

              <ul style={listStyle}>
                <li>Your name and order number</li>
                <li>A description of the problem</li>
                <li>
                  Clear photographs showing the fault, damage or printing
                  issue
                </li>
              </ul>

              <p style={paragraphStyle}>
                We will review the issue and, where appropriate, arrange a
                replacement, repair or refund in accordance with your legal
                rights.
              </p>

              <p style={paragraphStyle}>
                Please contact us before returning any item so that we can
                provide the correct return instructions.
              </p>
            </section>

            {/* Artwork */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Artwork & Customer-Supplied Designs
              </h2>

              <p style={paragraphStyle}>
                Customers are responsible for checking and approving artwork,
                spelling, colours, positioning and other design details before
                production begins.
              </p>

              <p style={paragraphStyle}>
                Where a customer has approved artwork or supplied their own
                print-ready artwork, we cannot normally offer a refund or free
                replacement for errors that were already present in the
                approved or customer-supplied artwork.
              </p>

              <p style={paragraphStyle}>
                However, if we make an error during printing or production
                that differs from the approved design or agreed order
                specifications, please contact us so that we can investigate
                and resolve the issue.
              </p>
            </section>

            {/* Sizing */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Sizing
              </h2>

              <p style={paragraphStyle}>
                Please check the relevant garment sizing information carefully
                before placing your order.
              </p>

              <p style={paragraphStyle}>
                Because personalised and custom-printed garments are produced
                specifically for your order, we cannot normally accept returns
                or exchanges where the customer has selected the wrong size.
              </p>

              <p style={paragraphStyle}>
                If we have supplied a different size from the size you ordered,
                please contact us and we will arrange an appropriate
                resolution.
              </p>
            </section>

            {/* Colour Variations */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Colour Variations
              </h2>

              <p style={paragraphStyle}>
                We make every effort to display garment and print colours as
                accurately as possible. However, colours may appear slightly
                different depending on your screen, device, printing method or
                garment material.
              </p>

              <p style={paragraphStyle}>
                Minor colour variations between digital artwork, screen
                displays and the finished printed product are not normally
                considered faults.
              </p>
            </section>

            {/* Non Personalised */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Non-Personalised Products
              </h2>

              <p style={paragraphStyle}>
                If you purchase a standard, non-personalised product from us
                online, you may have cancellation and return rights under
                applicable UK consumer law.
              </p>

              <p style={paragraphStyle}>
                Please contact us before returning any product so that we can
                provide the appropriate return instructions.
              </p>

              <p style={paragraphStyle}>
                Unless the item is faulty, damaged or incorrect, the customer
                may be responsible for the cost of returning the product.
              </p>
            </section>

            {/* Refunds */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Refunds
              </h2>

              <p style={paragraphStyle}>
                Where a refund is approved, it will normally be issued using
                the original payment method.
              </p>

              <p style={paragraphStyle}>
                Please allow time for your bank or payment provider to process
                the refund after it has been issued.
              </p>
            </section>

            {/* Bulk Orders */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Business & Bulk Orders
              </h2>

              <p style={paragraphStyle}>
                For bulk, business and branded workwear orders, we strongly
                recommend confirming garment sizes, colours, quantities and
                artwork before production begins.
              </p>

              <p style={paragraphStyle}>
                Once a custom bulk order has entered production, cancellation
                or changes may not be possible.
              </p>

              <p style={paragraphStyle}>
                If there is a production error or fault with your order, please
                contact us promptly so that we can investigate and resolve the
                issue.
              </p>
            </section>

            {/* Legal Rights */}
            <section>
              <h2 style={sectionHeadingStyle}>
                Your Legal Rights
              </h2>

              <p style={paragraphStyle}>
                Nothing in this Returns & Refund Policy affects your statutory
                rights under UK consumer law.
              </p>

              <p style={paragraphStyle}>
                Products supplied by Kett Press Co must meet the standards
                required by applicable consumer law, including requirements
                relating to satisfactory quality, fitness for purpose and
                being as described.
              </p>
            </section>

            {/* Contact */}
            <section
              style={{
                marginTop: "45px",
                padding: "30px",
                background: "#f5f5f5",
                borderRadius: "12px",
              }}
            >
              <h2
                style={{
                  ...sectionHeadingStyle,
                  marginTop: 0,
                }}
              >
                Need Help With an Order?
              </h2>

              <p style={paragraphStyle}>
                If you have a problem with an order or would like to discuss a
                return, replacement or refund, please contact Kett Press Co.
                We aim to resolve genuine problems fairly and as quickly as
                possible.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "20px",
                }}
              >
                <Link
                  to="/#contact"
                  style={{
                    display: "inline-block",
                    background: "#111",
                    color: "#fff",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  Contact Us
                </Link>

                <Link
                  to="/shop"
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    color: "#111",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    border: "1px solid #111",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  Visit Our Shop
                </Link>
              </div>
            </section>

            {/* Back Home */}
            <div
              style={{
                marginTop: "40px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e5e5",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "#111",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                ← Back to Kett Press Co
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}