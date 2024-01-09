import { getProjectsByCategory } from "@/api/getProjectsByCategory"
import ProjectsByCategoryList from "./components/ProjectsByCategoryList"
import getAppInfo from "@/api/getAppInfo"
import getServices from "@/api/getServices"
import getCategories from "@/api/getCategories"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default async function page({ params:  {id} }) {
  const projects = getProjectsByCategory(id)
  const categories = getCategories()
  const appInfo = getAppInfo()
  const services = getServices()


  return (
    <div>
      {/* HEADER */}
      <Header appInfo={appInfo} services={services} categories={categories}/>

      <ProjectsByCategoryList projects={projects} id={id} />


      {/* FOOTER */}
      <Footer appInfo={appInfo} />
    </div>
  )
}
