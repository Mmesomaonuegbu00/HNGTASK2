import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import SvgComponent from "../SvgComponent/SvgComponent";


const Footer = () => {
    return (

        <div className="footer">
            <hr />

            <div className="row Footer1">

                <div className="footer-text">
                    <h1>Like What <br />You See?</h1>
                    <button className=""><Link to='../Shop'>Shop Now</Link>   </button>
                </div>


                <div className="footer-logo">
                    <div className="footer-text2">
                        <SvgComponent />
                        <span>Shop</span><span className="">Ease</span>
                    </div>
                    <br />
                    <div className="footer-links">
                        <a href="#">Home</a><br />
                        <a href="#">Shop</a><br />
                        <a href="#">About</a><br />
                    </div>
                </div>


            </div>
            <div className="copyrights">
                &copy; 2024 <br />
                <p>TimbuShop- All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer