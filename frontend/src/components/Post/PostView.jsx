import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";

function PostView() {
  const { id } = useParams();
  const [data,setData] = useState()
  const [Loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/post/${id}`);
        console.log(response.data)
        setData(response.data)
        setLoading(false)
        // Handle the data
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchData();
  }, [id]);

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
  if(Loading)return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full p-12 border-4 border-blue-500">
        Loading..
      </div>
    </div>
  )
else{
  return (
    <div className="w-screen px-32 pb-20">
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-2xl">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-teal-200 to-red-300 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Section */}
          <div className="md:w-2/3 border-r border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/avatar.png"
                alt="Creator Avatar"
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <span className="font-semibold text-xl text-gray-800">{data.owner.username}</span>
            </div>

            {/* Main Image */}
            <div className="relative mb-6">
              <img
                src={data.image || "/zashion.png"}
                alt={`Post #${id}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
                style={{ aspectRatio: '1' }} // Enforces the square aspect ratio
              />
            </div>

            {/* Actions */}
            <div className="flex items-center mb-6">
              <button 
                onClick={handleLike}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {liked ? (
                  <FilledHeartIcon className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartIcon className="w-6 h-6 text-gray-600" />
                )}
              </button>
              <b><span className="text-2xl text-red-600">{data.likeCount}</span></b>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <p className="font-semibold text-2xl text-gray-800">
                {data.title}
              </p>
              <p className="text-lg text-gray-600">
                {data.content}
              </p>
            </div>
          </div>

          {/* Right Section - Comments */}
          <div className="md:w-1/3 flex flex-col h-full p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-xl text-gray-800">Comments</h3>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {comments.map((c, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span className="font-semibold text-gray-800">{c.user}</span>
                  <span className="text-gray-600">{c.comment}</span>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <form 
              onSubmit={handleCommentSubmit}
              className="space-y-4"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
}

export default PostView;
