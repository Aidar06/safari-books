import React, {useContext, useState} from 'react';
import {GrDeliver} from "react-icons/gr";
import { MdPayments} from "react-icons/md";
import {SiVisa} from "react-icons/si";
import {RiDeleteBinLine} from "react-icons/ri";
import {Language} from "../../components/Context";

const Payment = () => {
    const {language} = useContext(Language)
    const [counter, setCounter] = useState(false)
    const [user, setUser] = useState(false)
    const [done, setDone] = useState(false)

    let books = JSON.parse(localStorage.getItem('books')) || []

    function deleteBook(id){
        let booksArr = JSON.parse(localStorage.getItem('books')) || []

       let newBooks = booksArr.filter(el => el.id !== id)

        let newBookArr = localStorage.setItem('books', JSON.stringify([...newBooks]))
    }

    const [upDate,setUpDate] = useState(true)


    return (
        <section id='payment'>
            <div className='container'>
                <div className='payment'>
                    <div className='payment--block'>
                        <div className='payment--block__basket'>
                            <h1 style={{display: books.length !== 0 ? '' : 'none'}} className='payment--block__basket--text'>{language === 'en'? 'Continue shopping:': language === 'ru' ? 'Сооданы улантыңыз:' : 'Сооданы улантыңыз:'}</h1>
                            {
                                upDate? books.map(el => (
                                    <div className='payment--block__basket--block' key={el.id}>
                                        <div className='payment--block__basket--block__img'>
                                            <img src={el.img} alt=""/>
                                        </div>
                                        <div className='payment--block__basket--block__info'>
                                            <div  className='payment--block__basket--block__info--title'>
                                                <h1>{el.title.length > 20 ? el.title.slice(0, 20) + '...': el.title}</h1>
                                                <h2>{el.author}</h2>
                                            </div>
                                            <div className='payment--block__basket--block__info--price'>
                                                <h3>{el.price}с</h3>
                                                <div onClick={()=> {deleteBook(el.id); setUpDate(false)}}>
                                                    <RiDeleteBinLine/>
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )): setUpDate(true)
                            }
                            <h4 style={{display: books.length !== 0 ? 'none' : '', padding:'60px 0'}}>{language === 'en'? 'nothing found in the cart': language === 'ru' ? 'ничего не найдено в корзине' : 'арабада эч нерсе жок'}</h4>
                        </div>
                        <div className='payment--block__delivery'>
                            <div className='payment--block__delivery--icon'>
                                <div className='payment--block__delivery--icon__start'>
                                    <GrDeliver style={{fontSize: '30px'}}/>
                                    <h4>{language === 'en'? 'Delivery': language === 'ru' ? 'Доставка' : 'Жеткирүү'}</h4>
                                </div>
                                <div className='payment--block__delivery--icon__option'>
                                    <select>
                                        <option>
                                            {language === 'en'? 'Chui': language === 'ru' ? 'Чуй' : 'Чуй'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Talas': language === 'ru' ? 'Талас' : 'Талас'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Jalal-Abad': language === 'ru' ? 'Жалал-Абад' : 'Жалал-Абад'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Ysyk-kol': language === 'ru' ? 'Исык-Куль' : 'Ысык-Кол'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Batken': language === 'ru' ? 'Баткен' : 'Баткен'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Osh': language === 'ru' ? 'Ош' : 'Ош'}
                                        </option>
                                        <option>
                                            {language === 'en'? 'Naryn': language === 'ru' ? 'Нарын' : 'Нарын'}
                                        </option>
                                    </select>
                                </div>
                                <div className='payment--block__delivery--icon__input'>
                                    <div className='payment--block__delivery--icon__input--page'>
                                        <p>{language === 'en'? 'Address:': language === 'ru' ? 'Адрес:' : 'Адрес:'}</p>
                                        <input type="text"/>
                                    </div>
                                    <div className='payment--block__delivery--icon__input--page'>
                                        <p>{language === 'en'? 'Phone number:': language === 'ru' ? 'Номер телефона:' : 'Тел номери:'}</p>
                                        <input type="number"/>
                                    </div>
                                    <button onClick={() => setCounter(true)} style={{
                                        background: counter ? "white" : "",
                                        color: counter ? "black" : '',
                                        transition: ".4s"
                                    }}>{!counter ? language === 'en'? 'Confirm': language === 'ru' ? 'Подтверждать' : 'ырастоо' : language === 'en'? 'Confirmed': language === 'ru' ? 'Подтвержденный' : 'Ырасталды'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment--project'>
                        <div className='payment--project__title'>
                            <div className='payment--project__title--text'>
                                <h4>{language === 'en'? 'Payment': language === 'ru' ? 'Оплата' : 'Төлөм'}</h4>
                                <MdPayments className="icons"/>
                            </div>
                            <div className='payment--project__title--input'>
                                <p>{language === 'en'? 'Card number': language === 'ru' ? 'Номер карты' : 'Картанын номери'}</p>
                                <div>
                                    <input type="number"/>
                                </div>
                                <SiVisa className='visa'/>
                            </div>
                            <div className="payment--project__title--nav">
                                <p>{language === 'en'? 'Validity period': language === 'ru' ? 'Срок годности' : 'Жарактуулук мөөнөтү'}</p>
                                <div className="payment--project__title--nav__text">
                                    <input type="text" placeholder="MONTH" className="input"/>
                                    <h1>/</h1>
                                    <input type="text" placeholder="YEAR" className="input"/>
                                    <div className="payment--project__title--nav__text--div">
                                        <input type="text" placeholder="CVC" className="cvc"/>
                                    </div>
                                </div>
                            </div>
                            <div className="payment--project__title--need">
                                <input type="checkbox"/>
                                <h5>{language === 'en'? 'Need a cheque': language === 'ru' ? 'Нужен чек' : 'Чек керек'}</h5>
                            </div>
                            <button onClick={() => setDone(true) } style={{
                                transition: done ? ".4s" : ''
                            }
                            }>{!done ?  language === 'en'? 'Pay': language === 'ru' ? 'Платить' : 'Төлө' : language === 'en'? 'Done': language === 'ru' ? 'Оплачено' : 'Төлөнду'}</button>
                        </div>
                        <div className='payment--project__method'>
                            <h2>{language === 'en'? 'Payment method': language === 'ru' ? 'Способ оплаты' : 'Төлөө ыкмасы'}</h2>
                            <div><input type="checkbox"/>{language === 'en'? 'Credit card': language === 'ru' ? 'Кредитная карта' : 'Кредиттик карта'}</div>
                            <div><input type="checkbox"/>{language === 'en'? 'Cash': language === 'ru' ? 'Наличные' : 'Накталай акча'}</div>
                            <button  onClick={() => setUser(true)} style={{
                                background: user ? "white" : "",
                                color: user ? "black" : '',
                                transition: ".4s"
                            }}>{!user ? language === 'en'? 'Confirm': language === 'ru' ? 'Подтверждать' : 'ырастоо' : language === 'en'? 'Confirmed': language === 'ru' ? 'Подтвержденный' : 'Ырасталды'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;