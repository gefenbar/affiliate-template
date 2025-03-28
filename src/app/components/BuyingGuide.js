import "./BuyingGuide.css";

export default function BuyingGuide() {
  const advices = [
    {
      name: "Battery Life",
      desc: "Look for long-lasting performance for daily use.",
    },
    {
      name: "Cleaning Modes",
      desc: "Check if the toothbrush offers multiple cleaning modes.",
    },
    {
      name: "Brush Head Compatibility",
      desc: "Ensure replacement heads are easily available.",
    },
    {
      name: "Smart Features",
      desc: "Features like timers and pressure sensors enhance effectiveness.",
    },
    {
      name: "Price & Warranty",
      desc: "Consider value for money and the length of warranty offered.",
    },
  ];

  return (
    <section className="buying-guide">
      <div className="section-top">
        <h2>How to Choose the Best Electric Toothbrush</h2>
        <button className="see-more-btn">Full Guide</button>
      </div>{" "}
      <p className="intro">
        Choosing the right electric toothbrush can greatly enhance your oral
        hygiene. Here are some key factors to consider:
      </p>
      <ul>
        {advices.map((item, index) => (
          <li key={index} className="advice-item">
            <span className="advice-title">{item.name}:</span>{" "}
            <span className="advice-desc">{item.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
