import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi";
import {RiShoppingBag2Line} from "react-icons/ri";
import {SlMenu} from "react-icons/sl";
import {GrClose} from "react-icons/gr";
import Menu from "../BurgerMenu/menu";
import {Language} from "../Context";

const Header = ({menu,setMenu,signUp,setSignUp,setSignIn,signIn}) => {
    const navigate = useNavigate()

    const navTo=()=>{
        navigate('/payment')
    }

    const navToCat=()=>{
        navigate('/category/Fiction')
    }

    const [value,setValue] = useState('')

    let [input,setInput] = useState(true)

    function navTpSearch(){
        if (value.length !== 0){
            navigate(`/search/${value}`)
        }else {
            setInput(false)
            setTimeout(()=> {
                setInput(true)
            }, 3000)
        }
    }

    const [searcher,setSearcher] = useState(false)

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
                                <h2 onClick={()=> setLanguage('kg')} style={{color: language === 'kg' ? 'rgba(0, 0, 0, 0.58)' : ''}}>Kgz</h2>
                                <h2 onClick={()=> setLanguage('ru')} style={{color: language === 'ru' ? 'rgba(0, 0, 0, 0.58)' : ''}}>Ru</h2>
                                <h2 onClick={()=> setLanguage('en')} style={{color: language === 'en' ? 'rgba(0, 0, 0, 0.58)' : ''}}>En</h2>
                            </div>

                            {
                                accIn? <NavLink to={'/account'}>
                                        <div className='header--navbar__block--acc'>
                                            <p>
                                                {account.name[0].toUpperCase()}
                                            </p>
                                        </div>
                                    </NavLink>:
                                  <div>
                                      <button onClick={()=> setSignUp(!signUp)}>Sign up</button>
                                      <button onClick={()=> setSignIn(!signIn)}>Sign in</button>
                                  </div>
                            }
                        </div>
                        <div className='header--navbar__bas'>
                            <div>
                                <BiSearchAlt onClick={()=> setSearcher(!searcher)}/>
                                <RiShoppingBag2Line onClick={()=> navTo()}/>
                            </div>
                        </div>
                    </div>
                    <div className="header--link">
                        <div className="header--link__search">
                            <button onClick={()=> navToCat()}>Catalog</button>
                            <div style={{
                                border: input ? '' : '1px solid red'
                            }} className="header--link__search--searcher">
                                <BiSearchAlt onClick={()=> navTpSearch()} className='header--link__search--searcher--icon'/>
                                <input onKeyDown={(e) => {
                                    if (e.key === 'Enter') navTpSearch()
                                }} onChange={(e)=> setValue(e.target.value)} type="text" placeholder='Search for title or author'/>
                            </div>
                        </div>
                        <div onClick={()=> navTo()} className="header--link__basket">
                            <p>Basket</p>
                            <div></div>
                            <RiShoppingBag2Line/>
                        </div>
                    </div>
                    <div style={{
                        top: searcher? '' : '-1000px'
                    }} className='header--searcher'>
                        <BiSearchAlt onClick={()=> navTpSearch()} className='header--searcher__icon'/>
                        <input onKeyDown={(e) => {
                            if (e.key === 'Enter') navTpSearch()
                        }} onChange={(e)=> setValue(e.target.value)} type="text" placeholder='Search for title or author'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;