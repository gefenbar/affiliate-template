import "./QualityLinks.css";

export default function QualityLinks() {
  const links = [
    {
      name: "Amazon's Best Electric Toothbrushes",
      url: "https://www.amazon.com/s?k=electric+toothbrushes",
      description:
        "Discover a wide range of top-rated electric toothbrushes with customer reviews and competitive pricing.",
    },
    {
      name: "Wirecutter's Electric Toothbrush Review",
      url: "https://www.nytimes.com/wirecutter/reviews/best-electric-toothbrush/",
      description:
        "Expert reviews and in-depth comparisons to help you choose the best electric toothbrush.",
    },
    {
      name: "BestReviews: Top Electric Toothbrushes",
      url: "https://www.bestreviews.com/best-electric-toothbrushes/",
      description:
        "Comprehensive product comparisons, ratings, and buying guides from industry experts.",
    },
    {
      name: "TechGearLab's Electric Toothbrush Test",
      url: "https://www.techgearlab.com/topics/health/best-electric-toothbrush",
      description:
        "Detailed analysis and performance testing of leading electric toothbrush models.",
    },
  ];

  return (
    <section className="quality-links">
      <h2>Recommended Resources for Electric Toothbrushes</h2>
      <div>
      <p>
{"To help you make an informed decision, we've compiled a list of trusted resources featuring in-depth reviews and expert comparisons of the best electric toothbrushes available."}      </p>
      <br></br>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <strong>{link.name}</strong>
            </a>
            <p>{link.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
