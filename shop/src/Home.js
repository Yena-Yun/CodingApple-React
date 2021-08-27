import React, { useState, useContext, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import { 재고context } from "./App";
import { CSSTransition } from "react-transition-group";
import "./Home.scss";

const Home = ({ shoes, setShoes }) => {
  const [loading, setLoading] = useState(false);
  const 재고 = useContext(재고context);
  // 몇 번째 탭을 눌렀는지 state로 저장
  const [누른탭, 누른탭변경] = useState(0);
  const [스위치, 스위치변경] = useState(false);

  return (
    <div>
      <div className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => (
            <Card shoes={shoe} idx={i} key={i} />
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
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                // 로딩을 끝냄
                setLoading(false);

                // shoes 상태는 배열([])
                //  => 따라서 변경함수 안에 들어갈 내용도 배열이 되어야 함
                //    배열 안에 기존 shoes는 그대로 넣어주고
                //    새로 받은 result의 'data'를 추가
                setShoes([...shoes, ...result.data]);
              })
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

      {/* defaultActiveKey: 기본적으로 눌려진 키 */}
      <Nav className="mt-5" defaultActiveKey="link-0" as="ul">
        <Nav.Item as="li">
          <Nav.Link
            href="/home"
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              스위치변경(false);
              누른탭변경(2);
            }}
          >
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* in: 애니메이션 동작 스위치 (true일 때만 애니메이션이 부여됨) */}
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
};

function TabContent({ 누른탭, 스위치변경 }) {
  useEffect(() => {
    스위치변경(true);
  });

  if (누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (누른탭 === 2) {
    return <div>2번째 내용입니다</div>;
  }
}

const Card = ({ shoes, idx }) => {
  const 재고 = useContext(재고context);
  return (
    <div className="col-md-4">
      {/* 중간에 ${} 쓰고 싶으면 그 줄 전체를 { }로 감싸야 */}
      <img src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`} alt="" width="100%" />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
      <Test></Test>
    </div>
  );
};

function Test() {
  const 재고 = useContext(재고context);

  return <p>재고: {재고}</p>;
}

export default Home;
