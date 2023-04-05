import React, { useState } from 'react';

function AgeConverter() {
  const [age, setAge] = useState('');
  const [ageInDays, setAgeInDays] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCalculate = () => {
    const ageInDays = age * 365;
    setAgeInDays(ageInDays);
  };

  return (
    <div>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <button onClick={handleCalculate}>Calculate</button>
      {ageInDays && <p>{`${age} years is ${ageInDays} days.`}</p>}
    </div>
  );
}

export default AgeConverter;
