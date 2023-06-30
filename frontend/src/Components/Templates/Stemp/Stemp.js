import React from "react";
import "./Stemp.scss";
import { useSelector } from "react-redux";

function Stemp() {
  const landNews=useSelector((state)=>state.newsReducer.landNews)
  return (
    <div className="stemp">
      <div className="left">
        <div className="l1">
          <div className="image">
            <img
              src={landNews[3]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h6>
              {landNews[3]?.title}
            </h6>
          </div>
        </div>
        <div className="l1">
          <div className="image">
            <img
              src={landNews[11]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h6>
              {landNews[11]?.title}
            </h6>
          </div>
        </div>
        <div className="l1">
          <div className="image">
            <img
             src={landNews[13]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h6>
            {landNews[13]?.title}
            </h6>
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="m1">
          <div className="image">
            <img
              src= {landNews[15]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h5>
            {landNews[15]?.title}
            </h5>
          </div>
          <div className="desc">
            {landNews[15?.description]}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="r1">
          <div className="image">
            <img
              src= {landNews[21]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h6>
              {landNews[21]?.title}
            </h6>
          </div>
        </div>
        <div className="r1">
        <div className="image">
            <img
              src= {landNews[31]?.urlToImage}
              alt=""
            />
          </div>
          <div className="heading">
            <h6>
            {landNews[31]?.title}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stemp;
