/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 튜플을 배열에 담아 리턴한 값
 * 자료
 * - 문자를 split을 통해 나눌 수 있다.
 * - Set 생성자를 통해 중복을 제거할 수 있다.
 * 조건
 * - 숫자와 { } , 로만 이루어져있다.
 * 계획
 * - s를
 *   - { 로 split한다.
 *   - } 로 split한다.
 *   - , 로 split한다.
 * - object를 만들어 글자수가 나온 빈도를 파악한다.
 * - object를 배열로 만들어 값을 기준으로 정렬한다.
 * - 위에서 만든 것을 배열로 만들어 키만 존재하게끔 변경하여 리턴한다.
 *
 * 반성
 * - 어렵지 않은 문제임에도 푸는데 너무 복잡하게 생각했던 것 같습니다.
 *   문제를 단순하게 바라보는 연습이 많이 필요한 것 같습니다
 */

const solution = (str) => {
  const splitStr = str.split('{').join('').split('}').join('').split(',');
  const objStr = {};

  for (const nums of splitStr) {
    if (objStr[nums]) {
      objStr[nums] += 1;
    } else {
      objStr[nums] = 1;
    }
  }

  const sortable = [];

  for (const number in objStr) {
    sortable.push([number, objStr[number]]);
  }

  sortable.sort((a, b) => b[1] - a[1]);

  const answer = sortable.map((item) => {
    return Number(item[0]);
  });

  return answer;
};

describe('튜플', () => {
  it('튜플을 담은 배열을 리턴합니다.', () => {
    // expect(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')).toEqual([2, 1, 3, 4]);
    expect(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')).toEqual([3, 2, 4, 1]);
  });
});
