"use client"
import { project_categoryInit, project_categoryInitialState, project_categoryReducer } from '@/reducer/ProjectCategoryReducer'
import React, { createContext, useContext, useReducer } from 'react'


export const ProjectCategoryContext = createContext()

export default function ProjectCategoryContextProvider({ children }) {
    const [project_categoryState, project_categoryDispatch] = useReducer(project_categoryReducer, project_categoryInitialState, project_categoryInit)

    return (
        <ProjectCategoryContext.Provider value={{ 
            project_categoryState, 
            project_categoryDispatch,
        }}>
        { children }
        </ProjectCategoryContext.Provider>
      )
}


export const ProjectCategoryContextState = () => {
    return useContext(ProjectCategoryContext)
}