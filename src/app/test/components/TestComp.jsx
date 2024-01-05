"use client"

import AxiosClient from '@/api/axiosClient'
import { getToken } from '@/api/token'
import { useEffect, useState } from 'react'


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function TestComp({appInfo, permissions}) {
    const appInfoData = JSON.parse(appInfo.value)
    const permissionsData = JSON.parse(permissions.value)
    const [app, setApp] = useState(appInfoData)
    const [perm, setPerm] = useState(permissionsData)
    const [data, setData] = useState([])

    /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`category/`, config)
        .then((response) => {
          setData(() => response.data.data)
          //console.log(response.data.data)   
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 

  useEffect(() => { 
      getData();
  }, []);
 


    console.log('data')
    console.log(data)

  return (
    <div>
      TESTCOMP
      {app.data.name} <br />
      PERM <br />
      {perm.data.map(item => item.id + ', ')} <br />
      CATEGORY <br />
      {data.map(item => item.id + ', ')} <br />
      -----
      
        
    </div>
  )
}
