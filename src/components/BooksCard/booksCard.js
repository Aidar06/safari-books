import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {RiShoppingBag2Line} from "react-icons/ri";
import Slider from "react-slick";


const BooksCard = ({el}) => {

    const [author,setAuthor] = useState(el.volumeInfo.authors || true)

    return (
          <div className='card'>
              <div className='card--block'>
                  <div className='card--block__img'>
                      <NavLink className='card--block__img--image' to={''}><img src={el.volumeInfo.imageLinks.thumbnail} alt="not image"/></NavLink>
                  </div>
                  <h1>{el.volumeInfo.title.length > 14 ? el.volumeInfo.title.slice(0,14) + '...': el.volumeInfo.title}</h1>
                  <h2>{author ? 'no author' :author[0].length > 10 ? author[0].slice(0,10) + '...' : author[0]}</h2>
                  <h4>{el.saleInfo.isEbook ? Math.ceil(el.saleInfo.listPrice.amount * 80 === 0 ? 260 : el.saleInfo.listPrice.amount * 80) : 550} сом</h4>
              </div>
              <div className='card--btn'>
                  <p>Add to basket</p>
                  <div></div>
                  <RiShoppingBag2Line/>
              </div>
          </div>
    );
};

export default BooksCard;