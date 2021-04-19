import React from 'react'
import style from '../css/Image.css'

const Image = ({ url, width, height }) => {
  return (
    <div style={{
      backgroundImage: `url(${url})`,
      width: width,
      height: height
    }} className={style.image}>
    </div>
  )
}

export default Image