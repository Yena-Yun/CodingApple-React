/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import 재고context from "./App";

const Detail = ({ shoes, 재고, 재고변경 }) => {
  const history = useHistory();
  const [alert, setAlert] = useState(true);
  const 재고문맥 = useContext(재고context); // App에서 받아온 재고라는 state가 그대로 들어있음

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
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}원</p>
          <button className="btn btn-danger" onClick={() => 재고변경([9, 10, 11])}>
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
        <Info 재고={재고} 재고변경={재고변경}></Info>
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

const Info = ({ 재고 }) => {
  return <p>재고: {재고} </p>;
};

export default Detail;
