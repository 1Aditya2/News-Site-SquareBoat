import React, { useEffect } from "react";
import "./Landing.scss";
import sp from "../../assets/spring.jpg";
import Ttemp from "../../Components/Templates/Ttemp/Ttemp";
import Stemp from "../../Components/Templates/Stemp/Stemp";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import { getLandNews } from "../../Redux/NewsSlice";
import { Link } from "react-router-dom";
function Landing() {
  const dispatch = useDispatch();
  const landNews=useSelector((state)=>state.newsReducer.landNews)
  useEffect(() => {
    dispatch(getLandNews())
  }, [])
  
  return (
    <div className="landing center">
      <div className="landing-box">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <Link to={'/content'}>
              <img className="d-block w-100" src={landNews[0]?.urlToImage} alt="First slide" />
              </Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>{landNews[0]?.title}</h5>
               
              </div>
            </div>
            <div class="carousel-item">
            <Link to={'/content'}>
              <img className="d-block w-100" src={landNews[1]?.urlToImage}  alt="Second slide" />
              </Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>{landNews[1]?.title}</h5>
                {/* <p>...</p> */}
              </div>
            </div>
            <div class="carousel-item">
              <Link to='/content'>
              <img class="d-block w-100" src={landNews[2]?.urlToImage} alt="Third slide" />
              </Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>{landNews[2]?.title}</h5>
                {/* <p>...</p> */}
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="tech">
          <Ttemp/>
        </div>
        <div className="sci tech">
          <Stemp/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
