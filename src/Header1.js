import React from 'react'

const Header1 = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header1.defaultProps = {
  title: " Default title"
}

export default Header1;
