import React, { useState, useContext, useEffect } from 'react';
import { Button, Nav, ListGroup, Card } from 'react-bootstrap';
import axios from 'axios';
import { 재고context } from './App';
import { useHistory } from 'react-router-dom';
import './Home.scss';

const Home = ({ shoes, setShoes }) => {
  const [loading, setLoading] = useState(false);
  const [watched, setWatched] = useState(false);
  const 재고 = useContext(재고context);

  return (
    <div>
      <div className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      {/* 최근 본 상품 조회 */}
      {watched ? (
        <div className="container">
          <Card style={{ width: '100%', marginTop: '2rem' }}>
            <Card.Header>최근 본 상품</Card.Header>
            <ListGroup variant="flush" style={{ minHeight: '15rem' }}>
              {shoes.map((shoe, i) => (
                <ListGroup.Item>
                  <ElCartRecent shoes={shoe} i={i} key={i} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      ) : null}

      {/* Home 화면 상품 */}
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => (
            <ElCard shoes={shoe} i={i} key={i} setWatched={setWatched} />
          ))}
        </div>
      </div>

      {/* 더보기 버튼 (누르면 서버에서 추가 데이터를 받아와서 보여줌) */}
      <p>
        <Button
          variant="primary"
          onClick={() => {
            // 로딩 시작
            setLoading(true);
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              // 성공하면
              .then((result) => {
                // 로딩을 끝냄
                setLoading(false);

                // shoes 상태는 배열([])
                //  => 따라서 변경함수 안에 들어갈 내용도 배열이 되어야 함
                //    배열 안에 기존 shoes는 그대로 넣어주고
                //    새로 받은 result의 'data'(key값이 아니라 여기서는 문법)를 추가
                setShoes([...shoes, ...result.data]);
              })
              // 실패하면
              .catch((e) => {
                console.log(e);
                // 로딩을 끝내고
                setLoading(false);
                // 실패 시 UI 반환
                return <div>로딩에 실패하였습니다. 다시 시도해 주세요</div>;
              });
          }}
        >
          더보기
        </Button>
      </p>
      {/* 로딩중 UI */}
      {loading ? <div>로딩 중입니다..</div> : null}
    </div>
  );
};

const ElCard = (props) => {
  const 재고 = useContext(재고context);
  const history = useHistory();

  return (
    // 메인페이지에 있는 각 상품 카드를 눌렀을 때 상세페이지로 이동
    // (Card에 onClick으로 주는 게 아니라 Card의 div에 줘야 함)
    <div>
      <ElCartRecent shoes={props.shoes} setWatched={props.setWatched} />
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test></Test>
    </div>
  );
};

function Test() {
  const 재고 = useContext(재고context);

  return <p>재고: {재고}</p>;
}

function ElCartRecent(props) {
  const 재고 = useContext(재고context);
  const history = useHistory();
  console.log(props);

  const setLocalStorage = () => {
    let copy = new Set();
    copy.add(parseInt(props.shoes.id));
    localStorage.setItem('watched', copy);
  };

  return (
    // 메인페이지에 있는 각 상품 카드를 눌렀을 때 상세페이지로 이동
    // (Card에 onClick으로 주는 게 아니라 Card의 div에 줘야 함)
    <div
      className="col-md-4"
      onClick={() => {
        setLocalStorage();
        props.setWatched(true);
        history.push('/detail/' + props.shoes.id);
      }}
    >
      {/* 중간에 ${} 쓰고 싶으면 그 줄 전체를 { }로 감싸야 */}
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoes.id + 1
        }.jpg`}
        alt=""
        width="70%"
      />
      <h4>{props.shoes.title}</h4>
    </div>
  );
}

export default Home;
