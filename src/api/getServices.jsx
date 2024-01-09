import { baseURL } from "./baseURL"


export default async function getServices() {
    const response = await fetch(`${baseURL}service`)
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}

export async function getService(id) {
    const response = await fetch(`${baseURL}service/${id}`)
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}


