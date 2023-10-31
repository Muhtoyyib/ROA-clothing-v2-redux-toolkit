import { createSlice } from "@reduxjs/toolkit";



export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categorieSlice = createSlice(
  {
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers:{
      setCategories( state, action ){
        state.categories = action.payload;
      }
    }
  }
)

export const { setCategories } = categorieSlice.actions;
export const categoriesReducer = categorieSlice.reducer;

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };


