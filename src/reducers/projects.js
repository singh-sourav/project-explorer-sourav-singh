
const initialState = {
    data: [],
  };
  
  export const projects = (state = initialState, action) => {
    switch (action.type) {
      case "INSERT_PROJECTS": {
        return {
          ...state,
          data: action.payload.data
        };
      }
      default:
        return state;
    }
  };