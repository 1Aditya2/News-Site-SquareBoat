import React from "react";
import "./Ttemp.scss";
import { useSelector } from "react-redux";
function Ttemp() {
  const landNews = useSelector((state) => state.newsReducer.landNews);
  console.log(landNews);
  return (
    <div className="ttemp">
      <div className="item1">
        <div className="img">
          <a href={landNews[5]?.url} className="lnk" target="_blank">
            <img src={landNews[5]?.urlToImage} alt="" />
          </a>
        </div>
        <div className="info">
          <div className="heading">
            <a href={landNews[5]?.url} target="_blank" className="lnk">
              <h5>{landNews[5]?.title}</h5>
            </a>
          </div>
          <div className="descr">{landNews[5]?.description}</div>
        </div>
      </div>
      <div className="sideitem item2">
        <div className="img">
          <a href={landNews[10]?.url} className="lnk" target="_blank">
            <img src={landNews[10]?.urlToImage} alt="" />
          </a>
        </div>
        <div className="info">
          <div className="heading">
            <a href={landNews[10]?.url} className="lnk" target="_blank">
              <h6>{landNews[10]?.title}</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="sideitem item3">
        <div className="img">
          <a href={landNews[20]?.url} className="lnk" target="_blank">
            <img src={landNews[20]?.urlToImage} alt="" />
          </a>
        </div>
        <div className="info">
          <div className="heading">
            <a href={landNews[10]?.url} className="lnk" target="_blank">
              <h6>{landNews[20]?.title}</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ttemp;
