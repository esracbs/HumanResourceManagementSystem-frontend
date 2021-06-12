import React from 'react'
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(signOut) {
    return (
        <div>
            <Menu.Item>
            <Image avatar spaced="right" src="https://media-exp3.licdn.com/dms/image/C4D03AQGnMR4yiGQWkw/profile-displayphoto-shrink_200_200/0/1609952425007?e=1628726400&v=beta&t=6v7HmQQbSJPbLspC4vYX3z6px8kn-vLm73Yz-Hh3lMY"/>
                <Dropdown pointing="top left" text="Esra">
                     <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu> 
                </Dropdown> 
            </Menu.Item>
        </div>
    )
}