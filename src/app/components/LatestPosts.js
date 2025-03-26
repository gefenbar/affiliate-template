import './LatestPosts.css'
export default function LatestPosts() {
    return (
      <section className="latest-posts">
        <h2>Latest Reviews</h2>
        <div className="posts-grid">
          <article className="post-card">
          <img src="/images/example.png" alt="Post 1" width={'100px'} height={'100px'} />
          <h3>Review: Electric Toothbrush 1</h3>
            <p>Brief summary of the review...</p>
            <button>Read More</button>
          </article>
          <article className="post-card">
            <img src="/images/example.png" alt="Post 2" width={'100px'} height={'100px'} />
            <h3>Review: Electric Toothbrush 2</h3>
            <p>Brief summary of the review...</p>
            <button>Read More</button>
          </article>
          {/* עוד פוסטים */}
        </div>
      </section>
    );
  }
  