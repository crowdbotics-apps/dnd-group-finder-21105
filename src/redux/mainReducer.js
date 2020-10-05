import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2127338Reducer from '../features/SignIn2127338/redux/reducers'
import SignIn2127311Reducer from '../features/SignIn2127311/redux/reducers'
import SignIn2127297Reducer from '../features/SignIn2127297/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2127338: SignIn2127338Reducer,
SignIn2127311: SignIn2127311Reducer,
SignIn2127297: SignIn2127297Reducer,

});