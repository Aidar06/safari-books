import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";


const Menu = ({menu,setMenu,signIn,setSignIn,signUp,setSignUp}) => {

    const navigate = useNavigate()

    const navTo=()=>{
        navigate('/payment')
    }

    return (
        <div className='menu' style={{
            bottom: menu? '': '-100%'
        }}>
            <div className="container">
                <div className='menu--group'>
                    <div className="menu--group__btn">
                            <div>
                                <h2>Kgz</h2>
                                <h2>Ru</h2>
                                <h2>En</h2>
                            </div>
                            <button onClick={()=> {setSignUp(!signUp); setMenu(!menu)}}>sing up</button>
                            <button onClick={()=> {setSignIn(!signIn); setMenu(!menu)}}>sing in</button>
                    </div>
                    <div className="menu--group__nav">
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/about'}>About us</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/contacts'}>Contacts</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>Payment</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>Delivery</NavLink></span>
                        <button onClick={()=> navTo()}>catalog</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;