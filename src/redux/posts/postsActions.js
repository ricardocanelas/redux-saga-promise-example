import t from "../types";

const postRetrieveRequest = () => {
  return {
    type: t.POST_ALL_RETRIEVE_REQUEST,
    payload: null
  };
};

const postRetireveFinally = (data, error) => {
  return {
    type: t.POST_ALL_RETRIEVE_FINALLY,
    payload: data,
    error: error
  };
};

export default {
  all: {
    retrieveRequest: postRetrieveRequest,
    retrieveFinally: postRetireveFinally
  }
}
