import React, {useState} from 'react';
import {IoCloseOutline, IoEyeSharp} from "react-icons/io5";
import {BsFillEyeSlashFill} from "react-icons/bs";

const Signs = ({signUp,setSignUp,setSignIn,signIn}) => {

    const [signTime,setSignTime] = useState(true)

    function inLeave(){
        setTimeout(()=> {
            setSignIn(!signIn)
            setSignTime(true)
        }, 700)
    }

    function upLeave(){
        setTimeout(()=> {
            setSignUp(!signUp)
            setSignTime(true)
        }, 700)
    }

    const [eyes,setEyes] = useState(true)

    return (
        <div style={{
            display: signIn || signUp ? '': 'none',
            opacity: signIn || signUp ? '1': '0',
        }} className={`signs ${signTime? 'signs-come': 'signs-leave'}`}>
            <div className="signs--group">
                <div style={{
                    display: signIn? '' : 'none',
                }} className={`signs--group__block ${signTime? 'gr-ani-come': 'gr-ani-leave'}`}>
                    <div onClick={()=> {inLeave();setSignTime(false)}} className="signs--group__block--close">
                        <IoCloseOutline/>
                    </div>
                    <h1>Log in</h1>
                    <div className="signs--group__block--input">
                        <h3>E-mail address</h3>
                        <input type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>Password</h3>
                        <input type={eyes? 'password' : 'text'}/>
                        <div onClick={()=> setEyes(!eyes)} className='signs--group__block--input__icon'>
                            {
                                eyes? <IoEyeSharp/>: <BsFillEyeSlashFill/>
                            }
                        </div>
                    </div>
                    <button>Sign in</button>
                </div>
                <div style={{
                    display: signUp? '': 'none'
                }} className={`signs--group__block ${signTime? 'gr-ani-come': 'gr-ani-leave'}`}>
                    <div onClick={()=> {upLeave();setSignTime(false)}} className="signs--group__block--close">
                        <IoCloseOutline/>
                    </div>
                    <h1>Get started with an <br/>account</h1>
                    <div className="signs--group__block--input">
                        <h3>Name</h3>
                        <input type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>E-mail address</h3>
                        <input type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>Password</h3>
                        <input type={eyes? 'password' : 'text'}/>
                        <div onClick={()=> setEyes(!eyes)} className='signs--group__block--input__icon'>
                            {
                                eyes? <IoEyeSharp/>: <BsFillEyeSlashFill/>
                            }
                        </div>
                    </div>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Signs;