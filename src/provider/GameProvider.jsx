import React,  { useReducer } from 'react';
import { hookContext } from '../hook/Hooks';
import reducer, { initialState } from '../components/redusers/gameReduse';

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <hookContext.Provider value={{ state, dispatch }}>
      {children}
    </hookContext.Provider>
  );
};

export default GameProvider