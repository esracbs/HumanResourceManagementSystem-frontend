import React from 'react'
import { Link } from "react-router-dom";
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
        <Menu.Item>
            <Button onClick={props.signIn} primary>Giriş Yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}><Link style={{color:'white'}} to='/registerScreen'>Kayıt Ol</Link></Button>
        </Menu.Item>
            
        </div>
    )
}
