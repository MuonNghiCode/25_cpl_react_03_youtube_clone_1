import React, { useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Example video data
const videoData = [
  {
    id: 4521,
    thumbnail: thumbnail5,
    title: "React Basics",
    channel: "React Channel",
    description: "Beginner tutorial (1M views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "JavaScript Tips",
    channel: "JS Guru",
    description: "Advanced tips (500K views, 6 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail7,
    title: "CSS Tricks",
    channel: "Design Pro",
    description: "Learn CSS easily (300K views, 2 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail1,
    title: "Learn React",
    channel: "React Channel",
    description: "Comprehensive guide (1.5M views, 3 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail4,
    title: "React State Management",
    channel: "Dev Hub",
    description: "Understanding state (700K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail8,
    title: "JS Array Methods",
    channel: "JS Pro",
    description: "Deep dive into arrays (400K views, 5 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail2,
    title: "React Lifecycle",
    channel: "React Channel",
    description: "Understanding lifecycle (1M views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail6,
    title: "CSS Grid Guide",
    channel: "Design Pro",
    description: "Master CSS Grid (800K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "Vue Basics",
    channel: "Vue Mastery",
    description: "Introduction to Vue.js (200K views, 3 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail7,
    title: "Python for Beginners",
    channel: "Code Academy",
    description: "Learn Python step by step (1.2M views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail2,
    title: "Node.js Crash Course",
    channel: "Backend Masters",
    description: "Building APIs with Node.js (700K views, 6 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail8,
    title: "Angular in Action",
    channel: "Angular Dev",
    description: "Comprehensive Angular tutorial (500K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail4,
    title: "HTML5 Explained",
    channel: "Web Dev Simplified",
    description: "HTML basics and tips (900K views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail1,
    title: "Master Git",
    channel: "DevOps Guide",
    description: "Learn Git and GitHub (800K views, 8 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail5,
    title: "Database Design",
    channel: "SQL Pro",
    description: "Best practices for DB design (600K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail6,
    title: "Understanding REST APIs",
    channel: "API Academy",
    description: "Introduction to REST APIs (1M views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "Webpack 101",
    channel: "Frontend Tools",
    description: "Learn how to bundle projects (400K views, 6 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail2,
    title: "SEO Basics",
    channel: "Marketing Guru",
    description: "Improve website SEO (500K views, 9 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail8,
    title: "Async JavaScript",
    channel: "JS Guru",
    description: "Learn async/await (750K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail4,
    title: "React Testing Library",
    channel: "React Pro",
    description: "Test React components (600K views, 3 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail1,
    title: "CSS Animation Tricks",
    channel: "Design Pro",
    description: "Advanced animations (350K views, 2 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail7,
    title: "Learn TypeScript",
    channel: "Code Academy",
    description: "Why TypeScript is important (700K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail6,
    title: "Django Basics",
    channel: "Python Dev",
    description: "Building web apps with Django (400K views, 10 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail5,
    title: "React Basics",
    channel: "React Channel",
    description: "Beginner tutorial (1M views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "JavaScript Tips",
    channel: "JS Guru",
    description: "Advanced tips (500K views, 6 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail7,
    title: "CSS Tricks",
    channel: "Design Pro",
    description: "Learn CSS easily (300K views, 2 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail1,
    title: "Learn React",
    channel: "React Channel",
    description: "Comprehensive guide (1.5M views, 3 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail4,
    title: "React State Management",
    channel: "Dev Hub",
    description: "Understanding state (700K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail8,
    title: "JS Array Methods",
    channel: "JS Pro",
    description: "Deep dive into arrays (400K views, 5 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail2,
    title: "React Lifecycle",
    channel: "React Channel",
    description: "Understanding lifecycle (1M views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail6,
    title: "CSS Grid Guide",
    channel: "Design Pro",
    description: "Master CSS Grid (800K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "Vue Basics",
    channel: "Vue Mastery",
    description: "Introduction to Vue.js (200K views, 3 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail7,
    title: "Python for Beginners",
    channel: "Code Academy",
    description: "Learn Python step by step (1.2M views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail2,
    title: "Node.js Crash Course",
    channel: "Backend Masters",
    description: "Building APIs with Node.js (700K views, 6 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail8,
    title: "Angular in Action",
    channel: "Angular Dev",
    description: "Comprehensive Angular tutorial (500K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail4,
    title: "HTML5 Explained",
    channel: "Web Dev Simplified",
    description: "HTML basics and tips (900K views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail1,
    title: "Master Git",
    channel: "DevOps Guide",
    description: "Learn Git and GitHub (800K views, 8 months ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail5,
    title: "Database Design",
    channel: "SQL Pro",
    description: "Best practices for DB design (600K views, 1 year ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail6,
    title: "Understanding REST APIs",
    channel: "API Academy",
    description: "Introduction to REST APIs (1M views, 2 years ago)",
  },
  {
    id: 4521,
    thumbnail: thumbnail3,
    title: "Webpack 101",
    channel: "Frontend Tools",
    description: "Learn how to bundle projects (400K views, 6 months ago)",
  },
];

const Feed = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const searchQuery =
    new URLSearchParams(location.search).get("query") || query;

  const filteredVideos = videoData.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="feed">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <Link to={`video/20/${video.id}`} className="card" key={video.id}>
              <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} />
              <div className="card-content">
                <div className="card-header">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <h2>{video.title}</h2>
                </div>
                <div className="card-content-text">
                  <h3>{video.channel}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No videos found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
