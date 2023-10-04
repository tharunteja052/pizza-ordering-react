import React from 'react'
import {menulist} from '../helpers/menulist';
import MenuItem from '../Components/MenuItem';
import '../CSS/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='mentTitle'></h1>
        <div className='menulist'>
        {menulist.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
        </div>
    </div>
  )
}

export default Menu