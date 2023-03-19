import React, {useContext} from 'react';
import {IoCallOutline} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {GrInstagram} from "react-icons/gr";
import {SiGooglemaps} from "react-icons/si";
import {Language} from "../../components/Context";
const Contacts = () => {
    const {language} = useContext(Language)
    return (
        <section id='contact'>
            <div className='container'>
                <div className='contact'>
                    <div className='contact--block'>
                        <IoCallOutline className='contact--block__icon1'/>
                        <h4>{language === 'en'? 'Phone number:': language === 'ru' ? 'Номер телефона:' : 'Тел номери:'}</h4>
                        <p>(+996)557-30-02-30</p>
                        <p>(+996)220-42-42-08</p>
                    </div>
                    <div className='contact--block'>
                        <HiOutlineMail className='contact--block__icon1'/>
                        <h4>{language === 'en'? 'Email address:': language === 'ru' ? 'электронной почта:' : 'Электрондук почта:'}</h4>
                        <a href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y=">motion@mail.com</a>
                    </div>
                    <div className='contact--block'>
                        <GrInstagram className='contact--block__icon1'/>
                        <h4>Instagram:</h4>
                        <a href="">@bookshop</a>
                    </div>
                    <div className='contact--block'>
                        <SiGooglemaps className='contact--block__icon1'/>
                        <h4>{language === 'en'? 'Address:': language === 'ru' ? 'Адрес:' : 'Адрес:'}</h4>
                        <p>Bishkek, Kievskaya st., 152/5</p>
                    </div>
                </div>
                <div className='map'>
                    <iframe className='map--block'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2525145016607!2d74.5819435151655!3d42.867514110896266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec825790b32f5%3A0x7545c2a8e37ec365!2zMTA5LzMg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAwMQ!5e0!3m2!1sru!2skg!4v1677674527804!5m2!1sru!2skg"
                            height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacts;