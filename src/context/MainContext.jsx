"use client"
import React, { createContext, useContext, useState } from 'react'


export const MainContext = createContext()

export default function MainContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true)
    

    return (
        <MainContext.Provider value={{ 
            isLoading, setIsLoading
        }}>
            { children }
        </MainContext.Provider>
      )
}


export const MainContextState = () => {
    return useContext(MainContext)
}