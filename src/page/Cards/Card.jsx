import React from "react";
import './card.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarSvg from '../StarSvg'
import Arrows from "../Arrow";
import ArrowsRight from "../Arrows2";

const Cards = () => {
    return (
        <>

            <div className="card-row1 pt-5">
                <h1 className="product-text">Exclusive Deals Just for You</h1>
                <div className="d-sm-flex justify-content-between">

                    <Card style={{ width: 'rem' }} className="product1">

                    

                        <Card.Img variant="top" src="../Images/product1.png" />

                        <Card.Body>
                            <Card.Title>Grey Nike Air Force 1-  Unisex </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <h5>$800</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card >




                    <Card style={{ width: 'rem' }} className="product2">
                        <Card.Img src="./Images/product2.png" />
                        <Card.Body>
                            <Card.Title>Mesh Summer Shirt 5.</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <h5>$90</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>

                        </Card.Body>
                    </Card>



                    <Card style={{ width: 'rem' }} className="product3">
                        <Card.Img variant="top" src="./Images/product3.png" />
                        <Card.Body>
                            <Card.Title>Pink Clean Up Cap</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$50.00</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>


                </div >

                <div className="d-sm-flex d-sm-flex justify-content-between">



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
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: 'rem' }} className="product5">
                        <Card.Img variant="top" src="./Images/product5.png" />
                        <Card.Body>
                            <Card.Title>Zipper  Pocket Cargo Jeans   </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$350</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>




                    <Card style={{ width: 'rem' }} className="product6" >
                        <Card.Img variant="top" src="./Images/product6.png" />
                        <Card.Body>
                            <Card.Title>Pink Clean Up Cap</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$50.00</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>


                </div>

                <div className="d-sm-flex d-sm-flex justify-content-between">


                    <Card style={{ width: 'rem' }} className="product7">
                        <Card.Img variant="top" src="./Images/product7.png" />
                        <Card.Body>
                            <Card.Title>Bucket Hat  Unisex </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$60.00</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: 'rem' }} className="product8">
                        <Card.Img variant="top" src="./Images/product8.png" />
                        <Card.Body>
                            <Card.Title>$70.00</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$90</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: 'rem' }} className="product9">
                        <Card.Img variant="top" src="./Images/product9.png" />
                        <Card.Body>
                            <Card.Title>Toddler boy outfits  Set </Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$100</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>

                </div>

                <div className="d-sm-flex">
                    <Card style={{ width: 'rem' }} className="product10">
                        <Card.Img variant="top" src="./Images/product10.png" />
                        <Card.Body>
                            <Card.Title>Knit top Mini skirt Set</Card.Title>
                            <Card.Text className="cardtext">
                                <div className="div">
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg />
                                    <StarSvg /> *
                                    <h5>$200</h5>
                                </div>
                            </Card.Text>

                            <div className="button-group">
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>


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
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>


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
                                <Button className="veiw"><Link to="../Veiw">Quick Veiw</Link></Button>
                                <Button className="cart"><Link to="../Cart">Add to Cart</Link></Button>

                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div >

    <div className="card-bottom">
        <Arrows />
        <div className="num">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
        </div>
        <ArrowsRight />
    </div>





        </>




    );
}

export default Cards
