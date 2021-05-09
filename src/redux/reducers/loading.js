
const initialState={
    isLoading:false,
}
const startLoading = (state) => {
    return {
      ...state,isLoading:true
    }
  };
const stopLoading = (state) => {
    return {
      ...state,isLoading:false
    }
  };


const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "START-LOADING":
        return startLoading(state);
      case "STOP-LOADING":
        return stopLoading(state);
      default:
        return state;
    } 
  };
  
  export default loadingReducer;