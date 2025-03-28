"use client";
import articlesData from "../data/articles.json";
import ArticleCard from "./ArticleCard";
import './LatestArticles.css'
import Link from "next/link";

export default function LatestArticles() {
  const latestArticles = articlesData.slice(0, 2);

  return (
    <section className="latest-articles">
      <div className="section-top">
        <h2>Latest Articles</h2>
        <Link href="/articles">
          <button className="see-more-btn">See All</button>
        </Link>
      </div>
      <div className="articles-grid">
        {latestArticles.map((article) => (
          <ArticleCard key={article.id} article={article} showDate={true}/>
        ))}
      </div>
    </section>
  );
}
