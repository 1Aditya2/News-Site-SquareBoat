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
            <a href={landNews[3]?.url} target="_blank" className="lnk">
            <img
              src={landNews[3]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[3]?.url} target="_blank" className="lnk">
          <h6>
              {landNews[3]?.title}
            </h6>
            </a>
            
          </div>
        </div>
        <div className="l1">
          <div className="image">
          <a href={landNews[11]?.url} target="_blank" className="lnk">
          <img
              src={landNews[11]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[11]?.url} target="_blank" className="lnk">
          <h6>
              {landNews[11]?.title}
            </h6>
            </a>
            
          </div>
        </div>
        <div className="l1">
          <div className="image">
          <a href={landNews[13]?.url} target="_blank" className="lnk">
          <img
             src={landNews[13]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[13]?.url} target="_blank" className="lnk">
          <h6>
            {landNews[13]?.title}
            </h6>
            </a>
            
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="m1">
          <div className="image">
          <a href={landNews[15]?.url} target="_blank" className="lnk">
          <img
              src= {landNews[15]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[15]?.url} target="_blank" className="lnk">
          <h5>
            {landNews[15]?.title}
            </h5>
            </a>
            
          </div>
          <div className="desc">
            {landNews[15?.description]}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="r1">
          <div className="image">
          <a href={landNews[21]?.url} target="_blank" className="lnk">
          <img
              src= {landNews[21]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[21]?.url} target="_blank" className="lnk">
          <h6>
              {landNews[21]?.title}
            </h6>
            </a>
            
          </div>
        </div>
        <div className="r1">
        <div className="image">
        <a href={landNews[31]?.url} target="_blank" className="lnk">
        <img
              src= {landNews[31]?.urlToImage}
              alt=""
            />
            </a>
            
          </div>
          <div className="heading">
          <a href={landNews[31]?.url} target="_blank" className="lnk">
          <h6>
            {landNews[31]?.title}
            </h6>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stemp;
