import axios from "axios"

export default class AbilityService {
    
    getAbilityByCandidateId(id){
        return axios.get("http://localhost:8080/api/abilityCandidates/getByCandidateId?candidateId="+id)
    }
    update(id,ability){
        return axios.post("http://localhost:8080/api/abilityCandidates/update?id="+id,ability)
    }
    getAbilities(){
        return axios.get("http://localhost:8080/api/abilities/getAll")
    }
    
}