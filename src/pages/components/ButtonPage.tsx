import React from 'react'
import Button from '../../components/Button'

function ButtonPage() {
  const coba = () => {
    console.log('safas')
  }

  return (
    <div>
      {/*
        
      */}
      <Button onClick={() => coba()} />
    </div>
  )
}

export default ButtonPage
