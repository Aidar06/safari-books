import React from 'react';
import {TbTruckDelivery} from "react-icons/tb";
import book from "./../../../assets/img/homeInfoImg.png"
import {CgTimer} from "react-icons/cg";
import {SlMap} from "react-icons/sl";

const HomeInfo = () => {
    return (
        <section id='homeInfo'>
            <div className='container'>
                <div className='homeInfo'>
                    <div className='homeInfo--block'>
                        <div className='homeInfo--block__title'>
                            <TbTruckDelivery className='homeInfo--block__title--icon'/>
                            <p>Delivery in Bishkek and all regions of Kyrgyzstan.</p>
                        </div>
                        <div className='homeInfo--block__title'>
                            <CgTimer className='homeInfo--block__title--icon'/>
                            <p>We will deliver the books to you at a time and place convenient for you.</p>
                        </div>
                        <div className='homeInfo--block__title'>
                            <SlMap className='homeInfo--block__title--icon'/>
                            <p>Convenient location of our store, where you can read our books and work.</p>
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