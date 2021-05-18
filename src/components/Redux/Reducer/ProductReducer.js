import {
  CREATE_PRODUCT,
  RETRIEVE_PPRODUCTS,
  // UPDATE_TUTORIAL,
  // DELETE_TUTORIAL,
  // DELETE_ALL_TUTORIALS,
} from "../Actions/Actiontypes";

const initialState = [];

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...state, payload];

    case RETRIEVE_PPRODUCTS:
      return payload;

    // case UPDATE_TUTORIAL:
    //   return tutorials.map((tutorial) => {
    //     if (tutorial.id === payload.id) {
    //       return {
    //         ...tutorial,
    //         ...payload,
    //       };
    //     } else {
    //       return tutorial;
    //     }
    //   });

    // case DELETE_TUTORIAL:
    //   return tutorials.filter(({ id }) => id !== payload.id);

    // case DELETE_ALL_TUTORIALS:
    //   return [];

    default:
      return state;
  }
};

export default ProductReducer;
