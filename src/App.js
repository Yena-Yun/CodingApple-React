/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 고기 맛집', '데이트 추천 코스']);
  let [날짜, 날짜변경] = useState(['2월 17일', '2월 18일', '2월 19일']);
  let [좋아요, 좋아요변경] = useState(0);

  
  const 제목바꾸기 = (e) => {
    // spread 문법으로 기존 배열의 '사본'을 만든 다음 (deep copy)
    let newArr = [...글제목];
    // 그 사본을 가지고 원하는 내용 수정
    newArr[0] = '여자 코트 추천';
    // 새로운 배열인 newArr를 글제목변경함수에 넣어 state를 통째로 갈아치운다
    글제목변경(newArr);
  }

  // 과제: 버튼을 누르면 제목을 글자순으로 정렬하기

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>
      
      <div className="list">
        <h3>{ 글제목[0] }<span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> { 좋아요 }</h3>
        <p>{ 날짜[0] }</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>{ 날짜[1] }</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>{ 날짜[2] }</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
