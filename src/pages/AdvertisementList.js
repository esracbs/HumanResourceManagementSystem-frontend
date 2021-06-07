import React ,{ useState ,useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import AdvertisementService from '../services/AdvertisementService'

export default function AdvertisementList() {
  const [advertisements, setAdvertisements] = useState([])
    useEffect(()=>{
        let advertisementService = new AdvertisementService()
        advertisementService.getAdvertisements().then(result=>setAdvertisements(result.data.data))
    })
    return (
      <div>
        <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bilgilendirme:</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlan eklenme tarihi</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            
            {/*<Table.HeaderCell>Notes</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {advertisements.map((advert)=>(
            <Table.Row >
                <Table.Cell>{advert.description}</Table.Cell>
                <Table.Cell>{advert.jobtitle.title}</Table.Cell>
                <Table.Cell>{advert.city.cityName}</Table.Cell>
                <Table.Cell>Min:{advert.minSalary}<br/>Maks:{advert.maxSalary}</Table.Cell>
                <Table.Cell>{advert.createdDate}</Table.Cell>
            </Table.Row>
        ))}
          {/* <Table.Row verticalAlign='top'>
            <Table.Cell>advertisements.description</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell verticalAlign='top'>
              Notes
              <br />
              1<br />
              2<br />
            </Table.Cell>
          </Table.Row>
           */}
        </Table.Body>
      </Table>
  </div>
        
    )
}
