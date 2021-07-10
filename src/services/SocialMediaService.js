import axios from "axios"

export default class SocialMediaService {
    
    getSocialMediaByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/SocialMedias/getByCandidateId?candidateId="+candidateId)
        
    }
    update(linkId,socialMedia){
        return axios.post("http://localhost:8080/api/SocialMedias/update?linkId="+linkId,socialMedia)
    }
    getSocialMedias(){
        return axios.get("http://localhost:8080/api/SocialMedias/getAll")
    }
    getLinkTypes(){
        return axios.get("http://localhost:8080/api/linkTypes/getAll")
    }
    
}