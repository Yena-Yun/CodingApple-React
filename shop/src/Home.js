import React from "react";
import { Button } from "react-bootstrap";

const Home = ({ shoes }) => {
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
