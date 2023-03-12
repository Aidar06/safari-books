import React, {useEffect, useState} from 'react';
import axios from "axios";
import BooksCard from "../../../components/BooksCard/booksCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const InfoOther = ({auth}) => {
    const [books,serBooks] = useState([])
    console.log(auth)
    const [img,setImg] = useState('')
    const gitBooks= async()=> {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${auth[0]}&orderBy=newest&key=AIzaSyA5AsCAhvbZRq505icc2n-XSma-7IQNwA0`)
            const {data} = await res
            await serBooks(data.items)
            await setImg(data.items[9].volumeInfo.imageLinks.thumbnail)
            console.log(data.items[9])
        }catch (e){
            console.log(e,'error')
        }
    }

    useEffect(()=> {
        gitBooks()
    }, [auth])
    return (
        <section id='infoOther'>
            <div className="container">
                <div className="infoOther">
                    <h1 className='infoOther--title'>Other books by the author</h1>
                    <div className='infoOther--group'>
                        <div className='infoOther--group__img'>
                            <img src={img} alt=""/>
                        </div>
                        <div className='infoOther--group__block'>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    440: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 70,
                                    },
                                    755: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    860: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 80,
                                    },
                                    1324: {
                                        slidesPerView: 3,
                                        spaceBetween: 60,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    books.map(el=> (
                                        <SwiperSlide key={el.id}>
                                            <div>
                                                <BooksCard el={el}/>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoOther;