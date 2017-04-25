import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
    return [action.payload.data, ...state];
      //return state.concat([action.payload.data]); stejne jako kod vyse
      //chyba state.push(action.payload.data); , setState je immutate, toto je mutate
      //concat je immutate
  }
  return state;
}

//reducery pracuji s daty protoze se na actione vypromisuji a prijdou jako
//standard data
