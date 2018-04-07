import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Slidercard from './Slidercard';

class LandingPage extends Component {
  providerText = () => {
    const importanceSliderValue = this.props.importanceChangeSliderValue;
    var changeStage;
    if (importanceSliderValue < 3) {
      changeStage = 'precontemplative';
    } else if (importanceSliderValue >= 3 && importanceSliderValue <= 7) {
      changeStage = 'contemplative';
    } else {
      changeStage = 'determination';
    }

    const textOne = `Discussed alcohol use today patient was in the ${changeStage} state of change.`;
    const textTwo = ` Patients next steps will be ${this.props
      .nextStepForChange}`;

    return (
      <div>
        <p>
          {textOne}
          {textTwo}
        </p>
      </div>
    );
  };

  sliderCard = (
    value,
    title,
    subtitle,
    inputHeaderOne,
    inputOneValue,
    inputOnePlaceHolderText,
    inputTwoValue,
    inputTwoPlaceHolderText,
    inputIfReadyToChange
  ) => {
    return (
      <Slidercard
        value={this.props[value]}
        title={title}
        subTitle={subtitle}
        onChange={change =>
          this.props.alcoholUpdate({ prop: value, value: change.target.value })}
        inputHeaderOne={inputHeaderOne}
        inputOneValue={this.props[inputOneValue]}
        inputOnePlaceHolderText={inputOnePlaceHolderText}
        inputOneChange={change => {
          this.props.alcoholUpdate({
            prop: inputOneValue,
            value: change.target.value
          });
        }}
        inputTwoValue={this.props[inputTwoValue]}
        inputTwoPlaceHolderText={inputTwoPlaceHolderText}
        inputTwoChange={change => {
          this.props.alcoholUpdate({
            prop: inputTwoValue,
            value: change.target.value
          });
        }}
        inputIfReadyToChange={inputIfReadyToChange}
      />
    );
  };

  render() {
    return <div className="App">
        <h2>Alcohol Motivational Interview</h2>
        <div className="change-sliders">
          {this.sliderCard('importanceChangeSliderValue', 'Importance of change', 'How important is it for you to change your alcohol use', 'What makes it important for you to change?', 'importanceOfChange', 'Factors involved in change', 'importanceNextStep', 'Importance Next Step', 'Ready for change!')}
          {this.sliderCard('confidenceChangeSliderValue', 'Confidence in ability to change', 'If today were the day you decided to change your alcohol use, how confident are you that you could do it?', 'What is limiting your confidence?', 'confidenceOfChange', 'Confidence breakers', 'confidenceNextStep', 'Confidence Next Step', 'Lets change today!')}
        </div>
        <input type="text" name="nextStep" id="nextStep" placeholder="Next steps for change" value={this.props.nextStepForChange} onChange={change => {
            this.props.alcoholUpdate({
              prop: 'nextStepForChange',
              value: change.target.value,
            });
          }} />
        <Link to="/forPatient">
          <button className="btn">For patient</button>
        </Link>
        {this.providerText()}
      </div>;
  }
}

function mapStateToProps(state) {
  const {
    changeDesired,
    importanceOfChange,
    confidenceOfChange,
    importanceNextStep,
    confidenceNextStep,
    importanceChangeSliderValue,
    confidenceChangeSliderValue,
    nextStepForChange
  } = state.alcohol;
  return {
    changeDesired,
    importanceOfChange,
    confidenceOfChange,
    importanceNextStep,
    confidenceNextStep,
    importanceChangeSliderValue,
    confidenceChangeSliderValue,
    nextStepForChange
  };
}

export default connect(mapStateToProps, actions)(LandingPage);
