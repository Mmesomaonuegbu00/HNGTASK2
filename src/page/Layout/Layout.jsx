import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";



const Layout = () => {
    return (
        <>
            <section className="Home">
                <div className="jumbotron Top-banner">
                    <h1 className="display-4">Discover Our Latest <br /><span>Arrivals!</span></h1>
                    <p className="lead">Discover must have essentials at unbeatble prices</p>

                    <button className=""><Link to='../Shop'>Shop Now</Link>   </button>
                </div >

            </section >

            {/* <div className="row new-arrivals">

                <h1><span>NEW ARRIVALS</span></h1>


                <div className="images">
                    <div className="">
                        <img src="./Images/arrival1.png" alt="" />
                    </div>
                    <div className="">
                        <img src="./Images/arrival2.png" alt="" />
                    </div>
                    <div className="">
                        <img src="./Images/arrival3.png" alt="" />
                    </div>
                </div>

            </div> */}


            <div className="Home-bottom">
                <p>All</p>
                <p>Women</p>
                <p>Men</p>
                <p>Kids</p>
                <p>Accessories</p>
                <p>Featured</p>


            </div>

            <div className="selects">
                <div className="Home-bottom2" >
                    <select name="" id="">
                        <option value=""> All</option>
                        <option value=""> Women</option>
                        <option value=""> Men</option>
                        <option value=""> Kids</option>
                        <option value=""> Accessories</option>
                        <option value=""> Featured</option>




                    </select>
                </div>
                <select name="filter" id="" >
                    <option value=""> Filter</option>
                    <option value=""> Catergories</option>
                    <option value=""> Price Range</option>
                    <option value="">  Brand</option>
                    <option value=""> Rating</option>

                </select>
                <br />

                <select name="filter" id="" >
                    <option value=""> Sort By:</option>
                    <option value=""> Popularity</option>
                    <option value=""> Price</option>
                    <option value="">  Newest</option>
                    <option value=""> Oldest</option>

                </select>
            </div>

{/* <div className="Filters">

                <Catergory/> <br />
                <br />
                <Select />
            </div> */}


        </>






    );
}

export default Layout

