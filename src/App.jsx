
import { Select, SelectField, TextField } from '../Input'
import { useForm } from '../useForm'
import './App.css'

function App() {
    const {step, back, next} = useForm([
      <TextField title='Name' name='name' type='text' />,
      <TextField title='Number' name='number' type='number' />,
      <Select />,
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
