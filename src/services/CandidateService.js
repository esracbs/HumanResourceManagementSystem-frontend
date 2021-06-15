import axios from "axios"

export default class CandidateService {
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
    getCvByCandidateId(){
        return axios.get("http://localhost:8080/api/candidate/getCandidateCvByCandidateId?candidateId=")
    }
    getByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/candidate/getByCandidateId?id="+candidateId)
    }
}