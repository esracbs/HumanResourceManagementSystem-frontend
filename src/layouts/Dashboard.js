import React from 'react'
import SideMenu from './SideMenu'
import AdvertisementList from '../pages/AdvertisementList'
import EmployerList from '../pages/EmployerList'
import { Grid, GridRow } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import { Route } from 'react-router'
import CvDetail from '../pages/CvDetail'
import RegisterScreen from '../pages/RegisterScreen'
import AddAdvertisement from '../pages/AddAdvertisement'

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
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/employers" component={EmployerList} />
                        <Route exact path="/candidates/:id" component={CvDetail}/>
                        <Route exact path="/registerScreen" component={RegisterScreen}/>
                        <Route exact path="/addAdvertisement" component={AddAdvertisement}/>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
