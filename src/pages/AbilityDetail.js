import React ,{ useState ,useEffect} from 'react'
import {Table } from 'semantic-ui-react'
import { useParams } from 'react-router'
import AbilityService from '../services/AbilityService'

export default function AbilityDetail() {
    let { id } = useParams();
  const [abilities, setAbility] = useState([])
    useEffect(()=>{
        let abilityService = new AbilityService()
        abilityService.getAbilityByCandidateId(id).then(
            result=>setAbility(result.data.data),[])
        })
    return (
        <div >
            <Table className="tb" >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kullandığı Teknolojiler</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {abilities.map((ability) => (
                    <Table.Row key={ability.id}>
                        <Table.Cell textAlign='center'>{ability.ability.abilityName}</Table.Cell>
                    </Table.Row>
                ))} 
                </Table.Body>
            </Table>
        </div>
    )
}
