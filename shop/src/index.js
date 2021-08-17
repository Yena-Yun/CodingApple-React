import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // BrowserRouter 대신 HashRouter 사용 가능 -- 보안상의 이유
  // HashRouter를 사용하면 주소창 맨 뒤에 #이 생기는데
  // # 뒤에 적히는 것들은 서버에 전달되지 않고, 이후 라우팅은 리액트가 알아서 해줌

  // 반면, BrowserRouter는 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험
  // 그래서 BrowserRouter 사용 시 서버에서 서버 라우팅을 방지하는 API를 작성해둬야 함
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
