// NewsCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [randomNews, setRandomNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=agriculture&from=2024-06-24&to=2024-06-24&sortBy=popularity&apiKey=bd3c29a1c59b40deb1fd674711e000ca'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      // Obtener 3 noticias aleatorias
      const shuffledNews = news.sort(() => 0.5 - Math.random());
      const selectedNews = shuffledNews.slice(0, 3);
      setRandomNews(selectedNews);
    }
  }, [news]);

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomNews.map((article, index) => (
          <div key={index} className="p-4 rounded-md border-2">
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            {article.author && <p><strong>Autor:</strong> {article.author}</p>}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Leer más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
