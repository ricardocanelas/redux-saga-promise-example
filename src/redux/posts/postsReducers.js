import t from "../types";

const InitialState = {
  data: [],
  status: null
};

const postsReducers = (state = InitialState, action) => {
  console.log("Type", action.type);

  switch (action.type) {
    case t.POST_ALL_RETRIEVE_REQUEST: {
      return {
        ...state,
        data: [],
        loading: true,
        error: null
      };
    }
    case t.POST_ALL_RETRIEVE_FINALLY: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducers