import React ,{ useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'
import UpdateEmployer from './update/UpdateEmployer'

export default function EmployerList() {
  const [employers, setEmployers] = useState([])
    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data),[])
    })
    return (
      <div>
        <UpdateEmployer/>
        <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>İletişim Numarası</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {employers.map((employer)=>(
            <Table.Row >
                <Table.Cell><Link to={`/employers/${employer.id}`}>{employer.companyName}</Link></Table.Cell>
                <Table.Cell>{employer.webAdress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
  </div>
        
)}