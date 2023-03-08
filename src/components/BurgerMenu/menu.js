import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {logDOM} from "@testing-library/react";


const Menu = ({menu,setMenu,signIn,setSignIn,signUp,setSignUp}) => {

    const navigate = useNavigate()

    function navToCat(tap){
        navigate(`/category/${tap}`)
    }

    return (
        <div className='menu' style={{
            left: menu? '': '-130%'
        }}>
            <div className="container">
                <div className='menu--group'>
                    <div className="menu--group__btn">
                            <div>
                                <h2 style={{color: 'black'}}>Kgz</h2>
                                <h2 style={{color: 'black'}}>Ru</h2>
                                <h2 style={{color: 'black'}}>En</h2>
                            </div>
                            <button onClick={()=> {setSignUp(!signUp); setMenu(!menu)}}>sing up</button>
                            <button onClick={()=> {setSignIn(!signIn); setMenu(!menu)}}>sing in</button>
                    </div>
                    <div className="menu--group__nav">
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/about'}>About us</NavLink></span>
                        <div>
                            <select onChange={(e)=> navToCat(e.target.value)}>
                                <option>Fiction</option>
                                <option>Children`s book</option>
                                <option>Books for teenagers</option>
                                <option>Self-education and development</option>
                                <option>Business literature</option>
                                <option>Hobbies and leisure</option>
                                <option>Pedagogy and education</option>
                                <option>Popular science literature</option>
                                <option>Publicism</option>
                                <option>Religion</option>
                                <option>Exclusive Products</option>
                            </select>
                            <IoIosArrowForward className='menu-icon'/>
                        </div>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/contacts'}>Contacts</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>Payment</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>Delivery</NavLink></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;