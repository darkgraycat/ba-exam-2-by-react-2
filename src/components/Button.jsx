import React from 'react'
import style from '../css/Button.css'

const Button = ({ icon, children }) => {
  return (
    <button className={icon ? style.round : style.rectangled}>
      {icon && <i className={icon}></i>}
      {children}
    </button>
  )
}

export default Button