import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import "./Card.css";

function Card({ id, src, title, description }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCardClick = () => {
    navigate(`/post/${id}`); // Navigate to the PostView page with post ID
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={src} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card__actions">
          <button
            className="like-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the card click event
              handleLike();
            }}
          >
            <HeartIcon
              className={`heart-icon ${liked ? "liked" : ""}`}
              width={24}
              height={24}
            />
          </button>
          <button
            className="comment-button"
            onClick={(e) => e.stopPropagation()} // Prevent triggering the card click event
          >
            <ChatBubbleLeftIcon className="chat-icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
