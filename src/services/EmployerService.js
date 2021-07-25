import axios from "axios"

export default class EmployerService {
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }
    update(values){
        return axios.put("http://localhost:8080/api/employers/update",values)
    }
    verify(id){
        return axios.put("http://localhost:8080/api/employers/verifyUpdate?employeeId=1&employerUpdateId="+id)
    }
    getByEmployerUpdateId(id){
        return axios.get("http://localhost:8080/api/employerUpdates/getById?id="+id)
    }
    getEmployerUpdates(){
        return axios.get("http://localhost:8080/api/employerUpdates/getall")
    }
}