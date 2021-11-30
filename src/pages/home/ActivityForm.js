import { useState } from 'react'

export default function ActivityForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ 
      name, 
      description,
    })
  }

  return (
    <>
      <h3>Add an Actvity</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Actvity name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Description</span>
          <input
            required
            onChange={(e) => setDescription(e.target.value)} 
            value={description} 
          />
        </label>
        <button>Add Activity</button>
      </form>
    </>
  )
}