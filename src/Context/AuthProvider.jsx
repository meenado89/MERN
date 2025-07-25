import { createContext } from "react";

export const contextProvider=createContext()

export const AuthProvider=(props)=>{
    const a=[1,2,3,4,5];
    return(
         <contextProvider.Provider value={{a}}>
            {props.children}
         </contextProvider.Provider>
    )
}


