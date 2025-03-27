import "./BuyingGuide.css";
export default function BuyingGuide() {
  const advices = [
    {
      name: "Battery Life",
      desc: "Look for long-lasting performance for daily use.",
    },
    {
      name: "Cleaning Modes",
      desc: "Look for long-lasting performance for daily use.",
    },
    {
      name: "Brush Head Compatibility",
      desc: "Look for long-lasting performance for daily use.",
    },
    {
      name: "Smart Features",
      desc: "Look for long-lasting performance for daily use.",
    },
    {
      name: "Price & Warranty",
      desc: "Look for long-lasting performance for daily use.",
    },
  ];
  return (
    <section className="buying-guide">
      <div className="section-top">
        <h2>How to Choose the Best Electric Toothbrush</h2>
        <button className="see-more-btn">See All</button>
      </div>
      <h3>
        Choosing the right electric toothbrush can greatly enhance your oral
        hygiene. Here are some key factors to consider:
      </h3>
      <ul>
        {advices.map((item, index) => {
          return (
            <li key={index}>
              <strong>{item.name}:</strong> {item.desc}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
