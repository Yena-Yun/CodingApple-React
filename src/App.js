import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 리액트 개발자들이 하는 일
  // 서버에서 가져온 데이터(posts)
  // let posts = '강남 고기 맛집'
  // style도 변수로 작성 가능
  let posts = { color: 'blue', fontSize: '30px'}

  // 전통적인 JS 데이터 바인딩
  // document.getElementById().innerHTML = ''?

  // 리액트에서는 이렇게 할 필요 없음
  // JSX 문법 사용: { } 안에 변수명
  // (JSX = 리액트에서의 HTML 대용품)

  function 함수() {
    return 100
  }
  함수() // '함수' 실행 (html에서 보여줄 때도 () 넣어서 똑같이)

  return (
    <div className="App">
      {/* { }의 사용처는 무궁무진함 - className에도 사용 가능 */}
      {/* (아래의 경우 - Elements 탭에서 확인하면 <div className="강남 고기 맛집"> 이라고 들어가 있음) */}
      {/* <div className={ posts }> */}
      <div className="black-nav">
        <div style={posts}>개발 Blog</div>
      </div>
      {/* 이미지 가져올 때는 위에서 import한 후에 { } 쓰고 안에 '변수'로 가져온다 (리액트에서는 html처럼 "" 쓰지 않음) */}
      <img src={logo} alt="" />
      {/* 그걸 여기에 보여줘야 함 (= 데이터 바인딩) */}
      <h4>{ 함수() }</h4> 
    </div>
  );
}

export default App;
