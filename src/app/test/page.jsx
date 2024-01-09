import getPermissions from "@/api/getPermissions";
import TestComp from "./components/TestComp";
import getAppInfo from "@/api/getAppInfo";
import TestComp2 from "./components/TestComp2";
import { getCookieToken, setCookieToken } from "@/api/tokenCookie";


const page = () => {
  const a = '1234567890'
  setCookieToken(a)
  const permissions = getPermissions()
  const appInfo = getAppInfo()
  //document.cookie = '1234567890'
  const token = getCookieToken()
  //console.log('cookieToken')
  //console.log(cookieToken)
  
  return (
    <div>
      fgtjyttrb
      {/* <TestComp appInfo={appInfo} permissions={permissions} token={token} />
      <TestComp2 permissions={permissions}/> */}
    Texts
    </div>
  )
}

export default page