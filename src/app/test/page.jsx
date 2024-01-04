"use client"
import AxiosClient from '@/api/axiosClient'
import { baseURL } from '@/api/baseURL'
import { getToken } from '@/api/token'
import React, { useEffect, useState } from 'react'

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}


const page = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
    /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`project/${87}`, config)
        .then((response) => {
          setData(() => response.data.data)  
          setImages(() => response.data.data.project_images)  
        })

      } catch (error) {
        console.error(`Error: ${error}`)
      }   
   } 
    
  useEffect(() => {
    getData()   
  }, [])
      

  /* ADD PLACEHOLDERS IF IMAGES ARE LESS THAN 5 */
  if(images.length < 5){
    let obj = {id: 0, image: ''}
    setImages((prev) => [...prev, obj])  
  } 

  console.log(images)

  return (
    <div>
      page: { images.length > 0 && images.map(item => item.id + ', ') } 
    
    </div>
  )
}

export default page