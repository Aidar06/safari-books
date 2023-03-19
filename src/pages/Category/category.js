import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import BooksCard from "../../components/BooksCard/booksCard";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {Language} from "../../components/Context";


const Category = () => {
    const {language} = useContext(Language)
    const {name} = useParams()

    const [book,setBook] = useState([])

    const getBook= async()=> {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${name}&orderBy=newest&key=AIzaSyA5AsCAhvbZRq505icc2n-XSma-7IQNwA0`)
            const {data} = await res
            await setBook(data.items)
        }catch (e){
            console.log(e,'error')
        }
    }

    useEffect(()=> {
        getBook()
    }, [name,language])

    const navigate = useNavigate()

    function navToCat(n){
        navigate(`/category/${n}`)
    }


    return (
        <section id='category'>
            <div className="container">
                <div className='category'>
                    <div className="category--taps">
                        <h2>Categories</h2>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Fiction': language === 'ru' ? 'Вымысел' : 'калп')}>{language === 'en'? 'Fiction': language === 'ru' ? 'Вымысел' : 'калп'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Children`s book': language === 'ru' ? 'Детская книга' : 'Балдар китеби')}>{language === 'en'? 'Children`s book': language === 'ru' ? 'Детская книга' : 'Балдар китеби'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Books for teenagers': language === 'ru' ? 'Книги для подростков' : 'Өспүрүмдөр үчүн китептер')}>{language === 'en'? 'Books for teenagers': language === 'ru' ? 'Книги для подростков' : 'Өспүрүмдөр үчүн китептер'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'SSelf-development': language === 'ru' ? 'Саморазвитие' : 'Өзүн-өзү өнүктүрүү')}>{language === 'en'? 'Self-education and development': language === 'ru' ? 'Самообразование и развитие' : 'Өзүн-өзү тарбиялоо жана өнүктүрүү'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Business literature': language === 'ru' ? 'Деловая литература' : 'Бизнес адабияты')}>{language === 'en'? 'Business literature': language === 'ru' ? 'Деловая литература' : 'Бизнес адабияты'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Hobbies': language === 'ru' ? 'Хобби и досуг' : 'Хобби жана эс алуу')}>{language === 'en'? 'Hobbies and leisure': language === 'ru' ? 'Хобби и досуг' : 'Хобби жана эс алуу'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Pedagogy and education': language === 'ru' ? 'Педагогика и образование' : 'Педагогика жана билим берүү')}>{language === 'en'? 'Pedagogy and education': language === 'ru' ? 'Педагогика и образование' : 'Педагогика жана билим берүү'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Popular science literature': language === 'ru' ? 'Научно-популярная литература' : 'Илимий-популярдуу адабият')}>{language === 'en'? 'Popular science literature': language === 'ru' ? 'Научно-популярная литература' : 'Илимий-популярдуу адабият'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Publicism': language === 'ru' ? 'Публицистика' : 'Публицистика')}>{language === 'en'? 'Publicism': language === 'ru' ? 'Публицистика' : 'Публицистика'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Religion': language === 'ru' ? 'Религия' : 'Дин жөнүндө')}>{language === 'en'? 'Religion': language === 'ru' ? 'Религия' : 'Дин жөнүндө'}</h3>
                        <h3 onClick={()=> navToCat(language === 'en'? 'Exclusive Products': language === 'ru' ? 'Эксклюзивные продукты' : 'Exclusive Products')}>{language === 'en'? 'Exclusive Products': language === 'ru' ? 'Эксклюзивные продукты' : 'Exclusive Products'}</h3>
                    </div>
                    <div className='category--group'>
                        {
                            book.map(el => (
                                <div key={el.id}>
                                    <BooksCard el={el}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;