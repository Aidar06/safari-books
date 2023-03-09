import React, {useEffect, useState} from 'react';
import axios from "axios";
import BooksCard from "../../components/BooksCard/booksCard";
import {useParams} from "react-router";

const Search = () => {
    const {book} = useParams()

    const [books, serBooks] = useState([])

    const gitBooks = async () => {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=newest&key=AIzaSyA5AsCAhvbZRq505icc2n-XSma-7IQNwA0`)
            const {data} = await res
            await serBooks(data.items)
        } catch (e) {
            console.log(e, 'error')
        }
    }

    useEffect(() => {
        gitBooks()
    }, [book])

    return (
        <section id='search'>
           <div className="container">
               <div className="search">
                   {
                       `${books}` !== 'undefined' ?
                           books.map(el => (
                               <div key={el.id}>
                                   <BooksCard el={el}/>
                               </div>
                           ))
                           :
                           <h1 className='search--text'>Nothing found for your request</h1>
                   }
               </div>
           </div>
        </section>
    );
};

export default Search;