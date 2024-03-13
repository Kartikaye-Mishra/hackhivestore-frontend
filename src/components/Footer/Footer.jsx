import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        {/* Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo. */}
                        This website is a practice project built using ReactJS and Strapi. It showcases the latest web development technologies and best practices to deliver a seamless shopping experience to users. While this is not a real e-commerce platform and does not have payment or shipping features, it serves as a demonstration of our skills and abilities as a web developer.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        1234 Elm Street Suite 567 Springfield, IL 62704 United States 
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:0731 ********</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@hackhivedev.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span  className="text" onClick={() => navigate("/") }>Home</span>
                   <span  className="text" onClick={() => navigate("/about")}>About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        HACKHIVE STORE 2023 CREATED BY HACKHIVE DEVS. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img className="paymentimagee" src={Payment} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Footer;

