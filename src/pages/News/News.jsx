import '../News/News.css'
import React, { useState, useEffect } from "react";
import Navbar from '../../components/navbar/Navbar'
import arrow from '../../imports/images/icons8-arrow-48.png'
import loadingIcon from '../../imports/images/1487.gif'
import newspaper from '../../imports/images/icons8-news-50.png';

const News = () => {
  const userDashButtons = [
     { label: "Dashboard", route: "/userdash" },
    { label: "Logout", route: "/" }
    ]; 

    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(3);

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

    const handleShowMore = () => {
      setVisibleCount((prevCount) => prevCount + 3);
    };
  
    if (loading) {
      return <div className="news-sectioner">
        <div className='news-box'>
        <img src={loadingIcon} alt='loading...' />
        </div>
      </div>;
    }
  
    if (error) {
      return <div className="news-container">{error}</div>;
    }
  

  return (
    <div className="news-container">
       <Navbar buttons={userDashButtons} />
    <h1 className="news-title">Latest News</h1>
    <div className="news-list">
    {newsArticles.slice(0, visibleCount).map((article, index) => (
        <div key={index} className="news-article">
          <img src={newspaper} className='newspaper-icon' />
          <h2 className="news-headline">{article.headline}</h2>
          <p className="news-source">{article.summary}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            <img src={arrow} className='arrow' alt='arrow to article' />
          </a>
        </div>
      ))}
    </div>
    {visibleCount < newsArticles.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
  </div>
  )
}

export default News;