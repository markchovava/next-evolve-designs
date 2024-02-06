"use client"

export const tokenRole = () => {

    const setRole = (token) => {
        localStorage.setItem('EVOLVE_DESIGN_ROLE_TOKEN', token);
    }

    const getRole = () => {
        const token =  localStorage.getItem('EVOLVE_DESIGN_ROLE_TOKEN');
        return token;
    }

    const removeRole = () => {
        localStorage.removeItem('EVOLVE_DESIGN_ROLE_TOKEN');
    }

    return {
        setRole, 
        getRole,
        removeRole
    }

  }