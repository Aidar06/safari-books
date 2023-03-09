import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {RiShoppingBag2Line} from "react-icons/ri";
import Slider from "react-slick";


const BooksCard = ({el}) => {

    let obgAuthor = true
    function checkObgAuthor(){
        if (el.volumeInfo.hasOwnProperty('authors')) {
            obgAuthor = true
        } else {
            obgAuthor = false
        }
    }
    checkObgAuthor()

    const [author,setAuthor] = useState(obgAuthor? el.volumeInfo.authors: 'no author')

    let obgImg = true
    function checkObg(){
        if (el.volumeInfo.hasOwnProperty('imageLinks')) {
            obgImg = true
        } else {
            obgImg = false
        }
    }
    checkObg()

    return (
          <div className='card'>
              <div className='card--block'>
                  <div className='card--block__img'>
                      <NavLink className='card--block__img--image' to={''}><img src={obgImg? el.volumeInfo.imageLinks.thumbnail : 'https://as1.ftcdn.net/v2/jpg/02/89/32/76/1000_F_289327646_ByOnWHB7CkxAL7G7lOaqeeY3RrLPazZb.jpg'} alt="not image"/></NavLink>
                  </div>
                  <h1>{el.volumeInfo.title.length > 14 ? el.volumeInfo.title.slice(0,14) + '...': el.volumeInfo.title}</h1>
                  <h2>{author[0].length > 10 ? author[0].slice(0,10) + '...' : author[0]}</h2>
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