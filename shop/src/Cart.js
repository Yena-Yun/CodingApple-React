import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      // props에서 dispatch를 꺼내는 게 아니라 reducer에 데이터 수정요청을 하는 것
                      // dispatch 안에 어떤 요청을 할 건지 'type'의 value로 넣어줌
                      // (connect로 reducer에서 state를 받아와서 props로 만들면서 그 어딘가에서 dispatch도 받아옴 -> 따로 import 안 해도 됨)
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

function state를props화(state) {
  return {
    state: state,
  };
}

export default connect(state를props화)(Cart);
