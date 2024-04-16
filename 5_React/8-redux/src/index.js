import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import store from "./store";
import { Provider } from "react-redux";

// 가장 먼저 스토어 생성
const storeCreate = createStore(store);

// Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeCreate}>
    <App />
  </Provider>
);
