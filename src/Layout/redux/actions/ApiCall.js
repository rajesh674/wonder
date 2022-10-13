//import axios from "axios";
import {
	ActionType
} from './ActionType';



export const fetchUpcomingUsers = upcomingdata => {
	return {
	  type: ActionType.UPCOMING_USERS_SUCCESS,
	  payload: upcomingdata
	}
}
  
export const fetchPostsUsers = postsdata => {
	return {
	  type: ActionType.POSTS_USERS_SUCCESS,
	  payload: postsdata
	}
}
  
export const fetchMapData = mapdata => {
	return {
	  type: ActionType.MAP_DATA_SUCCESS,
	  payload: mapdata
	}
}

export const fetchTimeLineData = mapdata => {
	return {
	  type: ActionType.TIMELINE_DATA_SUCCESS,
	  payload: mapdata
	}
}