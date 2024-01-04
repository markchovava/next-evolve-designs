"use client"

export const serviceInit = (serviceInitialState) => {
    const result = {
        //...serviceInitialState, 
        service_images: [
            {priority: 1},
            {priority: 2},
            {priority: 3},
            {priority: 4},
            {priority: 5},
        ]
    }
    return result
}

export const serviceInitialState = {
    service_images: [],
};

export const serviceReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PROJECT_IMAGE':
            return {
                ...state,
                service_images: [...state.service_images, action.payload]

            }  
        case 'ADD_IMAGE':
            return {
                ...state,
                service_images: state.service_images.filter((item) => {
                    if(item.priority === action.payload.priority) {
                        item.image = action.payload.image;
                        return item
                    }else{
                        return item
                    }
                })
            }    
        case 'REMOVE_PROJECT_IMAGE':
            return {
                ...state,
                service_images: state.service_images.filter((item) => item.id !== action.payload.id),
            };
        case 'EMPTY_PROJECT_IMAGES':
                return {
                  ...state,
                  service_images: [],
                };
        default:
           return state;
   }
}
