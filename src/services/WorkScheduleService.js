import axios from "axios"

export default class WorkScheduleService{
    getAll(){
        return axios.get("http://localhost:8080/api/workschedules/getall")
    }
}