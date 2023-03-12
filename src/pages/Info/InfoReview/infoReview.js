import React, {useState} from 'react';
import {IoIosStar} from "react-icons/io";
import vector from './../../../assets/img/Vector.png'

const InfoReview = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [star, setStar] = useState(false)
    const [star1, setStar1] = useState(false)
    const [star2, setStar2] = useState(false)
    const [star3, setStar3] = useState(false)
    const [star4, setStar4] = useState(false)
    const classChange = (e) => {
        setValue(e.target.value)
    }
    const handChange = () => {
        const newTodo = {
            id: todos.length ? todos[todos.length -1].id +1 : 1,
            title: value,
            person: 0,
            isDone: true
        }
        setTodos([...todos,newTodo])
    }
    const  time = `${new Date().getFullYear()}:${new Date().getDate()}:${new Date().getMonth()}:${new Date().getHours()}:${new Date().getMinutes()}`

    const [rew,setRew] = useState(false)

    const [user,setUser] = useState('')
    
    return (
        <section id='review'>
            <div className='container'>
                <div className='review-btn'>
                    <button onClick={()=> setRew(!rew)}>Read reviews</button>
                </div>
                <div style={{display: rew ? '': 'none'}}>
                    <div className='faq'>
                        {
                            todos.map(el => (

                                <div className='faq--block'>
                                    <div className='faq--block__img'>
                                        <div className='faq--block__img--page'>
                                            <img src={vector} alt=""/>
                                        </div>
                                        <div className='faq--block__img--titles'>
                                            <div className='faq--block__img--text'>
                                                <h1>name {el.id}</h1>
                                                <h4>{time}</h4>
                                            </div>

                                            <div className='faq--block__img--titles__yellow'>
                                                <IoIosStar style={{color: star ? 'yellow' : 'none'}} onClick={() => setStar(!star)}/>
                                                <IoIosStar style={{color: star1 ? 'yellow' : 'none'}} onClick={() => setStar1(!star1)}/>
                                                <IoIosStar style={{color: star2 ? 'yellow' : 'none'}} onClick={() => setStar2(!star2)}/>
                                                <IoIosStar style={{color: star3 ? 'yellow' : 'none'}} onClick={() => setStar3(!star3)}/>
                                                <IoIosStar style={{color: star4 ? 'yellow' : 'none'}} onClick={() => setStar4(!star4)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='faq--block__commit'>
                                        <p>{
                                            el.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='review'>
                        <input onChange={classChange} type="text" placeholder='Write a review' className='simple--search'/>
                    </div>
                    <div className='stars'>
                        <div className='stars--blocks'>
                            <div className='stars--zve'>
                                <IoIosStar style={{color: star ? 'yellow' : 'none'}} onClick={() => setStar(!star)}/>
                                <IoIosStar style={{color: star1 ? 'yellow' : 'none'}} onClick={() => setStar1(!star1)}/>
                                <IoIosStar style={{color: star2 ? 'yellow' : 'none'}} onClick={() => setStar2(!star2)}/>
                                <IoIosStar style={{color: star3 ? 'yellow' : 'none'}} onClick={() => setStar3(!star3)}/>
                                <IoIosStar style={{color: star4 ? 'yellow' : 'none'}} onClick={() => setStar4(!star4)}/>
                            </div>
                            <div className='stars--over'>
                                <h3>Overall rating</h3>
                            </div>
                        </div>
                        <div className='stars--btn'>
                            <button onClick={handChange}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoReview;