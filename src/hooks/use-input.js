import { useState } from "react"

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  console.log('enteredValue: ', enteredValue)
  console.log('isTouched: ', isTouched)
  
  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched
  console.log('valueIsValid', valueIsValid)
  console.log('hasError', hasError)

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,   // true or false
    valueChangeHandler,    // same as valueChangeHandler: valueChangeHandler
    inputBlurHandler,
    reset,
  }
}

export default useInput