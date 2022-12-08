import { User, Password } from './components/Login';
import './components/App.css';
import { useForm } from './components/useForm';

function App() {
  const { step, back, next } = useForm([<User />, <Password />]);

  return (
    <>
      {step}
      <button onClick={back}>back</button>

      <button onClick={next}>next</button>
    </>
  );
}

export default App;
