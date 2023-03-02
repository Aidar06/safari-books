import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer--block'>
                        <NavLink to={'/'}><h1>Book Shop</h1></NavLink>
                        <NavLink to={'/about'}>About us</NavLink>
                        <NavLink to={'/payment'}>Payment</NavLink>
                        <NavLink to={'/payment'}>Delivery</NavLink>
                    </div>
                    <div className='footer--text'>
                        <h4>Phone number:</h4>
                        <p>(+996)550-30-02-30</p>
                        <p>(+996)770-42-42-08</p>
                    </div>
                    <div className='footer--title'>
                        <h4>Email address:</h4>
                        <a href="https://motion-webllc.com/">bookshop@gmail.com</a>
                    </div>
                    <div className='footer--title'>
                        <h4>Instagram:</h4>
                        <a href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y=">@bookshop</a>
                    </div>
                    <div className='footer--title'>
                        <h4>Address:</h4>
                        <a href="https://goo.gl/maps/wX8ak4Fc7P1SqWRT9">Bishkek, Kievskaya st., 152/5</a>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;