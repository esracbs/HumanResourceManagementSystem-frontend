import React from 'react'
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function FavAdvertisements() {
    const {favAdvItems} = useSelector(state => state.favs)
    return (
        <div>
            <Dropdown item text="Favori İlanlar">
            <Dropdown.Menu>
                {favAdvItems.map((favItem)=>(
                    <Dropdown.Item  >{favItem.advertisement.description}</Dropdown.Item>
                 ))}
            <Dropdown.Divider/>
            
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
