
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
      case "ADD_DUMMY_PROJECT": {
          let copydata=state.data;
        return {
          ...state,
          data:  [{name:action.payload.title,description:action.payload.description}].concat(copydata)
        };
      }
      default:
        return state;
    }
  };