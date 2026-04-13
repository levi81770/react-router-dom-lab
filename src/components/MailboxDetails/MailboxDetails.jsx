import React from 'react'
import { useParams } from 'react-router'


const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = letters.filter(
    (letter) => Number(letter.mailboxId) === Number(mailboxId)
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
          <br />
          <h2>
            <strong>Letters</strong>
          </h2>
          <br />
          <br />
          {selectedLetters.length ? (
            selectedLetters.map((letter) => (
              <div key={letter._id}>
                <p>Recipient: {letter.recipient}</p>
                <p>Message: {letter.message}</p>
              </div>
            ))
          ) : (
            <p>No letters in this mailbox.</p>
          )}
        </div>
      ) : (
        <p>Mailbox not found</p>
      )}
    </>
  )
}

export default MailboxDetails