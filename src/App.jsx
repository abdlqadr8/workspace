import './components/App.css';
import { useForm } from './components/useForm';
import { useState } from 'react';
// import axios from 'axios';

const User = ({ user, update }) => {
  return (
    <>
      Username:{' '}
      <input
        type="email"
        id='email'
        name='email'
        value={user}
        onChange={(e) => update({user: e.target.value})}
      />
      <br />
    </>
  );
};

const Password = ({password, update }) => {
  return (
    <>
      Password:{' '}
      <input
        type="password"
        id='password'
        name='password'
        value={password}
        onChange={(e) => update({password: e.target.value})}
      />{' '}
      <br />
    </>
  );
};


function App() {
  const [data, setData] = useState({ user: '', password: '' });

  function update(fields) {
    setData((prev) => {
      return { ...prev, ...fields}
    })
  }

  const { step, back, next, firstStep, lastStep } = useForm([
    <User  update={update}/>,
    <Password />,
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!lastStep) return next();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      {step}
      {!firstStep && <button onClick={back}>back</button>}
      <button type="submit">{lastStep ? 'submit' : 'next'}</button>
    </form>
  );
}

export default App;
