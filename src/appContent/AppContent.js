
 export default {
  BASE_URL : "http://nutricare.zps.vn/",// DEV
//static BASE_URL = "https://apiworkflow.hte.vn:4444/"; //PROD

 Token : "dd34fc173e7ed3c35e01d139e6042e64",
 UserLoin:{},
 URL_LOGIN : "DesktopModules/Services/api/Customer/Login",
 URL_CREATE_ACCOUNT: "DesktopModules/Services/api/Customer/Registration",
 URL_INFO_Home: "DesktopModules/Services/api/Customer/GetByUserId?",
 URL_Title_Items : "DesktopModules/Services/api/Category/GetAllCategory",
 URL_List_Items : "DesktopModules/Services/api/Gift/GetAllGiftByCateId?",
 URL_Detail_Gift : "DesktopModules/Services/api/Gift/GetById?",
 URL_GET_INFO_PRODUCT : "DesktopModules/WebServicesProduct/api/Product/GetByCode?",
 URL_SEND_CodeSpoon : "DesktopModules/Services/api/Customer/AddPoint",
}