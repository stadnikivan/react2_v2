import React from 'react'
import style from './style.module.css'
import Menu from "./Menu"


const Header:React.FC = () => {
    return <div className={style.ButtonsBlock}>
        <Menu/>
     </div>
  }

export default Header
