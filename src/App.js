/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["남자 추천 코트", "강남 우동 맛집", "데이트 코스 추천"]);
  const [modal, setModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  // 과제: 버튼을 누르면 특정 글제목 바꾸기
  const changeTitle = () => {
    let newArr = [...title];
    newArr[0] = "여자 추천 코트";
    setTitle(newArr);
  };

  // 과제: 버튼을 누르면 제목을 글자순으로 정렬하기
  const sortTitle = () => {
    let newArr = [...title];
    newArr.sort();
    setTitle(newArr);
  };

  // 과제: 버튼을 한번 누르면 모달창이 열리고, 다시 한번 누르면 모달창이 닫히게 하기
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>제목바꾸기</button>
      <button onClick={sortTitle}>정렬하기</button>
      <button onClick={toggleModal}>모달창여닫기</button>
      {/* 과제: map 사용해서 반복되는 div 줄이기 */}
      {title.map((t, i) => {
        return (
          <div className="list">
            {/* 과제: 제목을 누르면 클릭한 제목이 들어간 모달창 띄우기 */}
            <h3
              onClick={() => {
                setClickedIndex(i);
                setModal(true);
              }}
            >
              {t}
            </h3>
            <p>2월 18일 발행</p>
            <p>상세내용</p>
            <hr />
          </div>
        );
      })}
      {modal ? <Modal title={title} clickedIndex={clickedIndex} setModal={setModal} /> : null}
    </div>
  );
}

const Modal = ({ title, clickedIndex, setModal }) => {
  return (
    <div className="modal" onClick={() => setModal(false)}>
      <h3>{title[clickedIndex]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
