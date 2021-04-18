import React, { createContext, useReducer } from 'react';

const initialState = {
  feedings: null,
  menu: false,
};

const context = createContext(initialState);

const { Provider } = context;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'Toggle Menu': {
          const newState = { ...state, menu: !state.menu };
          return newState;
        }
        case 'Set Feedings': {
          const newState = { ...state, feedings: action.payload };
          return newState;
        }
        default:
          throw new Error('You need to specify an action type');
      }
    },
    initialState,
  );
  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export default StateProvider;
export { context };
