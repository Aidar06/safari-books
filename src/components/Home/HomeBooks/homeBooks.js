import React, {useEffect, useState, useRef, useContext} from 'react';
import axios from "axios";
import BooksCard from "../../BooksCard/booksCard";
import book from './../../../assets/img/homeBooksImg.png'
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode, Pagination} from "swiper";
import {Language} from "../../Context";

const HomeBooks = () => {
    const {language} = useContext(Language)
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [books,serBooks] = useState([])

    const gitBooks= async()=> {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${language === 'en'? 'books' : language === 'ru'? 'книги' : 'китептер'}&orderBy=newest&key=AIzaSyA5AsCAhvbZRq505icc2n-XSma-7IQNwA0`)
            const {data} = await res
            await serBooks(data.items)
        }catch (e){
            console.log(e,'error')
        }
    }

    const [tap,setTap] = useState('new')

    const [tapsBook,setTapsBook] = useState([])

    const getTapsBook= async()=> {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${tap}&orderBy=newest&key=AIzaSyA5AsCAhvbZRq505icc2n-XSma-7IQNwA0`)
            const {data} = await res
            await setTapsBook(data.items)
        }catch (e){
            console.log(e,'error')
        }
    }

    useEffect(()=> {
        gitBooks()
        getTapsBook()
    }, [tap,language])

    return (
        <section id='homeBooks'>
            <div className="container">
                <div className="homeBooks">
                    <div className="homeBooks--taps">
                        <div className="homeBooks--taps__links">
                            <div onClick={()=> setTap(language === 'en'? 'new': language === 'ru' ? 'новый' : 'жаңы')} className="homeBooks--taps__links--block">
                                <h3 style={{color: tap === 'new' || 'новый' || 'жаңы'? 'orange': ''}}>{language === 'en'? 'New': language === 'ru' ? 'новый' : 'жаңы'}</h3>
                                <div style={{background: tap === 'new' || 'новый' || 'жаңы'? 'orange': ''}}></div>
                            </div>
                            <div onClick={()=> setTap(language === 'en'? 'Popular': language === 'ru' ? 'Популярный' : 'танымал')} className="homeBooks--taps__links--block">
                                <h3 style={{color: tap === 'popular' || 'Популярный' || 'танымал'? 'orange': ''}}>{language === 'en'? 'Popular': language === 'ru' ? 'Популярный' : 'танымал'}</h3>
                                <div style={{background: tap === 'popular' || 'Популярный' || 'танымал'? 'orange': ''}}></div>
                            </div>
                            <div onClick={()=> setTap(language === 'en'? 'Bestsellers': language === 'ru' ? 'Бестселлеры' : 'жакшы')} className="homeBooks--taps__links--block">
                                <h3 style={{color: tap === 'bestsellers' || 'Бестселлеры' || 'жакшы'? 'orange': ''}}>{language === 'en'? 'Bestsellers': language === 'ru' ? 'Бестселлеры' : 'сатылуучулар'}</h3>
                                <div style={{background: tap === 'bestsellers' || 'Бестселлеры' || 'жакшы'? 'orange': ''}}></div>
                            </div>
                        </div>
                            <Slider {...settings}>
                                <img src={book} alt=""/>
                                {
                                    tapsBook.slice(0,3).map(el=> (
                                        <div key={el.id}>
                                            <div className="slider-block" >
                                                <div className='container'>
                                                    <NavLink to={''}><img src={el.volumeInfo.imageLinks.thumbnail} alt=""/></NavLink>
                                                    <h1>{el.volumeInfo.title.length > 15 ? el.volumeInfo.title.slice(0,15) + '...': el.volumeInfo.title}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={185}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            440: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 80,
                            },
                            1324: {
                                slidesPerView: 5,
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
        </section>
    );
};

export default HomeBooks;