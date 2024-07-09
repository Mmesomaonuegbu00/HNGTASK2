import React from "react";
import './shop.css';
import ArrowsBack from "./ArrowBack";




const Shop = () => {
    return (
        <div className="shop">
            <a href="/"><ArrowsBack /></a>
            <h1 className="text-center Check d-none d-sm-block">Checkout</h1>
            <h3 className="ship">Shipping information:</h3>
            <form action="">
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-form-label">Email:</label>
                    <div className="col">
                        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter your zip Email" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-form-label">Address:</label>
                    <div className="col">
                        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter your zip Address" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-form-label">City:</label>
                    <div className="col">
                        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter your zip city" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-form-label">Country:</label>
                    <div className="col">
                        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter your zip country" />
                    </div>
                </div>
                <div className="form-group d-sm-flex">
                    <label htmlFor="colFormLabel" className="col-form-label">Zip code:</label>
                    <div className="col">
                        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter your zip code" />
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Save this for future use
                    </label>
                </div>
                <hr className="dotted-lines" />



                <h3 className="ship">Payment information:</h3>


                <div className="form-row">
                    <div className="form-group col-md-4 d-sm-flex pt-2">
                        <label htmlFor="inputEmail4">Credit Card Number: </label>
                        <input type="email" className="form-control" id="inputPassword4" placeholder="******" />
                    </div>
                    <div className="form-group col-md-4 pt-2">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="******" />

                    </div>
                    <div className="form-group col-md-4 pt-2">
                        <input type="text" className="form-control" id="inputPassword4" placeholder="******" />
                    </div>
                </div>
                <div className="form-row">

                    <div className="form-group col-md-6 d-sm-flex">
                        <label htmlFor="inputCity"> Expiration Date:</label>
                        <input type="text" className="form-control" id="date" placeholder="DD/MM/YY" />
                    </div>
                    <div className="form-group col-md-6 d-sm-flex">
                        <label htmlFor="inputZip">CVV</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="******" />
                    </div>
                </div>
                <hr className="dotted-lines" />
                <h3 className="ship">Order summary</h3>
                <div className="rows">
                    <div className="col1">
                        <article>
                            <p>Grey Nike Air Force 1</p>
                            <h3>$800</h3>
                        </article>
                        <br />
                        <article>
                            <p>Zipper  Pocket Cargo Jeans1</p>
                            <h3>$350</h3>
                        </article>
                        <br />
                        <article>
                            <p>Pink Clean Up Cap</p>
                            <h3>$50.00</h3>
                        </article>
                    </div>
                    <div className="col2">
                        <h3>1</h3>
                        <h3>1</h3>
                        <h3>1</h3>

                    </div>
                </div>

                <hr className="dotted-lines" />

                <div className="rows">
                    <div className="col1">
                        <p>Sub Total</p>
                        <p>Delivery</p>
                        <p>Total</p>
                    </div>
                    <div className="col2">
                        <h3>$12,000</h3>
                        <h3>$50.00</h3>
                        <h3>$12,050</h3>

                    </div>


                </div>
                <button className="button1">Price Order</button><br />
                <button className="button2">Review Order</button>
            </form>
            

        </div>
    )
}

export default Shop