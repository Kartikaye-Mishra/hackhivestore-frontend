import React from "react";
import {HashLink} from 'react-router-hash-link'
import "./Banner.scss";
import BannerImg from "../../../assets/smnoisepurplepg.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
   const navigate=useNavigate();
       return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                {/* <li><HashLink className="link" to={"/#Categories"}>Categories</HashLink></li> */}
                    <h1>DEALS</h1>
                    <p>
                        {/* Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor */}
                         Discover our latest collection of electronic gadgets. <br />Shop now and get the best deals!
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={() => navigate("/about")}>
                            
                            Read More
                            </div>
                        <div className="banner-cta v2">
                        <HashLink className="link" to={"/#popular_products"}>
                            Shop Now
                            </HashLink>
                            </div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt = ''/>
            </div>
        </div>
    );
};

export default Banner;

