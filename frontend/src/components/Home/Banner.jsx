import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'; // Use axios if axiosInstance isn't predefined

// Uncomment and use if axiosInstance is defined elsewhere
import {axiosInstance} from '../../lib/axios';

function Banner() {
  const [opacity, setOpacity] = useState(1);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axiosInstance.get('/post'); // Replace with axiosInstance if available
        if (Array.isArray(response.data)) {
          setCardData(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setCardData([]); // Handle unexpected data structure
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setCardData([]); // Fallback to an empty array on error
      }
    }

    fetchPosts();
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const fadeValue = Math.max(1 - scrollPosition / 500, 0);
    setOpacity(fadeValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="banner ">
  <Slider {...settings} className="banner__slider">
    {cardData.length > 0 ? (
      cardData.map((item) => (
        <div
          className="flex flex-col items-center justify-center"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[700px] object-cover rounded-lg transition-opacity duration-300"
            style={{ opacity: opacity }}
          />
          <h3 className="mt-2 text-lg font-medium text-gray-800">{item.title}</h3>
        </div>
      ))
    ) : (
      <div className="flex items-center justify-center h-[400px] text-gray-500 text-lg">
        No posts available
      </div>
    )}
  </Slider>
</div>

  );
}

export default Banner;
