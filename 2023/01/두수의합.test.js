/**
 * 미지의 것
 * - num1을 num2로 더한 값
 * 자료
 * - 단순히 더하면 된다..
 * 조건
 * - -50,000 < num1 <= 50,000
 * - -50,000 < num2 <= 50,000
 * 계획
 * - 단순히 더하면 된다...
 * 반성
 */

const solution = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

describe('두 수의 합', () => {
  it('num1과 num2를 더한 값을 리턴합니다.', () => {
    expect(solution(10, 5)).toBe(15);
  });
});
