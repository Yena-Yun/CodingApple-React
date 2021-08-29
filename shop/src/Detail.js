/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { 재고context } from "./App";
import "./Detail.scss";
import { connect } from "react-redux";

const Detail = (props) => {
  const history = useHistory();
  const [alert, setAlert] = useState(true);
  const 재고 = useContext(재고context); // App에서 받아온 재고라는 state가 그대로 들어있음

  // useParams():  현재 URL에 적힌 모든 파라미터를 {파라미터1,파라미터2} 이런 식으로 저장해주는 함수
  // destructuring 문법을 이용해서 따로따로 변수로 빼서 저장
  let { id } = useParams(); // id라는 변수는 :id 자리에 있던 숫자를 의미

  // find(): 배열에서 조건을 만족하는 첫 번째 요소를 반환 (= 요소 1개를 반환)
  // Array 안에서 원하는 자료를 찾고 싶을 때 사용 + ES6 신문법(filter, 반복문 대체)
  // let foundItem = shoes.find(function (shoe) {
  //   return shoe.id === id;
  // });

  useEffect(() => {
    let alarm = setTimeout(() => {
      setAlert(false);
    }, 2000);

    // useEffect 안의 return + 함수는 컴포넌트가 사라질 때 return의 함수 실행
    return () => {
      clearTimeout(alarm); // clearTimeout: setTimeout 해제
    };
  }, [alert]); // alert라는 이름의 state가 변경이 될 때만 업데이트로 간주하고 실행

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([9, 10, 11]);
              props.dispatch({ type: "항목추가", payload: { id: 3, name: "컨버스화", quan: 1 } });
              // dispatch만 하면 새로고침 시 state가 모두 초기화됨 (추가된 항목을 볼 수 없음)
              //  => useHistory의 history.push로 cart로 바로 이동하면 새로고침이 발생하지 않아 화면에서 추가된 항목을 볼 수 있음 (페이지 강제이동)
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <div>
        <Info></Info>
      </div>
      {/* 첫 Detail 컴포넌트 로딩 시 2초간 띄우는 Alert */}
      {alert ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}
    </div>
  );
};

const Info = () => {
  const 재고 = useContext(재고context);
  return <p>재고: {재고} </p>;
};

function state를props화(state) {
  console.log(state);
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

export default connect(state를props화)(Detail);
