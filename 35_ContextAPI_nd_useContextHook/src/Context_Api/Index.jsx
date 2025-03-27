import { createContext } from "react";

//1 step
export const BioContext=  createContext();

//2nd step
export const BioProvider= ({children})=>{
    const myName="Mayank"
    const myAge=24
    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
}