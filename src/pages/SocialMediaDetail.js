import React ,{ useState ,useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import { useParams } from 'react-router'
import SocialMediaService from '../services/SocialMediaService'

export default function LanguageDetail() {
    let { id } = useParams();
  const [socialMedias, setSocialMedia] = useState([])
    useEffect(()=>{
        let socialMediaService = new SocialMediaService()
        socialMediaService.getSocialMediaByCandidateId(id).then(
            result=>setSocialMedia(result.data.data),[])
        })
    return (
        <div ><label> </label>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sosyal Medya</Table.HeaderCell>
                        <Table.HeaderCell>Link</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {socialMedias.map((socialMedia) => (
                    <Table.Row key={socialMedia.id}>
                        <Table.Cell >{socialMedia.linkType.linkType}</Table.Cell>
                        <Table.Cell >{socialMedia.link}</Table.Cell>
                    </Table.Row>
                ))}   
                </Table.Body>
            </Table>
        </div>
        //
                   
    )
}