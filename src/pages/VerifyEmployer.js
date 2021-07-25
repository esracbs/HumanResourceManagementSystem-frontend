import React, { useEffect, useState } from 'react'
import EmployerService from '../services/EmployerService'
import Popup from "reactjs-popup";
import { NavLink } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';

export default function VerifyEmployer() {
    const [employerUpdates, setEmployerUpdates] = useState([])
    let employerService = new EmployerService()
    let { id } = useParams();
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getByEmployerUpdateId(id).then(result => setEmployerUpdates(result.data.data), [])
    })
    function verify(value) {
        employerService.verify(value)
    }
    return (
        <div>
            <Card >
        <Card.Content>
          <Card.Description>
              Güncelleme Onaylanmıştır Anasayfaya Dönebilirsiniz
          </Card.Description>
        </Card.Content>
            {verify(employerUpdates.id) }
      </Card>
        </div>
    )
}
