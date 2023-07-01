import React, { useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsOf } from "../../Redux/NewsSlice";
function Card() {
  const dispatch = useDispatch();
  const newsOf = useSelector((state) => state.newsReducer.newsOf);
  const catNews = useSelector((state) => state.newsReducer.catNewsOf);
  useEffect(() => {
    dispatch(
      getNewsOf({
        newsof: newsOf,
      })
    );
  }, [newsOf]);

  return (
    <div className="card center">
      
      <div className="card-box">
      {catNews?.map((news) => {
        return <div className="item" key={news.publishedAt}>
        
        <div className="image">
          <a href={news.url} className="lnk" target="_blank">
          <img src={news.urlToImage} alt="" />
          </a>
        </div>
        
        <div className="heading">
        <a href={news.url} className="lnk" target="_blank">
        <h6>
            {news.title}
          </h6>
          </a>
          
          
         
          
        </div>
      </div>
      })}
      
      </div>
    </div>
  );
}

export default Card;
