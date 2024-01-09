import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowRight } from "react-icons/bs";
import ContactForm from '@/components/ContactForm';
import getAppInfo from '@/api/getAppInfo';
import getServices, { getService } from '@/api/getServices';
import ServiceView from './components/ServiceView';
import getCategories from '@/api/getCategories';
import Subscribe from '@/components/Subscribe';



export default function page({ params: {id} }) {
    const appInfo = getAppInfo()
    const services = getServices()
    const service = getService(id)
    const categories = getCategories()
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories} />

      <ServiceView service={service} />
    
    {/* SUBSCRIBE */}
    <Subscribe />

      <ContactForm />

      <Footer appInfo={appInfo} />
    </div>
  )
}
