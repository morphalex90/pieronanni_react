import { createContext, useState } from 'react';
import Popup from '../Layouts/Popup';
export const GlobalContext = createContext('');

const GlobalContextProvider = (props) => {

    const [popup, setPopup] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ popup, setPopup, isLoading, setIsLoading }}>
            {props.children}
            <Popup />
            {isLoading === true && <div className="loading"></div>}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;