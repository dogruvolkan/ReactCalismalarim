import { useState } from 'react'

function InputExample() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changeSurname = (event) => {
    setSurname(event.target.value);
  }

  return (
    <div>
     
      <input value={name} onChange={changeName}></input>
     
      <input value={surname} onChange={changeSurname}></input>
      <h1>{name} {surname}</h1>
    </div >
  )
}

export default InputExample

