"use client"
export const setToken = (token) => {
    localStorage.setItem('EVOLVE_DESIGN_AUTH_TOKEN', token);
  }
  
export const getToken = () => {
    const token = localStorage.getItem('EVOLVE_DESIGN_AUTH_TOKEN');
    return token;
  }

export const removeToken = () => {
    localStorage.removeItem('EVOLVE_DESIGN_AUTH_TOKEN');
  }