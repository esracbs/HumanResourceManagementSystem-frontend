import React ,{ useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import WorkplaceCandidateService from '../services/WorkplaceCandidateService';
import UpdateWorkplace from '../pages/UpdateWorkplace'
import SocialMediaService from '../services/SocialMediaService';
import UpdateSocialMedia from '../pages/UpdateSocialMedia'

export default function EditPage() {
    let { id } = useParams();
    const [workplaces, setWorkplace] = useState([])
    const [socialMedias,setSocialMedia]=useState([])
    useEffect(()=>{
        let workplaceService = new WorkplaceCandidateService()
        let socialMediaService = new SocialMediaService()
        workplaceService.getWorkplaceById(id).then(result=>setWorkplace(result.data.data),[])
        socialMediaService.getSocialMediaByCandidateId(id).then(result=>setSocialMedia(result.data.data),[])
    })
    return (
        <div>
            {/* {socialMedias.map((socialMedia)=>(
             ))}    */}
            <UpdateSocialMedia />
            {workplaces.map((workplace) => (
                <Table><UpdateWorkplace id={workplace.id}/></Table>
            ))}
            
            
        </div>
    )
}
