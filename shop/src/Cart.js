import React from "react";
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

      {/* state를props화 함수에 의해 store의 state들이 props가 되었으므로
        key로 사용 + 앞에 'props' 붙이기 */}
      {props.alert열렸니 ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "숨김" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

// reducer가 2개 이상이면 combineReducers에 의해 '객체' 형태로 넘어오므로
// 뽑아 쓸 때도 객체 형태로 뽑아쓰기
function state를props화(state) {
  // connect에 의해 store의 reducer들(객체 형태)이 state 변수로 넘어옴
  console.log(state);

  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

export default connect(state를props화)(Cart);
