const initialState = {
        currentStep: 1,
      };
      
      function stepReducer(state = initialState, action) {
        switch (action.type) {
          case 'NEXT_STEP':
            return {
             ...state,
              currentStep: Math.min(state.currentStep + 1, 3),
            };
          case 'PREV_STEP':
            return {
             ...state,
              currentStep: Math.max(state.currentStep - 1, 1),
            };
          default:
            return state;
        }
      }
      
      export default stepReducer;
      