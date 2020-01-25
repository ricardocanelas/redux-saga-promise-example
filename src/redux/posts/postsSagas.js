import { takeLatest, call, put, delay } from "redux-saga/effects";
import { toast } from "react-toastify";
import t from "../types";
import actions from "../actions";

function* retrievePosts({ resolve, reject }) {
  // after wrapped, I get the resolve and reject by arguments..
  let data = [];
  let error = null;
  try {
    yield delay(1000) // just for this example... to see the 'loading' status

    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts"
    );
    data = yield response.json();
    toast.success("Success Notification !");
    // ...and call the resolve here
    resolve(data);
  } catch (err) {
    error = err;
    toast.error("Error Notification !");
    // ...and call the reject here
    reject(err);
  } finally {
    // instead creating two actions (success and failure)
    // I just create one, and pass some information
    yield put(actions.posts.all.retrieveFinally(data, error));
  }
}

export default [
  takeLatest(t.POST_ALL_RETRIEVE_REQUEST, retrievePosts)
]