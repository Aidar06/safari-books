import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {logDOM} from "@testing-library/react";
import {Language} from "../Context";


const Menu = ({menu,setMenu,signIn,setSignIn,signUp,setSignUp}) => {

    const navigate = useNavigate()

    function navToCat(tap){
        navigate(`/category/${tap}`)
    }

    let account = {}
    let accIn = false
    let arrAcc = []

    function getAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        acc.map(el => {
            if (el.inAcc === true){
                accIn = el.inAcc
                account = el
            }
            arrAcc.push(el)
        })

    }
    getAccount()

    const {language,setLanguage} = useContext(Language)

    return (
        <div className='menu' style={{
            left: menu? '': '-130%'
        }}>
            <div className="container">
                <div className='menu--group'>
                    <div className="menu--group__btn">
                            <div>
                                <h2  onClick={()=> setLanguage('kg')} style={{color: language === 'kg' ? 'rgba(0, 0, 0, 0.58)' : 'black'}}>Kgz</h2>
                                <h2  onClick={()=> setLanguage('ru')} style={{color: language === 'ru' ? 'rgba(0, 0, 0, 0.58)' : 'black'}}>Ru</h2>
                                <h2  onClick={()=> setLanguage('en')} style={{color: language === 'en' ? 'rgba(0, 0, 0, 0.58)' : 'black'}}>En</h2>
                            </div>
                        {
                            accIn? <NavLink to={'/account'}>
                                <div onClick={()=> setMenu(!menu)} className='menu--group__btn--acc'>
                                    <p>
                                        {account.name[0].toUpperCase()}
                                    </p>
                                </div>
                            </NavLink>:
                                <div className='menu--group__btn--buttons'>
                                    <button onClick={()=> {setSignUp(!signUp); setMenu(!menu)}}>sing up</button>
                                    <button onClick={()=> {setSignIn(!signIn); setMenu(!menu)}}>sing in</button>
                                </div>
                        }

                    </div>
                    <div className="menu--group__nav">
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/about'}>About us</NavLink></span>
                        <div>
                            <select onChange={(e)=> {navToCat(e.target.value); setMenu(!menu)}}>
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