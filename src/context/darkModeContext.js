import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

// let fromLocal;

// if (localStorage.getItem('darkMode') === undefined) {
//   console.log(fromLocal);
//   fromLocal = false;
//   localStorage.setItem('darkMode', false);
//   console.log(fromLocal);
// } else {
//   fromLocal = localStorage.getItem('darkMode');
//   console.log(fromLocal);
// }

// if (fromLocal === false) {
//   console.log(fromLocal);
//   localStorage.setItem('darkMode', false);
//   fromLocal = localStorage.getItem('darkMode');
//   console.log(fromLocal);
// }

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
