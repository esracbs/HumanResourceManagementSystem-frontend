import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import FavAdvertisements from './FavAdvertisements'
import { useSelector } from 'react-redux';

export default function Navi() {
    const {favAdvItems} = useSelector(state => state.favs)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history =useHistory()
    function handleSignOut() {setIsAuthenticated(false) 
         history.push("/")}
    function handleSignIn() {setIsAuthenticated(true)}
    return (
        <div> 
        <Menu inverted fixed="top">
            <Container>
                
                <Menu.Item name='home'/>
                <Menu.Item name='messages'/>
                <Menu.Menu position='right'>
                    {favAdvItems.length>0&&<FavAdvertisements/>}
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                </Menu.Menu>
            </Container>
        </Menu>
        </div>
    )
}
