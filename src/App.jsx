import { useState } from 'react'
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router';
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import LetterForm from './components/LetterForm/LetterForm'
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();
  let id = 0;

  const addMailbox = (mailbox) => {
    id = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id: id, ...mailbox }]);
    navigate('/mailboxes');
  };

  const addLetter = (letter) => {
    setLetters([...letters, letter]);
    navigate('/mailboxes/' + letter.mailboxId);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<main><h1>Post Office</h1></main>}
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
      </Routes>
    </>
  );
};

export default App;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem iste porro! Eligendi iure, architecto quidem, unde quibusdam praesentium repellat laborum qui labore, modi maxime sint! Corporis voluptate cupiditate vel!