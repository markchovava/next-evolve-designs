"use client"

export const tokenAuth = () => {

    const setAuthToken = (token) => {
        if(typeof window !== 'undefined'){
            window.localStorage.setItem('EVOLVE_DESIGN_AUTH_TOKEN', token);
        }
    }

    const getAuthToken = () => {
        if(typeof window !== 'undefined'){
            const token =  window.localStorage.getItem('EVOLVE_DESIGN_AUTH_TOKEN');
            return token;
        }
    }

    const removeAuthToken = () => {
        if(typeof window !== 'undefined'){
            window.localStorage.removeItem('EVOLVE_DESIGN_AUTH_TOKEN');
        }
    }

    return {
        setAuthToken, 
        getAuthToken,
        removeAuthToken
    }

  }