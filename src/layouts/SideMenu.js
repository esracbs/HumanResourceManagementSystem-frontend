import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown ,Icon, Input, Menu} from 'semantic-ui-react'

export default function SideMenu() {
 
    return (
          <Menu vertical>
          <Menu.Item>
            <Input placeholder='Search...' />
          </Menu.Item>
          
              <Menu.Item  as='a'><Link to='/advertisements'>İlanlar</Link></Menu.Item>
              <Menu.Item><Link to='/candidates'>İş arayanlar</Link></Menu.Item>
              <Menu.Item ><Link to='/employers'>Şirketler(iş verenler)</Link></Menu.Item>
              <Menu.Item ><Link to='/addAdvertisement'>İlan Ekle</Link></Menu.Item>
              <Menu.Item ><Link to='/advertsToBeConfirmed'>Onaylanacak İlanlar</Link></Menu.Item>
              <Menu.Item ><Link to='/employerUpdatesToBeConfirmed'>Onaylanacak İşveren Güncellemeleri</Link></Menu.Item>
          
          <Menu.Item name='browse'>
            <Icon name='grid layout' />
            Browse
          </Menu.Item>
          <Menu.Item name='messages'>
            Messages
          </Menu.Item>

          <Dropdown item text='More'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      )
}
