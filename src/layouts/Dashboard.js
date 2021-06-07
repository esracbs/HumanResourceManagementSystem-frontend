import React from 'react'
import SideMenu from './SideMenu'
import AdvertisementList from '../pages/AdvertisementList'
import { Grid, GridRow } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={3}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <AdvertisementList/>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
