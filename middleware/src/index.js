import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import tất cả cá thuộc tính cần thiết 
import Counter from "./Counter";
import { reducer } from "./reducer";

// The store holds the data
const store = createStore(reducer);

// The App renders everything
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// The Provider passes the store through the app
// so connect() can access it
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
