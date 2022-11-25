
import { SelectField, TextField } from '../Input'
import { useForm } from '../useForm'
import './App.css'

function App() {
    const {step, steps, index, back, next} = useForm([
      <TextField />,
      <SelectField />
    ]);

  return (
    <>
    <button onClick={back}>back</button>
      {step}
      <button onClick={next}>next</button>
    </>
  )
}

export default App
