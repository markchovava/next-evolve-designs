"use server"
import { cookies } from 'next/headers'

export async function setCookieToken(token){
    const duration = 7 * 24 * 60 * 60 * 1000
    cookies().set({name: 'EVOLVE_DESIGNS_COOKIE_TOKEN', value: token})
}


export async function getCookieToken(){
    const token = cookies().get('EVOLVE_DESIGNS_COOKIE_TOKEN')
    return token
}


export async function removeCookieToken(){
    cookies().delete('EVOLVE_DESIGNS_COOKIE_TOKEN')
}