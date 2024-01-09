import { baseURL } from "./baseURL"


export default async function getUsers() {
    const response = await fetch(`${baseURL}user`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}

export async function getUser(id) {
    const response = await fetch(`${baseURL}user/${id}`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}
