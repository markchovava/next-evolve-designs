"use client"
import { serviceInit, serviceInitialState, serviceReducer } from '@/reducer/ServiceReducer'
import React, { createContext, useContext, useState, useReducer } from 'react'


export const ServiceContext = createContext()

export default function ServiceContextProvider({ children }) {
    const [serviceState, serviceDispatch] = useReducer(serviceReducer, serviceInitialState, serviceInit)

    return (
        <ServiceContext.Provider value={{ 
            serviceState, 
            serviceDispatch,
        }}>
        { children }
        </ServiceContext.Provider>
      )
}


export const ServiceContextState = () => {
    return useContext(ServiceContext)
  }
 
