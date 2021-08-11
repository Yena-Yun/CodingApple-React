/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "데이트 추천 코스"]);
  let [날짜, 날짜변경] = useState("2월 17일 발행");
  let [is_모달창, is_모달창변경] = useState(false);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = "강남 고기 맛집";

  const 제목바꾸기 = (e) => {
    // 글제목은 state이므로 직접 수정할 수 없음 -> 그래서.. '복사본'을 만듦
    let newArr = [...글제목]; // spread 문법으로 기존 배열의 '사본' 만들기 (= deep copy)
    newArr[0] = "여자 코트 추천"; // 사본 배열을 가지고 원하는 내용 수정
    newArr[1] = "역삼 우동맛집";
    // 복사본을 set변경함수에 넣어서 변경된 사항 반영
    글제목변경(newArr); // 새로운 배열인 newArr를 글제목변경 함수에 넣기 (= state 통째로 갈아치우기)
  };

  // 과제: 버튼을 누르면 제목을 글자순으로 정렬하기
  const 정렬하기 = (e) => {
    let newArr = [...글제목];
    newArr.sort();
    글제목변경(newArr);
  };
  // (제목만 정렬됨 - post 자체를 정렬하지는 않음.. ㅠㅠ)

  // 과제: 버튼을 한번 누르면 모달창이 열리고, 다시 한번 누르면 모달창이 닫히게 하기
  const 모달창여닫기 = (e) => {
    is_모달창변경(!is_모달창);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {/* 미리 정의된 함수를 넣을 때는 '() =>' 를 넣지 않음 */}
      <button onClick={제목바꾸기}>제목변경버튼</button>
      <button onClick={정렬하기}>정렬하기버튼</button>
      <button onClick={모달창여닫기}>모달창여닫기버튼</button>

      <div className="list">
        <h3>
          {/* set변경함수 쓸 때는 반드시 '() =>' 넣기 */}
          {글제목[0]} <span onClick={() => 좋아요변경(좋아요 + 1)}>❤</span> {좋아요}
        </h3>
        <p>{날짜}</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>{날짜}</p>
        <hr />
      </div>
      <div className="list" onClick={() => is_모달창변경(true)}>
        <h3>{글제목[2]}</h3>
        <p>{날짜}</p>
        <hr />
      </div>

      {/* 리액트에서 텅빈 HTML을 의미하는 코드는 null이라는 자료형 */}
      {is_모달창 ? <Modal title={글제목[2]} date={날짜} closeModal={is_모달창변경} /> : null}
    </div>
  );
}

const Modal = ({ title, date, closeModal }) => {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>상세내용</p>
      <button onClick={() => closeModal(false)}>닫기</button>
    </div>
  );
};

export default App;
