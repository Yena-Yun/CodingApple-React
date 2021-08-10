/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";

function App() {
  let [likes, setLikes] = useState(0);
  let [posts, setPosts] = useState([
    {
      id: 0,
      title: "남자 코트 추천",
      date: Date.now,
      likes: likes,
    },
    {
      id: 1,
      title: "강남 고기 맛집",
      date: Date.now,
      likes: likes,
    },
    {
      id: 2,
      title: "데이트 추천 코스",
      date: Date.now,
      likes: likes,
    },
  ]);

  // let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 고기 맛집", "데이트 추천 코스"]);
  // let [날짜, 날짜변경] = useState(["2월 17일", "2월 18일", "2월 19일"]);

  // const 제목바꾸기 = (e) => {
  //   // spread 문법으로 기존 배열의 '사본'을 만든 다음 (deep copy)
  //   let newArr = [...글제목];
  //   // 그 사본을 가지고 원하는 내용 수정
  //   newArr[0] = '여자 코트 추천';
  //   // 새로운 배열인 newArr를 글제목변경함수에 넣어 state를 통째로 갈아치운다
  //   글제목변경(newArr);
  // }

  // // 과제: 버튼을 누르면 제목을 글자순으로 정렬하기
  // const 정렬하기 = (e) => {
  //   let newArr = [...글제목];
  //   newArr.sort();
  //   글제목변경(newArr);
  // };
  // // (제목만 정렬됨. post 자체를 정렬하지는 않음)

  const postList = posts.map((post) => (
    <li key={post.id}>
      <h3>
        {post.title}
        <span
          onClick={() => {
            setLikes(post.likes + 1);
          }}
        >
          👍
        </span>
        {likes}
      </h3>
      <p>{post.date}</p>
      <hr />
    </li>
  ));

  return (
    <>
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {/* <button onClick={정렬하기}>버튼</button> */}

      <ul>{postList}</ul>

      <Modal />
    </>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

// const Post = ({ key, title, date, setLikes }) => {
//   let id = key.map((i) => i);
//   let t = title.map((t) => t);
//   let d = date.map((d) => d);

//   let post = () => {
//     return (

//     );
//   };

//   console.log(post);

//   return <ul className="list">{post}</ul>;
// };

export default App;
