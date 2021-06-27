import React ,{ useState ,useEffect} from 'react'
import {  useHistory, useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react'
import AdvertisementService from '../services/AdvertisementService'

export default function ConfirmPage() {
    const [advertisements, setAdvertisements] = useState([])
    const history =useHistory()
    let { id } = useParams();
    let jobAdvertisementService=new AdvertisementService();
    useEffect(()=>{
        jobAdvertisementService.getById(id).then(result=>setAdvertisements(result.data.data),[])
    })
    function confirm(id) {
        jobAdvertisementService.confirmed(id)
        
    }
    
    return (
        <div>
             <Card >
      <Card.Content>
        
        <Card.Description>
            {advertisements.id}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={confirm(advertisements.id) }  >
          Onayla 
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}

