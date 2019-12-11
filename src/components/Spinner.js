import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Carregando..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </>
  )
}

export default Spinner