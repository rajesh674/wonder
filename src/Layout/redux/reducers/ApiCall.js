import { ActionType } from "../actions/ActionType";

const initialState = {
  postUsers: [],
  upcomingUsers: [],
  mapData:[],
  timeLineData:[],
};
export const reducerPosts = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POSTS_USERS_SUCCESS:
      return {
        postUsers: action.payload,
      };
    default:
      return state;
  }
};


export const reducerUpcoming = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPCOMING_USERS_SUCCESS:
      return {
        upcomingUsers: action.payload,
      };
    default:
      return state;
  }
};
export const reducerMapData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MAP_DATA_SUCCESS:
      return {
        mapData: action.payload,
      };
    default:
      return state;
  }
};
export const reducerTimeLineData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TIMELINE_DATA_SUCCESS:
      return {
        timeLineData: action.payload,
      };
    default:
      return state;
  }
};
