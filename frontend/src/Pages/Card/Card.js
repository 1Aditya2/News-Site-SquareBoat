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
        <Link to='/content'>
        <div className="image">
          <img src={news.urlToImage} alt="" />
        </div></Link>
        
        <div className="heading">
          <Link className="lnk" to='/content'>
          <h6>
            {news.title}
          </h6>
          </Link>
          
        </div>
      </div>
      })}
      
      </div>
    </div>
  );
}

export default Card;
