import React, { useState } from 'react';
import './Calcu.css';

function Calcu() {
  // State
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height) * 703);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 25) {
        setMessage('You are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  const imgSrc = (bmi > 0) ? (bmi < 25 ? require('../assets/underweight.png') : (bmi < 30 ? require('../assets/healthy.png') : require('../assets/overweight.png'))) : null;

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="number" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reset</button>
          </div>
        </form>

        {bmi > 0 && (
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}

        {imgSrc && (
          <div className='img-container'>
            <img src={imgSrc} alt='BMI Category' />
          </div>
        )}
      </div>
    </div>
  );
}

export default Calcu;
