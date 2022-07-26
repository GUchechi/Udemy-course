import React from 'react'

const Header = ({text, bgColor,textColor}) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color:textColor,
  }

  return (
    <div className='container' style={headerStyle}>
        <h2>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: '#fff',
    textColor: 'red',
}

export default Header