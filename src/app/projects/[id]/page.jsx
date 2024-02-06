import getAppInfo from "@/api/getAppInfo";
import getServices from "@/api/getServices";
import getCategories from "@/api/getCategories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsByCategoryList from "./components/ProjectsByCategoryList";


export default async function page({ params: {id} }) {
  const categories = getCategories()
  const appInfo = getAppInfo()
  const services = getServices()


  return (
    <div>
      {/* HEADER */}
      <Header appInfo={appInfo} services={services} categories={categories}/>

      <ProjectsByCategoryList id={id} />


      {/* FOOTER */}
      <Footer appInfo={appInfo} />
    </div>
  )
}
