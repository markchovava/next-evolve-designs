"use client"

export const tokenRole = () => {
    const setRole = (token) => {
        if(typeof window !== 'undefined'){
            window.localStorage.setItem('EVOLVE_DESIGN_ROLE_TOKEN', token);
        }
    }
    const getRole = () => {
        if(typeof window !== 'undefined'){
            const token =  window.localStorage.getItem('EVOLVE_DESIGN_ROLE_TOKEN');
            return token;
        }
    }
    const removeRole = () => {
        if(typeof window !== 'undefined'){
            window.localStorage.removeItem('EVOLVE_DESIGN_ROLE_TOKEN');
        }
    }
    return {
        setRole, 
        getRole,
        removeRole
    }

  }