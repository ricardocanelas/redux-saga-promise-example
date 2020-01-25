import React, { useState } from "react";
import { useSelector } from "react-redux";
import useDispatchPromise from "./useDispatchPromise";
import actions from "./redux/actions";

export default function App() {
  const dispatch = useDispatchPromise(); // I wrapped the dispatch in a promise
  const posts = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);
  const [showButton, setShowButton] = useState(true);

  const handleClick = _e => {
    dispatch(actions.posts.all.retrieveRequest()).then(data => {
      // do something..
      console.log("Loaded", data.length, "posts");
      setShowButton(false);
    });
  };

  return (
    <div className="App">
      {showButton && (
        <button onClick={handleClick} disabled={loading}>
          {loading ? 'loading...' : 'Retrieve Posts'}
        </button>
      )}

      {posts.map(post => (
        <li key={post.id}>
          <div className="title">{post.title}</div>
          <p className="body">{post.body}</p>
        </li>
      ))}
    </div>
  );
}
