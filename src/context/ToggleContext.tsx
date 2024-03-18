import React, { useState } from "react";
import { createContext } from "react";

interface Props {
    children: React.ReactNode;
  }
interface ToggleContextValue {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }
const ToggleContext = createContext<ToggleContextValue | any>(undefined);

const ToggleProvider: React.FC<Props> = ({ children }) => {
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