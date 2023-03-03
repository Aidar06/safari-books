import React from 'react';
import img from "../../assets/img/Rectangle 7.png"
import room from "../../assets/img/room.png"
const Contacts = () => {
    return (
        <div>
            <div id="about">
                <img className="img" src={img} alt=""/>
                <div className="about">
                    <div className="about--two">
                        <h1 className="about--two__tittle">About us</h1>
                        <p className="about--two__paragraph"> Reading is not a pure “receptive” process. To read a book is not <br/>
                            just to remember the plot. Reading is also a productive, <br/>
                            productive process, since during reading we pronounce the <br/>
                            words we read and comprehend what we read. The frontal lobes <br/>
                            of the left hemisphere of the brain are responsible for <br/>
                            comprehension. People with frontal lobe injuries cannot, <br/>
                            for example, create semantic guesses, think through what they <br/>
                            have read and build a reading strategy. together, this leads <br/>
                            to a misunderstanding of what is being read.</p>
                    </div>
                    <img className="about--img2" src={room} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;