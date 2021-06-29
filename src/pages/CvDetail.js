import React from 'react'
import { Grid,Table } from 'semantic-ui-react'
import CandidateDetail from '../pages/CandidateDetail'
import AbilityDetail from '../pages/AbilityDetail'
import LanguageDetail from '../pages/LanguageDetail'
import SchoolDetail from '../pages/SchoolDetail'
import WorkplaceCandidate from './WorkplaceCandidate'
import SocialMediaDetail from './SocialMediaDetail'

export default function CvDetail() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <h3 >cv Detayları</h3>
                        <CandidateDetail/>
                        <SocialMediaDetail/>
                        <Table>
                                <Table.HeaderCell><AbilityDetail /></Table.HeaderCell>
                                <Table.HeaderCell><LanguageDetail/></Table.HeaderCell>
                        </Table>
                        <WorkplaceCandidate/><br/>
                        <SchoolDetail/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
