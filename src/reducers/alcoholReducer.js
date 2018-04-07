import { ALCOHOL_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  changeDesired: false,
  importanceOfChange: '',
  confidenceOfChange: '',
  importanceNextStep: '',
  confidenceNextStep: '',
  importanceChangeSliderValue: 5,
  confidenceChangeSliderValue: 5,
  nextStepForChange: ''
};

export default function(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case ALCOHOL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}
