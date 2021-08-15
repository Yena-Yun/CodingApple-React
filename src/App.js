/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["남자 추천 코트", "강남 우동 맛집", "데이트 코스 추천"]);
  const [likes, setLikes] = useState(0);
  const [modal, setModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [input, setInput] = useState("");

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

  // 과제: input값 처리
  const onChange = (e) => {
    // e.target.value: 사용자가 입력한 값 (정해진 문법)
    // (e.target: 이벤트가 발생한 타겟 요소 = 인풋창, value: 그 인풋창 내의 값)
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const onClick = () => {
    // concat 쓰면 사본 만들 필요 없지만 맨 뒤에 값이 추가됨
    // const newTitle = title.concat(input);

    // 배열의 사본을 만들고
    const newTitle = [...title];
    // 사본 배열을 가지고 값 추가 등 배열을 수정한 뒤
    newTitle.unshift(input); // unshift: 배열의 맨앞에 값 추가
    // set에 넣어서 업데이트
    setTitle(newTitle);
    // input창 초기화
    setInput("");
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
          <div
            className="list"
            key={i}
            onClick={() => {
              setClickedIndex(i);
              setModal(true);
            }}
          >
            {/* 과제: 글을 누르면 클릭한 글의 제목이 들어간 모달창 띄우기 */}
            <h3>{t}</h3>
            <p>2월 18일 발행</p>
            <p>상세내용</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        {/* onChange: 인풋창에 뭔가 입력이 될 때 안의 함수가 실행됨 */}
        <input value={input} onChange={onChange} />
        <button onClick={onClick}>저장</button>
      </div>

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
