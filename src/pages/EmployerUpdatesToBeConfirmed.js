import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'
import { NavLink } from 'react-router-dom';

export default function EmployerUpdatesToBeConfirmed() {
    const [employerUpdates, setEmployerUpdates] = useState([])
    let employerService = new EmployerService()
    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployerUpdates().then(result=>setEmployerUpdates(result.data.data),[])
    })
    function verify(value) {
        employerService.verify(value)
    }
    return (
    <div>
        <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>İletişim Numarası</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {employerUpdates.map((employerUpdate)=>(
            <Table.Row >
                <Table.Cell>{employerUpdate.companyName}</Table.Cell>
                <Table.Cell>{employerUpdate.webSite}</Table.Cell>
                <Table.Cell>{employerUpdate.phoneNumber}</Table.Cell>
                <Table.Cell><Button color="green" content="Onayla" type="submit"   as={NavLink} to={`/verifyEmployer/${employerUpdate.id}`}/></Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
    </div>
    )
}
