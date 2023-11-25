import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverUrl"


//API to upload employee details
export const uploadEmpDetails = async(reqBody)=>{
 return await commonAPI('POST',`${serverURL}/Emp-details`,reqBody)
}


//API to fetch  employee details
export const getAllEmpDetails= async()=>{
    return await commonAPI('GET',`${serverURL}/Emp-details`,'')
 }


