import React, { useState } from "react";
import { createContext } from "react";
import { ToggleContextValue, ToggleProps } from "../utils/types";

const ToggleContext = createContext<ToggleContextValue | any>(undefined);

const ToggleProvider: React.FC<ToggleProps> = ({ children }) => {
    const [toggle,setToggle]= useState(false);
    const contextValue: ToggleContextValue = {
        toggle,
        setToggle,
      };

    return(
        <ToggleContext.Provider value={contextValue}>
            {children}
        </ToggleContext.Provider>
    )
    
}

export {ToggleProvider,ToggleContext}