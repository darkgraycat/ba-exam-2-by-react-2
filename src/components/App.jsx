import React from 'react'
import Button from './Button.jsx'
import Image from './Image.jsx'
import Wrapper from './Wrapper.jsx'

const App = () => {
  const bgElLeftStyle = {
    backgroundColor: "#55b7ff",
    width: "585px",
    height: "470px",
    top: "-40px",
    left: "0px",
    maxWidth: "40%",
  }
  const bgElRightStyle = {
    backgroundColor: "#7e5aff",
    width: "585px",
    height: "470px",
    top: "-40px",
    right: "0px",
    maxWidth: "40%",
  }
  const textStyle = {
    maxWidth: "400px",
    margin: "20px"
  }
  return (
    <>
      <Wrapper width="800px">
        <Button>
          <p>MORE DETAILS</p>
        </Button>
        <Button icon="fab fa-facebook-f" />
      </Wrapper>
      <Wrapper
        width="800px"
        bg={bgElLeftStyle}
      >
        <Image url="../img/projects_1.png" width="630px" height="470px" />
        <p style={textStyle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptate magni praesentium qui sequi exercitationem tenetur maxime neque. Deserunt explicabo qui, voluptatum et inventore error ea animi quidem suscipit maxime.
        </p>
      </Wrapper>
      <Wrapper
        width="800px"
        bg={bgElRightStyle}
      >
        <p style={textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci dolorum nihil optio! Fuga, laborum nulla repellendus quaerat sint dolorum minima esse facere veritatis, molestias architecto recusandae excepturi in similique.
        </p>
        <Image url="../img/projects_2.png" width="630px" height="470px" />
      </Wrapper>
    </>
  )
}

export default App