import { useRef, useState } from "react"

const SimpleInput = (props) => {
  // const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }


  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    // clear input value using state and update touched state
    setEnteredName('')
    setEnteredNameTouched(false)
    

    // useRef
    // const enteredValue = nameInputRef.current.value
    // console.log('Ref:', enteredValue)
    

    // clear input value using useRef --> NOT IDEAL, DON'T MANIPULATE THE DOM
    // nameInputRef.current.value = ''
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
