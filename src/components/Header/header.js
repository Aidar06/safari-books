import React from 'react';
import {NavLink} from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi";
import {RiShoppingBag2Line} from "react-icons/ri";

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--navbar">
                        <div className="header--navbar__nav">
                            <NavLink to={'/'}>
                                <h1>Book Shop</h1>
                            </NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/about'}>About us</NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/contacts'}>Contacts</NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/payment'}>Payment</NavLink>
                        </div>
                        <div className='header--navbar__block'>
                            <div>
                                <h2>Kgz</h2>
                                <h2>Ru</h2>
                                <h2>En</h2>
                            </div>

                            <button>Sign up</button>
                            <button>Sign in</button>
                        </div>
                    </div>
                    <div className="header--link">
                        <div className="header--link__search">
                            <button>Catalog</button>
                            <div className="header--link__search--searcher">
                                <BiSearchAlt className='header--link__search--searcher--icon'/>
                                <input type="text" placeholder='Search for title or author'/>
                            </div>
                        </div>
                        <div className="header--link__basket">
                            <p>Basket</p>
                            <div></div>
                            <RiShoppingBag2Line/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;