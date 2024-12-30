import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from './Card';
import Banner from './Banner';
import { axiosInstance } from '../../lib/axios'; // Assuming axiosInstance is pre-configured

function Home() {
  const [posts, setPosts] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axiosInstance.get("/post");
        if (Array.isArray(response.data)) {
          setPosts(response.data); // Set posts state to the array
        } else {
          console.error("Expected an array but got:", response.data);
          setPosts([]); // Handle unexpected data structure
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // Fallback to an empty array on error
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : posts.length > 0 ? (
          posts.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              src={item.image}
              description={item.content}
              title={item.title}
            />
          ))
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
}

export default Home;