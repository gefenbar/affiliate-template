"use client";
import Link from "next/link";
import './ReviewCard.css'
export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <img src={review.image} alt={review.productName} className="review-image" />
      <div className="review-info">
        <h3>{review.productName}</h3>
        <p className="review-summary">{review.summary}</p>
        <div className="review-rating">
          {/* Here you could use stars or just text */}
          <span>Rating: {review.rating} / 5</span>
        </div>
        <div className="review-pros-cons">
          <p><strong>Pros:</strong> {review.pros}</p>
          <p><strong>Cons:</strong> {review.cons}</p>
        </div>
        <Link href={`/reviews/${review.id}`}>
          <button className="read-review-btn">Read Full Review</button>
        </Link>
      </div>
    </article>
  );
}
