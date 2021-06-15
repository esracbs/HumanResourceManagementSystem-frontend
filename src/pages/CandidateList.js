import React ,{ useState ,useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CandidateService from '../services/CandidateService'

export default function CandidateList() {
  const [candidates, setCandidates] = useState([])
    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data),[])
    })
    return (
      <div>
        <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>TC Kimlik Numarası</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {candidates.map((candidate)=>(
            <Table.Row >
                <Table.Cell><Link to={`/candidates/${candidate.id}`}>{candidate.firstName}</Link><br/>{candidate.lastName}</Table.Cell>
                <Table.Cell>{candidate.email}</Table.Cell>
                <Table.Cell>{candidate.identificationNumber}</Table.Cell>
                <Table.Cell>{candidate.birthDate}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
  </div>
        
    )
}