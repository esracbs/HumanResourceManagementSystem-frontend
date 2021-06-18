import axios from "axios"

export default class SchoolService {
    
    getSchoolByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/schoolCandidates/getByCandidateId?candidateId="+candidateId)
    }
}