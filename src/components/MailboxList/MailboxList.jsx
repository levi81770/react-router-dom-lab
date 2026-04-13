import React from 'react'
import { Link } from 'react-router'

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>MailboxList</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li className='mail-box' key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              MailBox: {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MailboxList