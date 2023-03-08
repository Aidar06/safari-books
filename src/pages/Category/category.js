import React, {useEffect, useState} from 'react';
import axios from "axios";
import BooksCard from "../../components/BooksCard/booksCard";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";


const Category = () => {

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
    }, [name])

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
                        <h3 onClick={()=> navToCat('Fiction')}>Fiction</h3>
                        <h3 onClick={()=> navToCat('Children`s book')}>Children`s book</h3>
                        <h3 onClick={()=> navToCat('Books for teenagers')}>Books for teenagers</h3>
                        <h3 onClick={()=> navToCat('Self-development')}>Self-education and development</h3>
                        <h3 onClick={()=> navToCat('Business literature')}>Business literature</h3>
                        <h3 onClick={()=> navToCat('Hobbies')}>Hobbies and leisure</h3>
                        <h3 onClick={()=> navToCat('Pedagogy and education')}>Pedagogy and education</h3>
                        <h3 onClick={()=> navToCat('Popular science literature')}>Popular science literature</h3>
                        <h3 onClick={()=> navToCat('Publicism')}>Publicism</h3>
                        <h3 onClick={()=> navToCat('Religion')}>Religion</h3>
                        <h3 onClick={()=> navToCat('Exclusive Products')}>Exclusive Products</h3>
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