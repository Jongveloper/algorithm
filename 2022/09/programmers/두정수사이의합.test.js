/**
 * 미지의 것
 * - 두 정수 a,b가 주어졌을 때 a와 b사이의 모든 정수의 합
 * 자료
 * - a부터 b까지 숫자가 담겨있는 배열을 만들 수 있다.
 * - 배열을 합해서 미지의 것을 구할 수 있다.
 * - a와 b가 같은 경우 둘 중 아무 수나 리턴한다.
 *    - 계산을 하지 않는다.
 * - a가 b보다 클 경우
 *    - a부터 b까지 숫자가 담겨있는 배열을 만든다.
 * - b가 a보다 클 경우
 *    - b부터 a까지 숫자가 담겨있는 배열을 만든다.
 *
 * 조건
 * a와 b는 -10,000,000 이상 10,000,000 이하인 정수이다.
 * a와 b가 같은 경우는 둘 중 아무 수나 리턴한다.
 * a와 b의 대소관계는 정해져있지 않는다.
 *
 * 계획
 * -solution
 * a와 b를 비교하여 큰 수를 담는 변수와 작은 수를 담는 변수를 만든다.
 * 배열을 만드는 함수를 만든다.
 *
 * - createArray
 * small부터 big까지 배열을 만들고 리턴한다.
 *
 * 반성
 * 예외처리를 하는 부분을 계획 부분에서 생각을 해야할 것 같습니다.
 * createArray에서 예외처리를 하지 않고 처음 함수인 solution에서 하는게 더 좋은데
 * 이 부분에 대한 계획을 세우지 않다보니 처음에 값을 받았을 때 바로 리턴을 할 수 있었음에도
 * 코드가 돌고 createArray까지 가야 리턴을 하게 끔 설계하였습니다.
 * 예외처리 부분에 대해서 항상 생각하면서 계획을 세워야겠습니다!
 */

const createArray = (s, b, array = []) => {
  array.push(s);

  if (s === b) return array;

  return createArray(s + 1, b, array);
};

const solution = (a, b) => {
  if (a === b) return a;
  const big = a > b ? a : b;
  const small = a < b ? a : b;

  const numbers = [];

  for (let i = small; i <= big; i += 1) {
    numbers.push(i);
  }

  // return createArray(small, big).reduce((acc, cur) => acc + cur, 0);
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

describe('두 정수 사이의 합', () => {
  it('두 정수의 합을 리턴합니다.', () => {
    expect(solution(3, 5)).toBe(12);
    expect(solution(3, 3)).toBe(3);
    expect(solution(5, 3)).toBe(12);
    expect(solution(1, 4)).toBe(10);
  });

  it('s ~ b까지의 배열을 반환한다', () => {
    expect(createArray(3, 5)).toEqual([3, 4, 5]);
  });
});
