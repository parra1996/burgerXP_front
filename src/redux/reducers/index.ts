
import {combineReducers} from 'redux';

import credentials from './datosLogin-reducers';
// import search from './busquedaFilms-reducer';

const rootReducer = combineReducers({
    credentials,
    // search
});

export default rootReducer;



