import { useState } from 'react'
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router';
import Error from './pages/Error'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const navigate = useNavigate();
  let id = 0;

  const addMailbox = (mailbox) => {
    id = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id: id, ...mailbox }]);
    navigate('/mailboxes');
  };

  console.log(mailboxes);



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
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;