import React from 'react'
import { useState } from 'react'

const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    addMailbox(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          placeholder='Boxholder Name'
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
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