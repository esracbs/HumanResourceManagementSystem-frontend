import axios from 'axios'

export default class WorkplaceCandidateService {
    getWorkplaceById(candidateId){
        return axios.get("http://localhost:8080/api/workplaceCandidates/getByCandidateId?candidateId="+candidateId)
    }
    update(workplace,candidateId){
        return axios.post("http://localhost:8080/api/workplaceCandidates/update?candidateId="+candidateId,workplace)
    }
}
