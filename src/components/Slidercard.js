import React from 'react';

const Slidercard = ({
  value,
  title,
  subtitle,
  onChange,
  inputHeaderOne,
  inputOneValue,
  inputOnePlaceHolderText,
  inputOneChange,
  sliderPlusTwo,
  inputTwoValue,
  inputTwoPlaceHolderText,
  inputTwoChange,
  inputIfReadyToChange
}) => {
  return (
    <div className="card card-block">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{subtitle}</p>
      <input
        value={value}
        type="range"
        min="0"
        max="10"
        onChange={onChange}
        name={value}
        id="slider"
        step={1}
      />
      <p>{value}</p>
      <p>{inputHeaderOne}</p>
      <input
        type="text"
        name="nextStep"
        id="nextStep"
        value={inputOneValue}
        placeholder={inputOnePlaceHolderText}
        onChange={inputOneChange}
      />
      <br />
      <br />
      <p>
        {value === '10'
          ? inputIfReadyToChange
          : `What would it take for you to be at a ${value * 1 + 1}`}
      </p>
      <input
        type="text"
        name="nextStep"
        id="nextStep"
        value={inputTwoValue}
        placeholder={inputTwoPlaceHolderText}
        onChange={inputTwoChange}
      />
      <br />
    </div>
  );
};

export default Slidercard;
