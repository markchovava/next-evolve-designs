"use client"

export const project_categoryInit = (project_categoryInitialState) => {
    const result = {
        project_category: []
    }
    return result
}


export const project_categoryInitialState = {
    project_category: [],
};


export const projectReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PROJECT_CATEGORY':
            return {
                ...state,
                project_category: [...state.project_category, action.payload]

            }     
        case 'REMOVE_PROJECT_CATEGORY':
            return {
                ...state,
                project_category: state.project_category.filter((item) => item.id !== action.payload.id),
            };
        case 'EMPTY_PROJECT_CATEGORY':
                return {
                  ...state,
                  project_category: [],
                };
        default:
           return state;
   }
}