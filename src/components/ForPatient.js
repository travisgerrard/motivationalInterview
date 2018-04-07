import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForPatient extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <h1>Alcohol</h1>
          </div>
        </nav>

        <h4>Importance</h4>
        <p>
          You put the importance of quitting drinking alcohol at a{' '}
          {this.props.importanceChangeSliderValue} out of 10
        </p>
        <p>
          You think it's important to change your drinking behavior because:{' '}
          <b>{this.props.importanceOfChange}</b>
        </p>
        <p>
          To increase your likelihood of making a change to your drinking
          behavior you would need to: <b>{this.props.importanceNextStep}</b>
        </p>
        <h4>Confidence</h4>
        <p>
          You have {this.props.confidenceChangeSliderValue} out of 10 confidence
          you could change your drinking behaviour.
        </p>
        <p>
          Your confidence in being able to change is limited by:{' '}
          <b>{this.props.confidenceOfChange}</b>
        </p>
        <p>
          You would be more confident you would be able to change it:{' '}
          <b>{this.props.confidenceNextStep}</b>
        </p>
        <h4>Next Steps</h4>
        <p>
          We discussed your participation doing the following before your next
          visit: <b>{this.props.nextStepForChange}</b>
        </p>
        <p>
          If you want to further discuss reducing your alcohol use, please let us know,
          we can discuss the following stragies
        </p>
        <p>- Support Groups</p>
        <p>- Medications</p>
        <p>- Referral</p>
        <p />
      </div>
    );
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

export default connect(mapStateToProps)(ForPatient);
