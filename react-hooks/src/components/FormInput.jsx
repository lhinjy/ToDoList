import React, { useRef, useEffect, useState } from "react";

//first name is controlled input, lastname is uncontrolled input
const FormInput = () => {
  const renderCount = useRef(0);
  const [firstName, setFirstName] = useState("");
  const lastNameInput = useRef();

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    lastNameInput.current?.focus();
  }, []);

  const formHandler = () => {
    const data = {
      firstName,
      lastName: lastNameInput.current?.value,
    };
    console.log("lastNameInput: " + lastNameInput);
    console.log("data: " + data);
  };
  return (
    <div>
      <h3>Handling Form Inputs</h3>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Your last name"
          ref={lastNameInput}
        />
        <button type="button" onClick={formHandler}>
          Submit
        </button>
      </form>
      <p>The number of re-renders: {renderCount.current}</p>
    </div>
  );
};

export default FormInput;
