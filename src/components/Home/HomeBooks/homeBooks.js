import React, {useEffect, useState} from 'react';
import axios from "axios";

const HomeBooks = () => {

    const [books,serBooks] = useState({})

    const gitBooks= async()=> {
        try {
            const res = await axios('https://motionbookshop3.herokuapp.com/product/books/')
            const {data} = await res
            await serBooks(data)
        }catch (e){
            console.log(e,'error')
        }
    }

    useEffect(()=> {
        gitBooks()
    }, [])

    console.log(books)

    return (
        <div>

        </div>
    );
};

export default HomeBooks;