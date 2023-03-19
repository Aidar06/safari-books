import React, {useContext} from 'react';
import img from "../../assets/img/Rectangle 7.png";
import room from "../../assets/img/room.png";
import {Language} from "../../components/Context";

const About = () => {
    const {language} = useContext(Language)
    return (
        <div>
            <div id="about">
                <img className="img" src={img} alt=""/>
                <div className="container">
                    <div className="about">
                        <div className="about--two">
                            <h1 className="about--two__tittle">{language === 'en'? 'About us': language === 'ru' ? 'О нас' : 'Биз жөнүндө'}</h1>
                            <p className="about--two__paragraph">
                                {language === 'en'? 'Reading is not a pure “receptive” process. To read a book is not\n' +
                                    'just to remember the plot. Reading is also a productive,\n' +
                                    'productive process, since during reading we pronounce the\n' +
                                    'words we read and comprehend what we read. The frontal lobes\n' +
                                    'of the left hemisphere of the brain are responsible for\n' +
                                    'comprehension. People with frontal lobe injuries cannot,\n' +
                                    'for example, create semantic guesses, think through what they\n' +
                                    'have read and build a reading strategy. together, this leads\n' +
                                    'to a misunderstanding of what is being read.': language === 'ru' ? 'Чтение — это не чистый «восприимчивый» процесс. Читать книгу не\n' +
                                    'просто чтобы вспомнить сюжет. Чтение также является продуктивным,\n' +
                                    'продуктивный процесс, так как при чтении мы произносим\n' +
                                    'слова, которые мы читаем, и понимаем то, что читаем. Лобные доли\n' +
                                    'левое полушарие головного мозга отвечает за\n' +
                                    'понимание. Люди с травмами лобной доли не могут,\n' +
                                    'например, создавать смысловые догадки, продумывать, что они\n' +
                                    'прочитали и построили стратегию чтения. вместе это приводит\n' +
                                    'к непониманию прочитанного.' : 'Окуу бул таза “кабыл алуу” процесси эмес. Китеп окуу эмес\n' +
                                    'жөн гана сюжетти эстеп калуу үчүн. Окуу да жемиштүү,\n' +
                                    'жемиштүү процесс, анткени окуу учурунда биз айтабыз\n' +
                                    'биз окуган жана окуганыбызды түшүнгөн сөздөр. Маңдай бөлүктөрү\n' +
                                    'мээнин сол жарым шары жооптуу\n' +
                                    'түшүнүү. Маңдай бөлүгү жаракат алган адамдар,\n' +
                                    'мисалы, семантикалык божомолдорду түзүү, алар эмне аркылуу ойлонуп көр\n' +
                                    'окуп, окуу стратегиясын түзүштү. бирге, бул алып барат\n' +
                                    'окулуп жаткан нерсени туура эмес түшүнүүгө.'}
                            </p>
                        </div>
                        <img className="about--img2" src={room} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;