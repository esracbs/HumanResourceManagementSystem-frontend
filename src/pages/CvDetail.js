import React from 'react'
import { Grid,Table } from 'semantic-ui-react'
import CandidateDetail from '../pages/CandidateDetail'
import AbilityDetail from '../pages/AbilityDetail'
import LanguageDetail from '../pages/LanguageDetail'

export default function CvDetail() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <CandidateDetail/>
                        <Table>
                                <Table.HeaderCell><AbilityDetail /></Table.HeaderCell>
                                <Table.HeaderCell><LanguageDetail/></Table.HeaderCell>
                            
                        </Table>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
