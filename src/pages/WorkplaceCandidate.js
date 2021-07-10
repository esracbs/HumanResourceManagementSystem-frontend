import React ,{ useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import WorkplaceCandidateService from '../services/WorkplaceCandidateService';
import UpdateWorkplace from './update/UpdateWorkplace'

export default function WorkplaceCandidate() {
    let { id } = useParams();
    const [workplaces, setWorkplace] = useState([])
    useEffect(()=>{
        let workplaceService = new WorkplaceCandidateService()
        workplaceService.getWorkplaceById(id).then(
            result=>setWorkplace(result.data.data),[])
    })
    return (
        <div>
            <Table >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>çalıştığı İşyerleri</Table.HeaderCell>
                        <Table.HeaderCell>Çalıştığı Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>İşe başlama tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İşten ayrlma tarihi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                
                {workplaces.map((workplace) => (
                    <Table.Row key={workplace.id}>
                        <Table.Cell >{workplace.workplace.workplaceName}</Table.Cell>
                        <Table.Cell >{workplace.jobTitleId.title}</Table.Cell>
                        <Table.Cell >{workplace.dateOfEntry}</Table.Cell>
                        <Table.Cell >{workplace.dateOfQuit}</Table.Cell>
                        <Table.Cell ><UpdateWorkplace id={workplace.id}/></Table.Cell>
                    </Table.Row>
                ))}
                </Table.Body>
            </Table>
        </div>
    )
}
