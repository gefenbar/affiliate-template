import "./LatestPosts.css";
export default function LatestPosts() {
  const posts = [{ name:'abc',brief:'Brief summary of the review...',imgSrc: "/images/example.png", imgAlt: "post1" },
     {name:'def',brief:'Brief summary of the review...',imgSrc:"/images/example.png",imgAlt:'post2'}];
  return (
    <section className="latest-posts">
      <h2>Latest Articles</h2>
      <div className="posts-grid">
        {posts.map((item, index) => {
          return (
            <article className="post-card" key={index}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <h3>{item.name}</h3>
              <p>{item.brief}</p>
              <button>Read More</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}