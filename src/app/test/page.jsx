import getPermissions from "@/api/getPermissions";
import TestComp from "./components/TestComp";
import getAppInfo from "@/api/getAppInfo";
import TestComp2 from "./components/TestComp2";
import Header from "@/components/Header";


const page = () => {
    const permissions = getPermissions()
    const appInfo = getAppInfo()
  
  return (
    <div>
      <Header appInfo={appInfo} />
      <TestComp appInfo={appInfo} permissions={permissions}/>
      <TestComp2 permissions={permissions}/>
    Texts
    </div>
  )
}

export default page