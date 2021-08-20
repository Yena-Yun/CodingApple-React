import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Home = ({ shoes, setShoes }) => {
  const [loading, setLoading] = useState(false);

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
    </div>
  );
};

const Card = ({ shoes, idx }) => {
  return (
    <div className="col-md-4">
      {/* 중간에 ${} 쓰고 싶으면 그 줄 전체를 { }로 감싸야 */}
      <img src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`} alt="" width="100%" />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
    </div>
  );
};

export default Home;
