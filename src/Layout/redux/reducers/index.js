import { combineReducers } from "redux";
import {reducerPosts , reducerUpcoming,reducerMapData,reducerTimeLineData} from './ApiCall.js'

const rootReducer = combineReducers({
	reducerPosts,
	reducerUpcoming,
	reducerMapData,
	reducerTimeLineData
});

export default rootReducer;
