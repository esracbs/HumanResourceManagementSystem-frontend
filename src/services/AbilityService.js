import axios from "axios"

export default class AbilityService {
    
    getAbilityByCandidateId(id){
        return axios.get("http://localhost:8080/api/abilityCandidates/getByCandidateId?candidateId="+id)
    }
    
}