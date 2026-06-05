import { useEffect } from "react";

export default function TshirtPrintingKettering() {
useEffect(() => {
  document.title =
    "T-Shirt Printing Kettering | Custom Printed T-Shirts | Kett Press Co";

  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content =
    "Professional T-Shirt Printing in Kettering. Custom printed T-shirts for businesses, events, gyms and organisations across Northamptonshire.";
  document.head.appendChild(meta);

  return () => {
    document.head.removeChild(meta);
  };
}, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "40px 20px" }}>
      <h1>T-Shirt Printing in Kettering</h1>

      <p>
        Kett Press Co provides professional T-shirt printing in Kettering
        for businesses, gyms, events, schools and organisations.
        We offer high-quality garment printing with fast turnaround
        times across Northamptonshire.
      </p>

      <h2>Our T-Shirt Printing Services</h2>

      <ul>
        <li>Custom Business T-Shirts</li>
        <li>Event Merchandise</li>
        <li>Gym & Fitness Apparel</li>
        <li>Branded Staff Uniforms</li>
        <li>Promotional Clothing</li>
      </ul>

      <h2>Why Choose Kett Press Co?</h2>

      <p>
        We provide premium print quality, competitive pricing and
        reliable service for customers throughout Kettering and the
        surrounding Northamptonshire area.
      </p>

      <h2>Request a Quote</h2>

      <p>
        Call 07770 118148 or contact us today for a free quote.
      </p>
    </div>
  );
}