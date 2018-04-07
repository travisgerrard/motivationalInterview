import { ALCOHOL_UPDATE } from './types';

export const alcoholUpdate = ({ prop, value }) => {
  console.log(prop);
  console.log(value);
  return {
    type: ALCOHOL_UPDATE,
    payload: { prop, value }
  };
};
