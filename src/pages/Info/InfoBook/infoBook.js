import React from 'react';
import {AiFillStar} from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai";
import OneHundred from "../../../assets/img/ONE HUNDRED YEARS OF SOLITUDE.png"
const InfoBook = () => {
    return (
        <div>
            <div id="infoBook">
                <div className="container">
                    <div className="infoBook">
                        <div className="infoBook--about">
                            <img className="infoBook--about__img" src={OneHundred} alt=""/>
                            <div className="infoBook--about__book">
                                <h1 className="infoBook--about__book--tittle">ONE HUNDRED YEARS
                                    OF SOLITUDE</h1>
                                <p className="infoBook--about__book--author">By Gabriel Garcia Marquez</p>
                                <div className="infoBook--about__book--string">
                                    <div className="infoBook--about__book--string__rating">
                                        <h1 className="infoBook--about__book--string__rating--number">4,8</h1>
                                        <AiFillStar className="infoBook--about__book--string__rating--star1"/>
                                        <AiFillStar className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar className="infoBook--about__book--string__rating--star"/>
                                        <AiFillStar className="infoBook--about__book--string__rating--grey"/>
                                    </div>
                                    <div className="infoBook--about__book--string__inStock">
                                        <AiOutlineCheckCircle className="infoBook--about__book--string__inStock--checkIcon"/>
                                        <p className="infoBook--about__book--string__inStock--tittle">In stock</p>
                                    </div>
                                </div>
                                <h3 className="infoBook--about__book--info">Price: <span>400c</span></h3>
                                <h3 className="infoBook--about__book--info">Pages: <span>480</span></h3>
                                <h3 className="infoBook--about__book--info">Age limit: <span>12+</span></h3>
                                <h3 className="infoBook--about__book--info">Product code: <span>0988932145001</span></h3>
                                <button className="infoBook--about__book--button">Add to basket</button>
                            </div>
                        </div>

                        <div className="infoBook--details">

                            <div className="infoBook--details__tittle">
                                <p className="infoBook--details__tittle--paragraph">
                                    &nbsp; "One Hundred Years of Solitude" by Gabriel Garcia <br/>
                                    Marquez is a novel whose plot cannot be retold. This is a <br/>
                                    work that needs to be felt and experienced. Generation <br/>
                                    after generation of the Buendia family flashes before the <br/>
                                    eyes of the reader. Among them are revolutionaries and <br/>
                                    idlers, ardent mistresses and modest housewives. The <br/>
                                    Buendia family grows together with the small town of <br/>
                                    Macondo and dies with it. <br/>
                                    <br/>
                                    &nbsp; Marquez's book is filled with a variety of events: military <br/>
                                    actions, incest, the birth of children, magic and miracles. <br/>
                                    This dynamic kaleidoscope of life generates in the reader <br/>
                                    the opposite feeling of the smooth, inexorable flow of time <br/>
                                    and a sense of loneliness.
                                </p>
                                <button className="infoBook--details__tittle--btn">Read reviews</button>
                            </div>

                            <div className="infoBook--details__format">
                                <div className="infoBook--details__format--line1">
                                    <p className="infoBook--details__format--line1__paragraph">Author(s):</p>
                                    <p className="infoBook--details__format--line1__paragraph">Gabriel Garcia Marquez</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Date of writing:</p>
                                    <p className="infoBook--details__format--line__paragraph">16 june 1967</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Part:</p>
                                    <p className="infoBook--details__format--line__paragraph">Part 1</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Pages paper book:</p>
                                    <p className="infoBook--details__format--line__paragraph">480</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Achievements and awards:</p>
                                    <p className="infoBook--details__format--line__paragraph">Bestseller,Hit of sales</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Categories:</p>
                                    <p className="infoBook--details__format--line__paragraph">Novel</p>
                                </div>

                                <div className="infoBook--details__format--line">
                                    <p className="infoBook--details__format--line__paragraph">Languages:</p>
                                    <p className="infoBook--details__format--line__paragraph">Russian, English</p>
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