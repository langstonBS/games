
import {ATTACK_ENEMY} from '../../Actions/gameActions'

export const initialState = {
  character: {
    image: 'https://us.123rf.com/450wm/anekoho/anekoho1803/anekoho180300019/103156248-wooded-bridge-to-pavilion-at-koh-kood-island-with-white-sand-beauty-beach-and-kayak-boat-this-immage.jpg?ver=6',
    health: 50,
    attack: 50,
    experience: 50
  },
  enemy: {
    image: 'https://us.123rf.com/450wm/anekoho/anekoho1803/anekoho180300019/103156248-wooded-bridge-to-pavilion-at-koh-kood-island-with-white-sand-beauty-beach-and-kayak-boat-this-immage.jpg?ver=6',
    health: 50,
    attack: 40,
    experience: 50
  }
};

export default function reduser() {
  switch (action.type){
  case ATTACK_ENEMY: 
      return { ...state, enemy: { ...state.enemy, health: state.enemy.health - state.character.attack } }
    

    default:
      return state;
  }



}