"use client";
import articlesData from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";
import "./page.css";
export default function ArticlesPage() {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="articles-grid">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} showDate={true} />
        ))}
      </div>
    </div>
  );
}
