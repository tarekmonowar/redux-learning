import React from "react";
import { Provider } from "react-redux";
import Counter from "./react_redux_tutorials/counter";
import store from "./react-redux/count/store";
import Fetch from "./react_redux_tutorials/fetch";
import store2 from "./app/store.jsx";
import CounterView from "./features/counter/counterView.jsx";
import PostsView from "./features/post/postview.jsx";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      <Fetch />
      <h1>TR</h1>
      <Provider store={store2}>
        <CounterView />
      </Provider>
      <h1>TR</h1>
      <Provider store={store2}>
        <PostsView />
      </Provider>
      <h1>TR</h1>
    </>
  );
}
