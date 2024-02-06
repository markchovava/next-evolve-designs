import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getAppInfo from '@/api/getAppInfo';
import { getProject } from '@/api/getProjects';
import ProjectView from './components/ProjectView';
import getCategories from '@/api/getCategories';
import getServices from '@/api/getServices';
import Subscribe from '@/components/Subscribe';



export default function page({ params: {id} }) {
    const appInfo = getAppInfo()
    const services = getServices()
    const project = getProject(id)
    const categories = getCategories()
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories} />

      <ProjectView project={project} />
  

      <Footer appInfo={appInfo} />
    </div>
  )
}
