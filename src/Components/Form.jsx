


import { useEffect, useState } from 'react';
const Form = () => {
  const [formData, setFormdata] = useState({});
  const [progress, setProgress] = useState(0)
  const [showSubmit, setShowSubmit] = useState(false)
  const { name, email, phone, gender } = formData || {};

  const handleChange = (e, fieldName) => {
    setFormdata((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
  };

  useEffect(() => {
    console.log(formData)
    const arraValuesLength = Object.values(formData)?.filter(Boolean)?.length;
    setProgress(parseInt(25 * arraValuesLength))
  }, [formData])

  useEffect(() => {
    const _showSubmit = progress === 100
    setShowSubmit(_showSubmit)
  }, [progress])

  return (
    <>
      <span>{progress} % complete</span><br />
      <div className='progress-bar-container'>
        <div style={{ width: `${progress}%`, backgroundColor: 'green', height: '20px' }}></div>
      </div>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <br />
      Email:
      <input
        type="text"
        value={email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <br />
      Phone:
      <input
        type="text"
        name={phone}
        onChange={(e) => handleChange(e, 'phone')}
      />
      <br />
      Gender:
      <select name="gender" onChange={(e) => handleChange(e, 'gender')} value={gender}>
        <option value="">...Select one...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />
      <br />

      {showSubmit && <button>Submit form</button>}
    </>
  );
};

export default Form;
