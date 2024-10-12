/**
 * Creating a form using 4 fields (name, email, phone, gender(dropdown).
4 fields should be validated
Progress Bar has to appear with %(percentage) based on a valid field filled. Let's treat every field as 25%
 * 
 */

import React, { useState } from 'react';

const Form = () => {
  const [formdata, setFormdata] = useState();
  const { name, email, phone, gender } = formData;

  const handleChange = (e, fieldName) => {
    setFormdata((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
  };

  return (
    <>
      <div></div>
      Name:{' '}
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <br />
      Email:{' '}
      <input
        type="text"
        value={email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <br />
      Phone:{' '}
      <input
        type="text"
        name={phone}
        onChange={(e) => handleChange(e, 'phone')}
      />
      <br />
      Gender:{' '}
      <select onSelect={(e) => handleChange(e, 'gender')} value={gender}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br />
    </>
  );
};

export default Form;
