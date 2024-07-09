import React from "react";
import "./veiw.css"

const Veiw = () => {
    return (
        <div className="veiws">
            <img src="./Images/product1.png" alt="" className="img-fluid veiw-img" />
            <article className="pt-5">
                <p>Grey Nike Air Force 1</p>
                <p>Size : 40 42 41 38 39</p>
                <span className="color1">
                    <p>color</p>
                    <p className="color2"></p>
                    <p className="color2 d-none d-sm-block"></p>
                    <p className="color2 d-none d-sm-block"></p>
                    <p className="color2 d-none d-sm-block"></p>
                </span>
                <h3>$800</h3>
              
              <button className="cart"><a href="/Cart">Add to Cart</a></button>
            </article>
        </div>
    )
}


export default Veiw