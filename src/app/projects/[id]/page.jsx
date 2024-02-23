"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsByCategoryList from "./components/ProjectsByCategoryList";
import useSWR from "swr";
import { baseURL } from "@/api/baseURL";
import fetcherWeb from "@/swr/fetcherWeb";


export default async function page({ params: {id} }) {
    const { data: categoryData, error: categoryError } = useSWR(`${baseURL}category/${id}`, fetcherWeb)
    const { data: appData, error: appInfoError } = useSWR(`${baseURL}app-info`, fetcherWeb)
    const { data: serviceData, error: servicesError } = useSWR(`${baseURL}service`, fetcherWeb)
    const { data: categoriesData, error: categoriesError } = useSWR(`${baseURL}category`, fetcherWeb)
    const { data: projectCategoriesData, error: projectCategoriesError } = useSWR(`${baseURL}project/category/${id}`, fetcherWeb)
    const appInfo = appData?.data;
    const services = serviceData?.data;
    const categories = categoriesData?.data;
    const category = categoryData?.data;
    


  return (
    <div>
      {/* HEADER */}
      <Header appInfo={appInfo} services={services} categories={categories} />

      <ProjectsByCategoryList id={id} category={category} projectCategories={projectCategoriesData} />


      {/* FOOTER */}
      <Footer />
    </div>
  )
}
