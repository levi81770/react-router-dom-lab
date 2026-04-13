import React from 'react'
import { useState } from 'react'
const LetterForm = ({ addLetter, mailboxes }) => {
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  

  return (
    <>
      <h1>New Letter</h1>
      {mailboxes.length ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="mailboxId">Mailbox:</label>
          <select
            id="mailboxId"
            name="mailboxId"
            value={formData.mailboxId}
            onChange={handleChange}
          >
            <option value="">Select a Mailbox</option>
            {mailboxes.map((mailbox) => (
              <option key={mailbox._id} value={mailbox._id}>
                Mailbox {mailbox._id}
              </option>
            ))}
          </select>
          <label htmlFor="recipient">Recipient</label>
          <input
            id="recipient"
            name="recipient"
            type="text"
            placeholder='Recipient name'
            value={formData.recipient}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Letter</button>
        </form>
      ) : (
        <p>No mailboxes available.</p>
      )}
    </>
  )
}

export default LetterForm