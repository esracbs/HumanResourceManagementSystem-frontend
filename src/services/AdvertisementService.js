import axios from "axios"

export default class AdvertisementService {
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
    add(advertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", advertisement);
    }
    getNotConfirmedAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsConfirmedFalse")
    }
    confirmed(advid){
        return axios.post("http://localhost:8080/api/jobAdvertisements/setConfirm?id="+advid)
    }
    getById(advertisement){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id="+advertisement)
    }
    getByIsConfirmed(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsConfirm");
    }
    
}

