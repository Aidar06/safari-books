import React, {useState} from 'react';
import InfoBook from "./InfoBook/infoBook";
import InfoMore from "./InfoMore/infoMore";
import InfoReview from "./InfoReview/infoReview";
import InfoOther from "./InfoOther/infoOther";

const Info = () => {
    const [auth,setAuth] = useState('')
    return (
        <>
            <InfoBook setAuth={setAuth}/>
            <InfoMore/>
            <InfoReview/>
            <InfoOther setAuth={setAuth} auth={auth}/>
        </>
    );
};

export default Info;