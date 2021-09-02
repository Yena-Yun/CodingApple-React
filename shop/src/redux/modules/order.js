// alert가 보이거나 안 보이거나 하는 상태 저장
// Cart.js에서만 쓰기 때문에 굳이 redux에 저장할 필요가 없음 => useState 사용

// let alert초기값 = true;

// reducer는 state 종류에 따라 여러 개 만들 수 있음
// function reducer2(state = alert초기값, 액션) {
// 변수 안 만들고 초기값을 바로 넣기도 함 (초기값 길이가 짧을 때)
export function reducer2(state = true, 액션) {
  if (액션.type === '숨김') {
    state = false;
    return state;
  } else {
    return state;
  }
}
