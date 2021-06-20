import axios from "axios"

export default class AdvertisementService {
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
    add(advertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", advertisement);
    }
}

