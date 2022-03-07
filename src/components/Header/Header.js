import React from 'react'
import "./Header.scss"
import avatar from "../../assets/avatar.png"

function Header({title}) {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <img src={avatar} />   
    </div>
  )
}

export default Header