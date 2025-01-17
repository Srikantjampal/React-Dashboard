import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor,setCurrentColor] = useState('#03C9D7');
    const [currentMode,setCurrentMode] = useState('Light');
    const [Themesettings, setThemesettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode',e.target.value);
        setThemesettings(false);
    }
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode ',color);
        setThemesettings(false);
    }

    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }

    return(
        <StateContext.Provider 
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                Themesettings, setThemesettings,
                setColor,setMode
            }}
            >
            {children}
        </StateContext.Provider>
    ) 

}

export const useStateContext = () => useContext(StateContext);