/**
 * 미지의 것
 * - n개의 숫자를 담은 배열의 최소 공배수
 * 자료
 * - 배열에 담긴 숫자들이 같은 숫자로 나눴을 때 나누어 떨어지면 나누어
 *   떨어지는 수가 해당 배열의 최소공배수이다.
 * 조건
 *
 * 계획
 * - lcm 변수를 0으로 초기화하여 선언한다.
 * - 반복문을 돌며 lcm으로 해당 배열의 수들이 전부 나누어 떨어질 때까지
 *   lcm += 1을 한다.
 * 반성
 */

const solution = (arr) => {
  const max = Math.max(...arr);

  let i = 0;
  let multiple = 1;

  while (true) {
    if (i >= arr.length) {
      break;
    }
    if ((max * multiple) % arr[i] === 0) {
      i += 1;
    } else {
      i = 0;
      multiple += 1;
    }
  }

  return max * multiple;
};

describe('n개의 최소 공배수', () => {
  it('n개의 숫자를 담은 배열의 최소공배수를 리턴합니다.', () => {
    expect(solution([2, 6, 8, 14])).toBe(168);
    expect(solution([1, 2, 3])).toBe(6);
  });
});
