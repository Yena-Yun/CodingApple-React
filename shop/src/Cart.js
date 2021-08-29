import React from "react";
import { Table } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  // redux store에 있는 state를 꺼내쓰는 더 쉬운 방법 => useSelector
  // useSelector(콜백함수): 처음으로 꺼내지는 state = redux에 있던 state
  // 리턴값을 state라고 하면 state를 전부 다 들고오고, state.reducer 하면 그것만 들고옴
  let state = useSelector((state) => state.reducer);
  console.log(state);
  // 이제 props.state가 아닌 state.reducer로 가져와야 함
  console.log(state.reducer);
  console.log(state.reducer2);

  // dispatch도 더 이상 props.dispatch 사용 x => useDispatch
  let dispatch = useDispatch();

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
          {state.reducer.map((a, i) => {
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
                      dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량감소" });
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

// // reducer가 2개 이상이면 combineReducers에 의해 '객체' 형태로 넘어오므로
// // 뽑아 쓸 때도 객체 형태로 뽑아쓰기
// // state를props화 = mapStateToProps
// function state를props화(state) {
//   // connect에 의해 store의 reducer들(객체 형태)이 state 변수로 넘어옴
//   console.log(state);

//   return {
//     state: state.reducer,
//     alert열렸니: state.reducer2,
//   };
// }

export default Cart;
