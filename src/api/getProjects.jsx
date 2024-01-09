import { baseURL } from "./baseURL"


export default async function getProjects() {
    const response = await fetch(`${baseURL}project`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}
export async function getProjectsLatest() {
    const response = await fetch(`${baseURL}project/latest`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}

export async function getProject(id) {
    const response = await fetch(`${baseURL}project/${id}`, { cache: 'no-store'})
 
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}


