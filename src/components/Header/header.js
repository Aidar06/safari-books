import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi";
import {RiShoppingBag2Line} from "react-icons/ri";
import {SlMenu} from "react-icons/sl";
import {GrClose} from "react-icons/gr";
import Menu from "../BurgerMenu/menu";

const Header = ({menu,setMenu,signUp,setSignUp,setSignIn,signIn}) => {
    const navigate = useNavigate()

    const navTo=()=>{
        navigate('/payment')
    }

    const navToCat=()=>{
        navigate('/category/Fiction')
    }

    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--navbar">
                        <div onClick={()=> setMenu(!menu)} className='header--navbar__icon' style={{transform: menu? '': 'rotate(360deg)'}}>
                            <div>
                                {
                                    menu? <GrClose/>: <SlMenu/>
                                }
                            </div>
                        </div>
                        <div className="header--navbar__nav">
                            <NavLink to={'/'}>
                                <h1>Book Shop</h1>
                            </NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/about'}>About us</NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/contacts'}>Contacts</NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/payment'}>Payment</NavLink>
                            <NavLink className='header--navbar__nav--a' to={'/payment'}>Delivery</NavLink>
                        </div>
                        <div className='header--navbar__block'>
                            <div>
                                <h2>Kgz</h2>
                                <h2>Ru</h2>
                                <h2>En</h2>
                            </div>

                            <button onClick={()=> setSignUp(!signUp)}>Sign up</button>
                            <button onClick={()=> setSignIn(!signIn)}>Sign in</button>
                        </div>
                        <div className='header--navbar__bas'>
                            <div>
                                <BiSearchAlt/>
                                <RiShoppingBag2Line/>
                            </div>
                        </div>
                    </div>
                    <div className="header--link">
                        <div className="header--link__search">
                            <button onClick={()=> navToCat()}>Catalog</button>
                            <div className="header--link__search--searcher">
                                <BiSearchAlt className='header--link__search--searcher--icon'/>
                                <input type="text" placeholder='Search for title or author'/>
                            </div>
                        </div>
                        <div onClick={()=> navTo()} className="header--link__basket">
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