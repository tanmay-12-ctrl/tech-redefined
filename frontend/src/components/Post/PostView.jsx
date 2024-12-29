import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import "./PostView.css";
import { axiosInstance } from "../../lib/axios";

function PostView() {
  const { id } = useParams(); // Retrieve the post ID from the URL
  useEffect(()=>{
    const data = axiosInstance.get(`/post/${id}`)
  })
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { user: "user1", comment: "Amazing design!" },
    { user: "user2", comment: "Great work!" },
    { user: "user3", comment: "So creative!" },
  ]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    if (newComment.trim()) {
      setComments([...comments, { user: "You", comment: newComment }]);
      e.target.reset();
    }
  };

  return (
    <div className="post-view">
      {/* Left Section: Image, Creator, Like */}
      <div className="post-view__left">
        <div className="post-view__header">
          <img
            src="/zashion.png"
            alt="Creator Avatar"
            className="post-view__avatar"
          />
          <span className="post-view__creator-name">CreatorName</span>
        </div>
        <img src="/zashion.png" alt={`Post #${id}`} className="post-view__image" />
        <div className="post-view__actions">
          <button className="like-button" onClick={handleLike}>
            {liked ? (
              <FilledHeartIcon className="heart-icon liked" />
            ) : (
              <HeartIcon className="heart-icon" />
            )}
          </button>
        </div>
        <div className="post-view__details">
          <p className="post-view__description">
            <strong>Title:</strong> Amazing Fashion Design #{id}
          </p>
          <p className="post-view__description">
            <strong>Description:</strong> This is a detailed description of the design.
          </p>
        </div>
      </div>

      {/* Right Section: Comments */}
      <div className="post-view__right">
        <h3>Comments</h3>
        <div className="post-view__comments">
          {comments.map((c, index) => (
            <div key={index} className="post-view__comment">
              <strong>{c.user}</strong>: {c.comment}
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="post-view__comment-form">
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="post-view__comment-input"
          />
          <button type="submit" className="post-view__comment-submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostView;
