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

/*
<button style={{
  width: size.split(' ')[0],
  height: size.split(' ')[1],
  color: color,
  backgroundColor: "transparent",
  border: `1px solid ${color}`,
  borderRadius: radius,
  cursor: "pointer"
}}>{children}</button>
*/