import { BUY_CAKE } from "./cakeType";
const initialState = {
  numOfCake: 10,
};
const cakeReduce = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
export default cakeReduce;
