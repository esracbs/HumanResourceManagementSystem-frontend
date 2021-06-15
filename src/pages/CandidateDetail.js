import React ,{ useState ,useEffect} from 'react'
import { useParams } from 'react-router'
import { Table} from 'semantic-ui-react'
import CandidateService from '../services/CandidateService'

export default function CandidateDetail() {
    let { id } = useParams();
  const [candidate, setCandidate] = useState({})
    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getByCandidateId(id).then(result=>setCandidate(result.data.data),[])
    })
    return (
    <div>
        
        <Table definition>
            <Table.Body>
            <Table.Row>
                <Table.Cell>İsim Soyisim</Table.Cell>
                <Table.Cell>{candidate.firstName} {candidate.lastName}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Doğum Tarihi</Table.Cell>
                <Table.Cell>{candidate.birthDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>TcKimlikNo</Table.Cell>
                <Table.Cell>{candidate.identificationNumber}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Mail</Table.Cell>
                <Table.Cell>{candidate.email}</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
        
    )
}