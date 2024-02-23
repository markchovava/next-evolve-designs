"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceView from './components/ServiceView';
import useSWR from 'swr';
import fetcherWeb from '@/swr/fetcherWeb';
import { baseURL } from '@/api/baseURL';



export default function page({ params: {id} }) {
  const { data: appData, error: appInfoError } = useSWR(`${baseURL}app-info`, fetcherWeb)
  const { data: servicesData, error: servicesError } = useSWR(`${baseURL}service`, fetcherWeb)
  const { data: categoriesData, error: categoriesError } = useSWR(`${baseURL}category`, fetcherWeb)
  const { data: serviceData, error: serviceError } = useSWR(`${baseURL}service/${id}`, fetcherWeb)
  const appInfo = appData?.data;
  const services = servicesData?.data;
  const categories = categoriesData?.data;
  const service = serviceData?.data;
  
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories} />

      <ServiceView id={id} service={service} />
    
  
      {/* <ContactForm /> */}

      <Footer />
    </div>
  )
}
