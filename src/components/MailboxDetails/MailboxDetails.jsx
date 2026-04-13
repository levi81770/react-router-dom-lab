import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';


const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const navigate = useNavigate();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      {selectedBox ? (
        <div style={{ textAlign: 'left' }}>
          <h1>
            <strong>Mailbox: {selectedBox._id}</strong>
          </h1>
          <br />
          <h2 >
            <strong>Details</strong>
          </h2>
          <br />
          <p>Boxholder: {selectedBox.boxOwner}</p>
          <br />
          <p>Box Size: {selectedBox.boxSize}</p>
        </div>
      ) : (
        <p>Mailbox not found</p>
      )}
    </>
  )
}

export default MailboxDetails