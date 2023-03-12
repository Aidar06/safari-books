import React, {useState} from 'react';
import {GrDeliver} from "react-icons/gr";
import { MdPayments} from "react-icons/md";
import {SiVisa} from "react-icons/si";
import {RiDeleteBinLine} from "react-icons/ri";

const Payment = () => {
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
                            <h1 style={{display: books.length !== 0 ? '' : 'none'}} className='payment--block__basket--text'>Continue shopping</h1>
                            {
                                upDate? books.map(el => (
                                    <div className='payment--block__basket--block'>
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
                            <h4 style={{display: books.length !== 0 ? 'none' : '', padding:'60px 0'}}>nothing found in the cart</h4>
                        </div>
                        <div className='payment--block__delivery'>
                            <div className='payment--block__delivery--icon'>
                                <div className='payment--block__delivery--icon__start'>
                                    <GrDeliver style={{fontSize: '30px'}}/>
                                    <h4>Delivery</h4>
                                </div>
                                <div className='payment--block__delivery--icon__option'>
                                    <select>
                                        <option>
                                            Chui
                                        </option>
                                        <option>
                                            Talas
                                        </option>
                                        <option>
                                            Jalal-Abad
                                        </option>
                                        <option>
                                            Ysyk-kol
                                        </option>
                                        <option>
                                            Batken
                                        </option>
                                        <option>
                                            Osh
                                        </option>
                                        <option>
                                            Naryn
                                        </option>
                                    </select>
                                </div>
                                <div className='payment--block__delivery--icon__input'>
                                    <div className='payment--block__delivery--icon__input--page'>
                                        <p>Address</p>
                                        <input type="text"/>
                                    </div>
                                    <div className='payment--block__delivery--icon__input--page'>
                                        <p>Phone number</p>
                                        <input type="number"/>
                                    </div>
                                    <button onClick={() => setCounter(true)} style={{
                                        background: counter ? "white" : "",
                                        color: counter ? "black" : '',
                                        transition: ".4s"
                                    }}>{!counter ? "Confirm" : "Confirmed"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment--project'>
                        <div className='payment--project__title'>
                            <div className='payment--project__title--text'>
                                <h4>Payment</h4>
                                <MdPayments className="icons"/>
                            </div>
                            <div className='payment--project__title--input'>
                                <p>Card number</p>
                                <div>
                                    <input type="number"/>
                                </div>
                                <SiVisa className='visa'/>
                            </div>
                            <div className="payment--project__title--nav">
                                <p>Validity period</p>
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
                                <h5>Need a cheque</h5>
                            </div>
                            <button onClick={() => setDone(true) } style={{
                                transition: done ? ".4s" : ''
                            }
                            }>{!done ? "Pay" : "Done"}</button>
                        </div>
                        <div className='payment--project__method'>
                            <h2>Payment method</h2>
                            <div><input type="checkbox"/>Credit card</div>
                            <div><input type="checkbox"/>Cash</div>
                            <button  onClick={() => setUser(true)} style={{
                                background: user ? "white" : "",
                                color: user ? "black" : '',
                                transition: ".4s"
                            }}>{!user ? "Confirm" : "Confirmed"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;