import React from 'react'
import './Footer.scss'
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
  } from "react-icons/ai";
function Footer() {
  return (
    <>

<div className="footer center">
        <div className="footer-box">
          <div className="links">
            <h3 className="heading">Quick Links</h3>
            <ul className="list">
              <li>Convocation 2019</li>
              <li>NewsPaper Clipping</li>
              <li>Jobs</li>
              <li>IQAC</li>
              <li>Archives</li>
              <li>Tenders</li>
            </ul>
          </div>
          <div className="links">
            <h3 className="heading">Contact Us</h3>
            <ul className="list">
              <li>
                <AiOutlineInstagram className="icons" />
              </li>
              <li>
                <AiOutlineTwitter className="icons" />
              </li>
              <li>
                <AiOutlineYoutube className="icons" />
              </li>
            </ul>
          </div>
          <div className="copy">
            <p>© NEWS FR. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer