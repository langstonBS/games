import React from 'react'
import GameControls from '../controls/Control.jsx'
import Characters from '../charictors/Character.jsx'
import { useDispatch, useCharacter, useEnemy } from '../../hook/Hooks'
import { useEffect } from 'react';


const GameBoard = () => {
  const dispatch = useDispatch();
  const character = useCharacter();
  const enemy = useEnemy();

useEffect(() => {

  dispatch(updateExperience());
  dispatch(setEnemy());
}, [enemy.health]);


  return (
    <div>
      <Characters character={character}/>
      <GameControls />
      <Characters character={enemy}/>
    </div>
  )
}
export default GameBoard;


