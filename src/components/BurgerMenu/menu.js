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
                                    <button onClick={()=> {setSignUp(!signUp); setMenu(!menu)}}>{language === 'en'? 'Sign up': language === 'ru' ? 'регист' : 'катталуу'}</button>
                                    <button onClick={()=> {setSignIn(!signIn); setMenu(!menu)}}>{language === 'en'? 'Sign up': language === 'ru' ? 'Войти' : 'Кирүү'}</button>
                                </div>
                        }

                    </div>
                    <div className="menu--group__nav">
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/about'}>{language === 'en'? 'About us': language === 'ru' ? 'О нас' : 'Биз жөнүндө'}</NavLink></span>
                        <div>
                            <select onChange={(e)=> {navToCat(e.target.value); setMenu(!menu)}}>
                                <option>{language === 'en'? 'Fiction': language === 'ru' ? 'Вымысел' : 'калп'}</option>
                                <option>{language === 'en'? 'Children`s book': language === 'ru' ? 'Детская книга' : 'Балдар китеби'}</option>
                                <option>{language === 'en'? 'Books for teenagers': language === 'ru' ? 'Книги для подростков' : 'Өспүрүмдөр үчүн китептер'}</option>
                                <option>{language === 'en'? 'SSelf-development': language === 'ru' ? 'Саморазвитие' : 'Өзүн-өзү өнүктүрүү'}</option>
                                <option>{language === 'en'? 'Business literature': language === 'ru' ? 'Деловая литература' : 'Бизнес адабияты'}</option>
                                <option>{language === 'en'? 'Hobbies': language === 'ru' ? 'Хобби и досуг' : 'Хобби жана эс алуу'}</option>
                                <option>{language === 'en'? 'Pedagogy and education': language === 'ru' ? 'Педагогика и образование' : 'Педагогика жана билим берүү'}</option>
                                <option>{language === 'en'? 'Popular science literature': language === 'ru' ? 'Научно-популярная литература' : 'Илимий-популярдуу адабият'}</option>
                                <option>{language === 'en'? 'Publicism': language === 'ru' ? 'Публицистика' : 'Публицистика'}</option>
                                <option>{language === 'en'? 'Religion': language === 'ru' ? 'Религия' : 'Дин жөнүндө'}</option>
                                <option>{language === 'en'? 'Exclusive Products': language === 'ru' ? 'Эксклюзивные продукты' : 'Exclusive Products'}</option>
                            </select>
                            <IoIosArrowForward className='menu-icon'/>
                        </div>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/contacts'}>{language === 'en'? 'Contacts': language === 'ru' ? 'Контакт' : 'Контакт'}</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>{language === 'en'? 'Payment': language === 'ru' ? 'Оплата' : 'Төлөм'}</NavLink></span>
                        <span onClick={()=> setMenu(!menu)}><NavLink className='menu--group__nav--a' to={'/payment'}>{language === 'en'? 'Delivery': language === 'ru' ? 'Доставка' : 'Жеткирүү'}</NavLink></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;