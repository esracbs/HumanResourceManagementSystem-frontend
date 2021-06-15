import axios from "axios"

export default class LanguageService {
    
    getLanguageByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/languageCandidates/getByCandidateId?candidateId="+candidateId)
    }
}