import React, { useState } from 'react';
import  validateEmail  from '../utils/helpers';


function Form() {
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {

  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } if (inputType === 'email') {
    setEmail(inputValue);
  }  if (inputType === 'message') {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {

  e.preventDefault();

  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
    return;
  }

}

    return (
      <section className="contact">
        <h1>Contact!</h1>
        <form className="form">
        <input
          value={name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          type="text"
          placeholder="Email Address"
        />
        <input
          value={message}
          name="message"
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      </section>
    );
  }
  
  export default Form;