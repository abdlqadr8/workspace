import { useState } from "react";

export function useForm(steps){
  const [index, setIndex] = useState(0)

  const maxLength = steps.length - 1

  function next(){
    setIndex( i => {
      if (i >= maxLength) return i
      return i + 1
    })
  }

  function back(){
    setIndex( i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  return{
    index,
    steps,
    step: steps[index],
    next,
    back
  }
} 