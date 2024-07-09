import React from "react";
import './cart.css';
import ArrowsBack from "../../components/ArrowBack";
import Delete from "../../components/Delete";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarSvg from '../StarSvg'



const Cart = () => {
    return (
        <div>
            <a href="/"><ArrowsBack></ArrowsBack></a>
            <div className="Carts">
                <h1 className="cart-headig text-center">
                    Cart items
                </h1>
                <div className="d-sm-flex cart-row my-4">
                    <div className="col">
                        <img src="./Images/product1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col ">
                        <div className="row cart-col2">

                            <article>
                                <p>Grey Nike Air Force 1</p>
                                <p>Size  40</p>
                                <span className="color1">
                                    <p>color</p>
                                    <p className="color2"></p>
                                </span>
                                <h3>$800</h3>
                                <span className="Add">+</span> 1  <span className="Minus">-</span>
                            </article>

                            <div className="count">
                                <Delete></Delete>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="dotted-lines d-none" />
                <div className="d-sm-flex cart-row1 my-4">
                    <div className="col">
                        <img src="./Images/product5.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col ">
                        <div className="row cart-col2">

                            <article>
                                <p>Zipper  Pocket Cargo Jeans</p>
                                <p>Size  L</p>
                                <span className="color1">
                                    <p>color</p>
                                    <p className="color2"></p>
                                </span>
                                <h3>$350</h3>
                                <span className="Add">+</span> 1  <span className="Minus">-</span>
                            </article>

                            <div className="count">
                                <Delete></Delete>
                            </div>


                        </div>
                    </div>
                </div>
                <hr className="dotted-lines d-none " />

                <div className="d-sm-flex cart-row2 my-4">
                    <div className="col">
                        <img src="./Images/product6.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col ">
                        <div className="row cart-col2">

                            <article>
                                <p>Pink Clean Up Cap</p>
                                <p>Size  42</p>
                                <span className="color1">
                                    <p>color</p>
                                    <p className="color2"></p>
                                </span>
                                <h3>$50.00</h3>
                                <span className="Add">+</span> 1  <span className="Minus">-</span>
                            </article>

                            <div className="count">
                                <Delete></Delete>
                            </div>


                        </div>
                    </div>
                </div>
                <hr className="dotted-lines d-none d-sm-block" />
                <div className="rows1">
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
                <hr className="dotted-lines d-none d-sm-block" />
                <button className="button1">Price Order</button><br />
                <button className="button2">Review Order</button>
            </div>

            <h1 className="cart-headig pt-3">
                Recommended Items
            </h1>
            <div className="row p-5">

                <div className="col">

                    <Card style={{ width: 'rem' }} className="product4">
                        <Card.Img variant="top" src="./Images/product4.png" className="image4" />
                        <Card.Body>
                            <Card.Title>Multi-Pocket  Jean-Women </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$300</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><a href="#">Quick Veiw</a></Button>
                                <Button className="cart"><a href="/Cart">Add to Cart</a></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card style={{ width: 'rem' }} className="product11">
                        <Card.Img variant="top" src="./Images/product11.png" />
                        <Card.Body>
                            <Card.Title>Crop Tops Sweatpants
                                Baggy Pants.</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$400</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><a href="#">Quick Veiw</a></Button>
                                <Button className="cart"><a href="/Cart">Add to Cart</a></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card style={{ width: 'rem' }} className="product12">
                        <Card.Img variant="top" src="./Images/product12.png" />
                        <Card.Body>
                            <Card.Title>Leather Bag- Women  </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$800</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><a href="#">Quick Veiw</a></Button>
                                <Button className="cart"><a href="/Cart">Add to Cart</a></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>
    )
}

export default Cart