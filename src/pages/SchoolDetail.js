import React ,{ useState ,useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import { useParams } from 'react-router'
import SchoolService from '../services/SchoolService'

export default function LanguageDetail() {
    let { id } = useParams();
  const [schools, setSchool] = useState([])
    useEffect(()=>{
        let schoolService = new SchoolService()
        schoolService.getSchoolByCandidateId(id).then(
            result=>setSchool(result.data.data),[])
        })
    return (
        <div >
            <Table >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okuduğu Okullar</Table.HeaderCell>
                        <Table.HeaderCell>Okuduğu Bölüm</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {schools.map((school) => (
                    <Table.Row key={school.id}>
                        <Table.Cell >{school.schoolDepartment.school.schoolName}</Table.Cell>
                        <Table.Cell >{school.schoolDepartment.department.departmentName}</Table.Cell>
                    </Table.Row>
                ))} 
                </Table.Body>
            </Table>
        </div>
    )
}