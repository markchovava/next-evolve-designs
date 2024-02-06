"use client"

export const tokenAuth = () => {

    const setAuthToken = (token) => {
        localStorage.setItem('EVOLVE_DESIGN_AUTH_TOKEN', token);
    }

    const getAuthToken = () => {
        const token =  localStorage.getItem('EVOLVE_DESIGN_AUTH_TOKEN');
        return token;
    }

    const removeAuthToken = () => {
        localStorage.removeItem('EVOLVE_DESIGN_AUTH_TOKEN');
    }

    return {
        setAuthToken, 
        getAuthToken,
        removeAuthToken
    }

  }