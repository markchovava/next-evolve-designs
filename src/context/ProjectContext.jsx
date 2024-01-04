"use client"
import { projectInit, projectInitialState, projectReducer } from '@/reducer/ProjectReducer'
import React, { createContext, useContext, useState, useReducer } from 'react'


export const ProjectContext = createContext()

export default function ProjectContextProvider({ children }) {
    const [projectState, projectDispatch] = useReducer(projectReducer, projectInitialState, projectInit)

    return (
        <ProjectContext.Provider value={{ 
            projectState, 
            projectDispatch,
        }}>
        { children }
        </ProjectContext.Provider>
      )
}


export const ProjectContextState = () => {
    return useContext(ProjectContext)
  }
 
