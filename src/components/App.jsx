import React from 'react'
import Button from './Button.jsx'

const App = () => {
  return (
    <>
      <Button color="blue" radius="0px" size="200 50">
        <p>MORE DETAILS</p>
      </Button>
      <Button color="red" radius="50%" size="40 40">
        <i className="fab fa-facebook-f"></i>
      </Button>
    </>
  )
}

export default App