import { useState } from 'react'

function Content() {
  const [text, setText] = useState('mike nieva')

  const handleClick = (event) => {
    console.log('event:', event)
    setText('andrea')
  }

  return (
    <>
      <p>El contenido</p>
      <p>El texto: {text}</p>
      <button
        onClick={(evt) => handleClick(evt)}
        style={{ backgroundColor: 'blue' }}
      >
        Cambiar texto
      </button>
    </>
  )
}

export default Content
