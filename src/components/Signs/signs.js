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

    const [name,setName] = useState('')
    const [gmail,setGmail] = useState('')
    const [password,setPassword] = useState('')
    function creatAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        let newAcc = {
            name: name,
            gmail: gmail,
            id: acc.length + 1,
            password: password,
            inAcc: true
        }

        let setAcc = localStorage.setItem('accounts',JSON.stringify([...acc,newAcc]))
    }

    const [incorrectPassword,setIncorrectPassword] = useState(false)
    const [notAccount,setNotAccount] = useState(false)

    const [inGmail,setInGmail] = useState('')
    const [inPassword,setInPassword] = useState('')
    function inAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []
        let inAcc = []
        acc.map(el => {
            if (el.gmail === inGmail  && el.password === inPassword){
                acc.map(el => {

                    if (el.gmail === inGmail && el.password === inPassword){
                        inAcc.push(
                            {
                                name: el.name,
                                gmail: el.gmail,
                                id: el.id,
                                password: el.password,
                                inAcc: true
                            }
                        )
                    }else {
                        inAcc.push(
                            {
                                name: el.name,
                                gmail: el.gmail,
                                id: el.id,
                                password: el.password,
                                inAcc: el.inAcc
                            }
                        )
                    }
                    inLeave()
                    setSignTime(false)
                    let setAcc = localStorage.setItem('accounts',JSON.stringify(inAcc))
                })
            }else if (el.gmail === inGmail  && el.password !== inPassword){
                setIncorrectPassword(true)
            }else if(acc.map(element => {if(element.gmail === inGmail){return true}else{return false}}).includes(true) === false){
                setNotAccount(true)
            }

        })

    }

    const [inInput,setInInput] = useState(false)

    function changeInInput(){
        setInInput(true)
        setTimeout(()=> {
            setInInput(false)
        }, 3000)
    }

    function signInFunc(){
        inAccount()
    }

    function signUpFunc(){
        creatAccount()
        upLeave()
        setSignTime(false)
    }


    return (
        <div style={{
            display: signIn || signUp ? '': 'none',
            opacity: signIn || signUp ? '1': '0',
        }} className={`signs ${signTime? 'signs-come': 'signs-leave'}`}>
            <div className="signs--group">
                <div style={{
                    display: signIn? '' : 'none',
                }} className={`signs--group__block ${signTime? 'gr-ani-come': 'gr-ani-leave'}`}>
                    <h2 style={{display: notAccount? '' : 'none'}} className='signs--group__block--text'>No such account!</h2>
                    <div onClick={()=> {inLeave();setSignTime(false)}} className="signs--group__block--close">
                        <IoCloseOutline/>
                    </div>
                    <h1>Log in</h1>
                    <div className="signs--group__block--input">
                        <h3>E-mail address</h3>
                        <input style={{border: inInput && inGmail.length === 0? '1px solid red' : ''}} onChange={(e)=> {setInGmail(e.target.value); setNotAccount(false)}} type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>Password <span>{incorrectPassword? 'incorrect password' : ''}</span></h3>
                        <input style={{border: inInput && inPassword.length === 0 || incorrectPassword? '1px solid red' : ''}} onChange={(e)=> {setInPassword(e.target.value); setIncorrectPassword(false)}} type={eyes? 'password' : 'text'}/>
                        <div onClick={()=> setEyes(!eyes)} className='signs--group__block--input__icon'>
                            {
                                eyes? <IoEyeSharp/>: <BsFillEyeSlashFill/>
                            }
                        </div>
                        <h4>forgot password</h4>
                    </div>
                    <button onClick={()=> inGmail.length !== 0 && inPassword.length !== 0 ? signInFunc()  : changeInInput()}>Sign in</button>
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
                        <input style={{border: inInput && name.length === 0? '1px solid red' : ''}} onChange={(e)=> setName(e.target.value)} type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>E-mail address</h3>
                        <input style={{border: inInput && gmail.length === 0? '1px solid red' : ''}} onChange={(e)=> setGmail(e.target.value)} type="email"/>
                    </div>
                    <div className="signs--group__block--input">
                        <h3>Password</h3>
                        <input style={{border: inInput && password.length === 0? '1px solid red' : ''}} onChange={(e)=> setPassword(e.target.value)} type={eyes? 'password' : 'text'}/>
                        <div onClick={()=> setEyes(!eyes)} className='signs--group__block--input__icon1'>
                            {
                                eyes? <IoEyeSharp/>: <BsFillEyeSlashFill/>
                            }
                        </div>
                    </div>
                    <button onClick={()=> gmail.length !== 0 && password.length !== 0 && name.length !== 0 ? signUpFunc()  : changeInInput()}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Signs;