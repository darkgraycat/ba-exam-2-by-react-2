import React from 'react'
import style from '../css/Wrapper.css'

const Wrapper = ({ width, bg, children }) => (
  <div
    className={style.wrapper}
  >
    <div
      className={style.wrapperOutside}
      style={bg}
    >
    </div>
    <div
      className={style.wrapperInside}
      style={{ maxWidth: width }}
    >
      {children}
    </div>
  </div>
)

export default Wrapper