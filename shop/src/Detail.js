/* eslint-disable */
import React from "react";
import styled from 'styled-components';
import { useHistory, useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  const history = useHistory();

  // useParams():  현재 URL에 적힌 모든 파라미터를 {파라미터1,파라미터2} 이런 식으로 저장해주는 함수
  // destructuring 문법을 이용해서 따로따로 변수로 빼서 저장
  let { id } = useParams(); // id라는 변수는 :id 자리에 있던 숫자를 의미

  // find(): 배열에서 조건을 만족하는 첫 번째 요소를 반환 (= 요소 1개를 반환)
  // Array 안에서 원하는 자료를 찾고 싶을 때 사용 + ES6 신문법(filter, 반복문 대체)
  // let foundItem = shoes.find(function (shoe) {
  //   return shoe.id === id;
  // });

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
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
};

export default Detail;
