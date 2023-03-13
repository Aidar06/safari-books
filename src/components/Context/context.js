import React, {useState} from 'react';
import {Language} from "./index";

const Context = ({children}) => {
    const [language,setLanguage] = useState('en')
    return (
        <Language.Provider value={{language,setLanguage}}>
            {children}
        </Language.Provider>
    );
};

export default Context;