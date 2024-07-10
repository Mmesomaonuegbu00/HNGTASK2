import React from "react";
import "./header.css";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import UserSvg from '../SvgComponent/UserSvg';
import SvgComponent from "../SvgComponent/SvgComponent";

const Header = () => {
    return (
        <>

            <div className="Container">
                {/* <div className="row header-search ">
                    <div className="header-icon">
                        <i className="bi bi-telephone"></i>
                        <i className="bi bi-instagram"></i>
                        <i class="bi bi-browser-chrome"></i>
                    </div> 

                    <img src="./Images/Frame.png" alt="" className="NavImg" />
                </div> */}

                <Navbar expand="lg" className="justify-content-between">
                    <Container fluid>
                        <Navbar.Brand href="#home" className="NavbarBrand">
                            <SvgComponent />
                            <div className="timbu">
                                <span>Timbu</span><span className="NavbarText">Shop</span>
                            </div>
                        </Navbar.Brand>

                        <div className="input-group m-2">
                            <input type="text" className="form-control" placeholder="search" />


                        </div>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="NavList text-center">
                                <Link to="/" className="my-link">Home</Link>
                                <Link to="../Shop" className="my-link">Shop</Link>
                                <Link to="../About" className="my-link">About</Link>
                                <Link to="/" className="my-link">Contact</Link>
                            </Nav>

                            <div className="UserProfile d-sm-flex d-none d-sm-block">
                          <Link to='../Cart'> <UserSvg /></Link> 

                            <img src="./Images/Frame.png" alt="" className="NavImg" />
                        </div>
                        </Navbar.Collapse>
                        



                    </Container>
                </Navbar>
                
            </div>

        </>

    )
}

export default Header
