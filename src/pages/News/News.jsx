import '../News/News.css'
import React, { useState, useEffect } from "react";
import Navbar from '../../components/navbar/Navbar'

const News = () => {
  const userDashButtons = [
     { label: "Dashboard", route: "/userdash" },
    { label: "Logout", route: "/" }
    ]; 

    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            "https://finnhub.io/api/v1/news?category=general&token=ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch news");
          }
          const data = await response.json();
          setNewsArticles(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching news:", error);
          setError("An error occurred while fetching news");
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) {
      return <div className="news-container">Loading news...</div>;
    }
  
    if (error) {
      return <div className="news-container">{error}</div>;
    }
  

  return (
    <div className="news-container">
       <Navbar buttons={userDashButtons} />
    <h1 className="news-title">Latest News</h1>
    <div className="news-list">
      {newsArticles.map((article, index) => (
        <div key={index} className="news-article">
          <h2 className="news-headline">{article.headline}</h2>
          <p className="news-source">Source: {article.source}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            Read Full Article
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default News;