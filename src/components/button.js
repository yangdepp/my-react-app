import React from 'react'

const Button = props => {
  const { kind, ...other } = props;
  console.log(props)
  console.log(other)
  const className = kind === 'primary' ? 'paimaryButton' : 'secondPrimary'
  return <button className={className} {...other}/>
}

export default Button