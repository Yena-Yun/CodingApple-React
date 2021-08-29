import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// alert가 보이거나 안 보이거나 하는 상태 저장
// Cart.js에서만 쓰기 때문에 굳이 redux에 저장할 필요가 없음 => useState 사용
// let alert초기값 = true;

// reducer는 state 종류에 따라 여러 개 만들 수 있음
// function reducer2(state = alert초기값, 액션) {
function reducer2(state = true, 액션) {
  // 변수 안 만들고 초기값을 바로 넣기도 함 (길이가 짧을 때)
  if (액션.type === "숨김") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let 초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "이쁜신발", quan: 4 },
  { id: 2, name: "날랜신발", quan: 3 },
];

// reducer는 항상 state를 반환해야 함
function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    if (액션.payload.id === state.id) {
      return 액션.payload.id + 1;
    } else {
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    }
  }

  // 액션 = onClick으로 넘어오는 state 데이터 수정방법('이름'이라서 아무거나 적어도 됨)
  if (액션.type === "수량증가") {
    // deep copy (완전히 독립적인 사본 하나가 생김)
    let copy = [...state];
    // 사본 수정 (+1)
    copy[0].quan++;
    // 수정된 사본 반환
    return copy;

    // 액션명이 수량감소 이면
  } else if (액션.type === "수량감소") {
    // 사본 만들고
    let copy = [...state];
    // 사본 수정 (-1)
    copy[0].quan--;
    // 만약 감소하다가 갯수가 0이 되면 계속 0 반환
    if (copy[0].quan < 0) copy[0].quan = 0;
    // 사본 반환
    return copy;

    // 데이터가 수정이 안 됐으면
  } else {
    // 그냥 초기값 반환
    return state;
  }
}

// reducer를 여러 개 쓸 때: ','로 연결 x, combineReducers 사용 (import + 안에 reducer들은 객체형으로)
let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  // BrowserRouter 대신 HashRouter 사용 가능 -- 보안상의 이유
  // HashRouter를 사용하면 주소창 맨 뒤에 #이 생기는데 # 뒤에 적히는 것들은 서버에 전달되지 않음
  // ++ 이후 라우팅은 리액트가 알아서 하게 됨

  // 반면 BrowserRouter는 라우팅을 리액트가 아니라 '서버'에게 요청할 수도 있음 (위험)
  // 그래서 BrowserRouter를 사용한다면 서버 측에서 서버 라우팅을 방지하는 API를 작성해 두어야 함
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
