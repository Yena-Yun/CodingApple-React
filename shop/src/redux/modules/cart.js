let 초기값 = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '이쁜신발', quan: 4 },
];

// reducer는 항상 state를 반환해야 함
export function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {
    // 인덱스 찾기
    // findIndex(a => a === ??): 조건식이 맞으면 몇번째에 있는지를 퉤 뱉음 (반환값: 인덱스)
    let idx = state.findIndex((a) => a.id === 액션.payload.id);

    // 인덱스가 0보다 크거나 같으면
    if (idx >= 0) {
      // state 복사한 후
      let copy = [...state];
      // 해당 번째 state의 quan에 +1
      copy[idx].quan++;
      // 사본 반환
      return copy;

      // 인덱스가 0보다 작으면(= -1, 없음)
    } else {
      // state 복사하고
      let copy = [...state];
      // 받은 데이터를 통째로 추가한 다음에
      copy.push(액션.payload);
      // 사본 반환
      return copy;
    }

    // 액션 = onClick으로 넘어오는 state 데이터 수정방법('이름'이라서 아무거나 적어도 됨)
  } else if (액션.type === '수량증가') {
    // deep copy (완전히 독립적인 사본 하나가 생김)
    let copy = [...state];
    // 몇 번째 항목을 수정할 건지 id를 받아옴
    let index = 액션.payload.id;
    // 해당 번째 state의 quan에 +1
    copy[index].quan++;
    // 사본 반환
    return copy;

    // 액션명이 수량감소 이면
  } else if (액션.type === '수량감소') {
    // 사본 생성
    let copy = [...state];
    // 몇 번째 항목을 수정할 건지 id를 받아옴
    let index = 액션.payload.id;
    // 해당 번째 state의 quan에 -1
    copy[index].quan--;
    // 예외 처리 (수량에 마이너스 방지)
    // 만약 감소하다가 갯수가 0이 되면 계속 0 반환
    if (copy[index].quan < 0) copy[index].quan = 0;
    // 사본 반환
    return copy;

    // 데이터가 수정이 안 됐으면
  } else {
    // 그냥 초기값 반환
    return state;
  }
}
