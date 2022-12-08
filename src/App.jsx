import { User, Password } from './components/Login';
import './components/App.css';
import { useForm } from './components/useForm';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ user: '', password: '' });

  function update(fields) {
    setData((prev) => {
      return { ...prev, ...fields}
    })
  }

  const { step, back, next, firstStep, lastStep } = useForm([
    <User { ...data } update={update} />,
    <Password />,
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!lastStep) return next();
    axios.post('https://reqres.in/api/login', {
      user: user,
      password: password,
    }).then(result =>{
      alert(result)
    }).catch(error => {
      console.log(error)
    })
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
