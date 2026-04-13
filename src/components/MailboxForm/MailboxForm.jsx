import React from 'react'
import { useState } from 'react'

const MailboxForm = ({ addMailbox }) => {
  const [name, setName] = useState('')
  const [size, setSize] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMailbox({ boxOwner: name, boxSize: size })
  }

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter a Boxholder:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Boxholder Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="size">Select a Box Size:</label>
        <select id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MailboxForm