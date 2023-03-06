import useInput from "../hooks/use-input"

const SimpleInput = (props) => {
  // extract values from the result returned by the useInput custom hook
  // useInput returns an object so we use object destructuring to pull out the keys from the object and store the values in brand new constants (assign to alias w the :)
  // Need to also pass a value (anonymous function) into the hook ('validateValue' function called in the hook)
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } =useInput(value => value.includes('@'))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Email Address</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Must be a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
