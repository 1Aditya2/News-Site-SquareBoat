import React from "react";
import "./Ttemp.scss";
import { useSelector } from "react-redux";
function Ttemp() {
  const landNews=useSelector((state)=>state.newsReducer.landNews)
  console.log(landNews);
  return (
    <div className="ttemp">
      <div className="item1">
        <div className="img">
          <img
            src={landNews[5]?.urlToImage}
            alt=""
          />
        </div>
        <div className="info">
          <div className="heading">
            <h5>{landNews[5]?.title}</h5>
          </div>
          <div className="descr">
            {landNews[5]?.description}
          </div>
        </div>
      </div>
      <div className="sideitem item2">
        <div className="img">
            <img src={landNews[10]?.urlToImage} alt="" />
        </div>
        <div className="info">
            <div className="heading"><h6>{landNews[10]?.title}</h6></div>
        </div>
      </div>
      <div className="sideitem item3">
        <div className="img">
            <img src={landNews[20]?.urlToImage} alt="" />
        </div>
        <div className="info">
            <div className="heading"><h6>{landNews[20]?.title}</h6></div>
        </div>
      </div>
  
      
    </div>
  );
}

export default Ttemp;
