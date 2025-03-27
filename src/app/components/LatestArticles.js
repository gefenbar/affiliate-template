import "./LatestArticles.css";
export default function LatestArticles() {
  const posts = [{ name:'article1',brief:'Brief summary of the review...',imgSrc: "/images/article.webp", imgAlt: "post1" },
     {name:'article2',brief:'Brief summary of the review...',imgSrc:"/images/article.webp",imgAlt:'post2'},
     { name:'article1',brief:'Brief summary of the review...',imgSrc: "/images/article.webp", imgAlt: "post1" },
    ];
  return (
    <section className="latest-articles">
      <div className="section-top">
      <h2>Latest Articles</h2>
      <button className="see-more-btn">See All</button>
      </div>
      <div className="articles-grid">
        {posts.map((item, index) => {
          return (
            <article className="article-card" key={index}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <h3>{item.name}</h3>
              <p>{item.brief}</p>
              <button>Read More...</button>
              <div/>
            </article>
          );
        })}
      </div>
    </section>
  );
}