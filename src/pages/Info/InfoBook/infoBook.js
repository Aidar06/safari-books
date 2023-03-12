import React, {useEffect, useState} from 'react';
import {AiFillStar} from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai";
import OneHundred from "../../../assets/img/ONE HUNDRED YEARS OF SOLITUDE.png"
import {useParams} from "react-router";
import axios from "axios";
import Split from 'react-split'
const InfoBook = ({setAuth}) => {


    const {id} = useParams()

    const [info,setInfo] = useState({})
    const [bookImg,setBookImg] = useState('')
    const [prise,setPrise] = useState('')
    const [des,setDes] = useState('')
    const [prCod,setPrCod] = useState('')

    const getInfo = async()=> {
        try {
            const res = await axios(`https://www.googleapis.com/books/v1/volumes/${id}`)
            const {data} = await res
            console.log(data)
            await setInfo(data.volumeInfo)
            await setPrCod(data.id)
            await setDes(data.volumeInfo.description)
            await setBookImg(data.volumeInfo.imageLinks.thumbnail)
            await setPrise(data.saleInfo.isEbook ? Math.ceil(data.saleInfo.listPrice.amount * 80 === 0 ? 260 : data.saleInfo.listPrice.amount * 80) : 550)
        }catch (e){
            console.log(e,'error')
        }
    }

    useEffect(()=> {
        getInfo()
    }, [])


    let {title, authors, pageCount,averageRating,publishedDate,categories,language} = info

    function sentAuth(){
        setAuth(authors)
    }
    sentAuth()

    function addBasket(){
        let booksArr = JSON.parse(localStorage.getItem('books')) || []

        let newBook = {
            id: id,
            title: title,
            author: authors,
            img: bookImg,
            price: prise
        }

        let newBookArr = localStorage.setItem('books', JSON.stringify([...booksArr, newBook]))
    }

    const [check,setCheck] = useState(false)
    let check1 = false
    function checkBasket(){
        let booksArr = JSON.parse(localStorage.getItem('books')) || []

        booksArr.map(e => {
            if (e.id === id){
                check1 = true
            }
        })
    }

    checkBasket()

    return (
        <div>
            <div id="infoBook">
                <div className="container">
                    <div className="infoBook">
                        <div className="infoBook--about">
                            <img className="infoBook--about__img" src={bookImg} alt=""/>
                            <div className="infoBook--about__book">
                                <h1 className="infoBook--about__book--tittle">{title}</h1>
                                <p className="infoBook--about__book--author">{authors}</p>
                                <div className="infoBook--about__book--string">
                                    <div className="infoBook--about__book--string__rating">
                                        <h1 className="infoBook--about__book--string__rating--number">{averageRating}</h1>
                                        <AiFillStar style={{color: Math.floor(averageRating) >= 1? 'yellow' : ''}} className="infoBook--about__book--string__rating--star1"/>
                                        <AiFillStar style={{color: Math.floor(averageRating) >= 2? 'yellow' : ''}} className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar style={{color: Math.floor(averageRating) >= 3? 'yellow' : ''}} className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar style={{color: Math.floor(averageRating) >= 4? 'yellow' : ''}} className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar style={{color: Math.floor(averageRating) >= 5? 'yellow' : ''}} className="infoBook--about__book--string__rating--grey"/>
                                    </div>
                                    <div className="infoBook--about__book--string__inStock">
                                        <AiOutlineCheckCircle className="infoBook--about__book--string__inStock--checkIcon"/>
                                        <p className="infoBook--about__book--string__inStock--tittle">In stock</p>
                                    </div>
                                </div>
                                <h3 className="infoBook--about__book--info">Price: <span>{prise}c</span></h3>
                                <h3 className="infoBook--about__book--info">Pages: <span>{pageCount}</span></h3>
                                <h3 className="infoBook--about__book--info">Age limit: <span>12+</span></h3>
                                <h3 className="infoBook--about__book--info">Product code: <span>{prCod}</span></h3>
                                <div>
                                    {
                                        check1 || check ?
                                            <button style={{background: "black", color: "white"}} className="infoBook--about__book--button">Added</button>
                                            :
                                        <button onClick={()=> {addBasket(); setCheck(true)}} className="infoBook--about__book--button">Add to basket</button>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="infoBook--details">

                            <div className="infoBook--details__tittle">
                                <p className="infoBook--details__tittle--paragraph">
                                    {des.toString().split('<i>').join('').split('</i>').join('').split('<b>').join('').split('<br>').join('').split('</b>').join('').split('<p>').join('').split('</p>').join('')}
                                </p>
                            </div>

                            <div className="infoBook--details__format">
                                <div className="infoBook--details__format--line1">
                                    <p className="infoBook--details__format--line1__paragraph">Author(s):</p>
                                    <p className="infoBook--details__format--line1__paragraph">{authors}</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Date of writing:</p>
                                    <p className="infoBook--details__format--line__paragraph">{publishedDate}</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Part:</p>
                                    <p className="infoBook--details__format--line__paragraph">Part 1</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Pages paper book:</p>
                                    <p className="infoBook--details__format--line__paragraph">{pageCount}</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Achievements and awards:</p>
                                    <p className="infoBook--details__format--line__paragraph">Bestseller,Hit of sales</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Categories:</p>
                                    <p className="infoBook--details__format--line__paragraph">{categories}</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Languages:</p>
                                    <p className="infoBook--details__format--line__paragraph">{language}</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Format:</p>
                                    <p className="infoBook--details__format--line__paragraph">Paper book</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBook;