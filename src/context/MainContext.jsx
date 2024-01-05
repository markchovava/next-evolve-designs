"use client"
import React, { createContext, useContext, useState } from 'react'


export const MainContext = createContext()

export default function MainContextProvider({ children }) {
    const [appInfo, setAppInfo] = useState({})
    

    return (
        <MainContext.Provider value={{ 
            appInfo, 
            setAppInfo
        }}>
            { children }
        </MainContext.Provider>
      )
}


export const MainContextState = () => {
    return useContext(MainContext)
}