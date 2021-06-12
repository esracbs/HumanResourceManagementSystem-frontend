import React from 'react'
import SideMenu from './SideMenu'
import AdvertisementList from '../pages/AdvertisementList'
import EmployerList from '../pages/EmployerList'
import { Grid, GridRow } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import { Route } from 'react-router'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={3}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {/* <AdvertisementList/> 
                        <EmployerList/>
                        <CandidateList/> */}
                        <Route exact path="/" />
                        <Route exact path="/advertisements" component={AdvertisementList}/>
                        <Route exact path="/candidate" component={CandidateList}/>
                        <Route exact path="/cart" component={EmployerList} />
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
