"use client";
import Link from "next/link";
import "./ArticleCard.css";

export default function ArticleCard({ article, showDate = false }) {
  return (
    <article className="article-card">
      <img
        src={article.image}
        alt={article.title}
        width={"100%"}
        height={"300px"}
      />
      <h3>{article.title}</h3>
      {showDate && <p className="article-date">{article.date}</p>}
      <p>{article.summary}</p>
      <button>
        <Link href={`/articles/${article.id}`}>Read More...</Link>
      </button>
    </article>
  );
}
