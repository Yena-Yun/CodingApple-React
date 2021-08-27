import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = ({ state }) => {
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
          {state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button>+</button>
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
