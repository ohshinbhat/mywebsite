import { useState } from "react";
import React from "react";
import { useContext } from "react";

export const NavContext = React.createContext();

export function useNav(){
    return useContext(NavContext);
}

export const NavContextProvider = ({children}) => {
    const [navTab, setNavTab] = useState('about');

    const value = {navTab, setNavTab};
    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    )

}