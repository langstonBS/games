import React, { useContext } from 'react'


export const hookContext = React.createContext();

export const useState = () => {
  const { state } = useContext(hookContext);
  return state;
}

export const useCharacter = () => {
  const { character } = useState();
  return character;
};

export const useEnemy = () => {
  const { enemy } = useState();
  return enemy;
};

export const useDispatch = () => {
  const { dispatch } = useContext(hookContext);
  return dispatch;
};



export const useTurn = () => {
  const dispatch = useDispatch();
  return action => dispatch(action);
};