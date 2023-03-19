import React, {useContext} from 'react';
import {TbTruckDelivery} from "react-icons/tb";
import book from "./../../../assets/img/homeInfoImg.png"
import {CgTimer} from "react-icons/cg";
import {SlMap} from "react-icons/sl";
import {Language} from "../../Context";

const HomeInfo = () => {
    const {language} = useContext(Language)
    return (
        <section id='homeInfo'>
            <div className='container'>
                <div className='homeInfo'>
                    <div className='homeInfo--block'>
                        <div className='homeInfo--block__title'>
                            <TbTruckDelivery className='homeInfo--block__title--icon'/>
                            <p>{language === 'en'? 'Delivery in Bishkek and all regions of Kyrgyzstan.': language === 'ru' ? 'Доставка по Бишкеку и всем регионам Кыргызстана.' : 'Бишкек жана Кыргызстандын бардык аймактарга жеткирүү.'}</p>
                        </div>
                        <div className='homeInfo--block__title'>
                            <CgTimer className='homeInfo--block__title--icon'/>
                            <p>{language === 'en'? 'We will deliver the books to you at a time and place convenient for you.': language === 'ru' ? 'Мы доставим вам книги в удобное для вас время и место.' : 'Биз китептерди сизге ыңгайлуу убакта жана жерде жеткирип беребиз.'}</p>
                        </div>
                        <div className='homeInfo--block__title'>
                            <SlMap className='homeInfo--block__title--icon'/>
                            <p>{language === 'en'? 'Delivery in Bishkek and all regions of Kyrgyzstan.': language === 'ru' ? 'Удобное расположение магазина,вы можете читать наши книги и работать.' : 'Дүкөндүн ыңгайлуу жайгашуусу, биздин китептерди окуп, иштей аласыз.'}</p>
                        </div>
                    </div>
                    <div className='homeInfo--img'>
                        <img width='90%' src={book} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;