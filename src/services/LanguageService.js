import axios from "axios"

export default class LanguageService {
    
    getLanguageByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/languageCandidates/getByCandidateId?candidateId="+candidateId)
    }
    getLanguages(){
        return axios.get("http://localhost:8080/api/language/getall")
    }
    getLevels(){
        return axios.get("http://localhost:8080/api/languageLevel/getall")
    }
    update(id,language){
        return axios.post("http://localhost:8080/api/languageCandidates/update?id="+id,language)
    }
}