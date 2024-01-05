import { baseURL } from "./baseURL"


export default async function getPermissions() {
    const response = await fetch(`${baseURL}permission`)
 
    if(!response.ok) {
       throw new Error('failed to fetch get Permissions.')
    }

    return await response.json()

}


