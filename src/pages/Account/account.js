import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Account = () => {

    let account = {}
    let accIn = false
    let arrAcc = []

    function getAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        acc.map(el => {
            if (el.inAcc === true){
                accIn = el.inAcc
                account = el
            }else {
                arrAcc.push(el)
            }
        })

    }

    function outAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        let outAcc = []

        acc.map(el => {
            outAcc.push({
                name: el.name,
                gmail: el.gmail,
                id: el.id,
                password: el.password,
                inAcc: false
            })
        })

        let setAcc = localStorage.setItem('accounts',JSON.stringify(outAcc))
    }

    function deleteAccount(){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        let outAcc = []

        acc.map(el => {
            if (el.inAcc === false){
                outAcc.push({
                    name: el.name,
                    gmail: el.gmail,
                    id: el.id,
                    password: el.password,
                    inAcc: el.inAcc
                })
            }
        })

        let setAcc = localStorage.setItem('accounts',JSON.stringify(outAcc))
    }

    const navigate = useNavigate()

    function navToHome(){
        navigate('/')
    }

    function clickAccount(id){
        let acc = JSON.parse(localStorage.getItem('accounts')) || []

        let outAcc = []

        acc.map(el => {
            if (el.id === id){
                outAcc.push({
                    name: el.name,
                    gmail: el.gmail,
                    id: el.id,
                    password: el.password,
                    inAcc: true
                })
            }else {
                outAcc.push({
                    name: el.name,
                    gmail: el.gmail,
                    id: el.id,
                    password: el.password,
                    inAcc: false
                })
            }
        })

        let setAcc = localStorage.setItem('accounts',JSON.stringify(outAcc))
    }

    getAccount()

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <section id='account'>
            <div className="container">
                <div className="account">
                    <div className="account--in">
                        <div className="account--in__logo">
                            <p>
                                {account.name[0].toUpperCase()}
                            </p>
                        </div>
                        <div className="account--in__name">
                            <h2>{account.name}</h2>
                            <h3>{account.gmail}</h3>
                        </div>
                    </div>
                    <div className='account--line'></div>
                    <div className="account--other">
                        {
                            arrAcc.map(el => (
                                <div onClick={()=> {clickAccount(el.id); handleRefresh()}} className="account--other__block" key={el.id}>
                                    <div className="account--other__block--logo">
                                        <p>
                                            {el.name[0].toUpperCase()}
                                        </p>
                                    </div>
                                    <div className="account--other__block--name">
                                        <h2>{el.name}</h2>
                                        <h3>{el.gmail}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="account--set">
                        <h3 onClick={()=> {outAccount(); navToHome()}}>sign out</h3>
                        <h3 onClick={()=> {deleteAccount(); navToHome()}}>delete account</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;