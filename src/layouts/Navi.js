import React,{useState} from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    function handleSignOut() {setIsAuthenticated(false)}
    function handleSignIn() {setIsAuthenticated(true)}
    return (
        <div>
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item name='home'/>
                <Menu.Item name='messages'/>
                <Menu.Menu position='right'>
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                </Menu.Menu>
            </Container>
        </Menu>
        </div>
    )
}
