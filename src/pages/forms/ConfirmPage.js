import React ,{ useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react'
import AdvertisementService from '../../services/AdvertisementService'

export default function ConfirmPage() {
    const [advertisements, setAdvertisements] = useState([])
    let { id } = useParams();
    let jobAdvertisementService=new AdvertisementService();
    useEffect(()=>{
        jobAdvertisementService.getById(id).then(result=>setAdvertisements(result.data.data),[])
    })
    function confirm(value) {
        jobAdvertisementService.confirmed(value)
    }
    return (
    <div>
      <Card >
        <Card.Content>
          <Card.Description>
              İlan Onaylanmıştır Anasayfaya Dönebilirsiniz
          </Card.Description>
        </Card.Content>
            {confirm(advertisements.id) }
      </Card>
    </div>
    )
}

