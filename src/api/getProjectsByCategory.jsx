import { baseURL } from "./baseURL"

export async function getProjectsByCategory(id) {
    const response = await fetch(`${baseURL}category/${id}`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}