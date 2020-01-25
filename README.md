This is a simple example of how you can return a promise in a dispatch. There is another way to do the same thing, for example using react-thunk. But I made a hook to wrapped a promise before dispatch an action.

[See a demonstration](https://ricardocanelas.github.io/redux-saga-promise-example)

## How to use

Make sure you have `useDispatchPromise`

```js
const Comp = () => {
  const dispatch = useDispatchPromise();

  const handleClick = () => {
    dispatch({ type: "RETRIEVE_POSTS" }).then(data => {
      // do something..
    }).catch(err => {
      // do something..
    })
  }
}
```

then in your saga function

```js
function* retrievePosts({ resolve, reject }) {
  // Get the resolve and reject by arguments..

  try {
    const response = yield call(fetch, "api/posts");
    data = yield response.json();
    resolve(data); // <----- IMPORTANT to resolve
  } catch (err) {
    reject(err); // <----- IMPORTANT to reject
  }
}
```

## UseDispatchPromise.js

```js
import { useDispatch } from "react-redux";

function useDispatchPromise() {
  const dispatch = useDispatch();
  const callDispatch = props => {
    return new Promise((resolve, reject) => {
      dispatch({ ...props, resolve, reject });
    });
  };

  return callDispatch;
}

export default useDispatchPromise;

```

I hope that can help you. I also structured the folders the way I like to use. Until now I can scale an app very well using in such a manner.

If there something that can improve the code, please share it with us in the [issue page](https://github.com/ricardocanelas/redux-saga-promise-example/issues) or make a PR.