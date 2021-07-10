import React ,{ useState ,useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import { useParams } from 'react-router'
import LanguageService from '../services/LanguageService'
import UpdateLanguage from './update/UpdateLanguage';

export default function LanguageDetail() {
    let { id } = useParams();
  const [languages, setLanguage] = useState([])
    useEffect(()=>{
        let languageService = new LanguageService()
        languageService.getLanguageByCandidateId(id).then(
            result=>setLanguage(result.data.data),[])
        })
    return (
        <div >
            <Table  className="tb" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Diller</Table.HeaderCell>
                        <Table.HeaderCell>Seviye</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {languages.map((language) => (
                    <Table.Row key={language.id}>
                        <Table.Cell textAlign='center'>{language.language.languageName}</Table.Cell>
                        <Table.Cell textAlign='center'>{language.languageLevel.levelName}</Table.Cell>
                        <Table.Cell textAlign='center'><UpdateLanguage id={language.id}  /></Table.Cell>
                    </Table.Row>
                ))} 
                </Table.Body>
            </Table>
        </div>
    )
}