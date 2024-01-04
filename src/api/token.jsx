"use client"
export const setToken = (token) => {
    localStorage.setItem('EVOLVE_DESIGNS_TOKEN', token);
  }
  
export const getToken = () => {
    const token = localStorage.getItem('EVOLVE_DESIGNS_TOKEN');
    return token;
  }

export const removeToken = () => {
    localStorage.removeItem('EVOLVE_DESIGNS_TOKEN');
  }