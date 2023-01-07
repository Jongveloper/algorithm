/**
 * 미지의 것
 * - num1을 num2로 곱한 값
 * 자료
 * - 단순히 곱하면 된다...
 * 조건
 * - 0 < num1 <= 100
 * - 0 < num2 <= 100
 * 계획
 * - 단순히 곱하면 된다...
 * 반성
 */

const solution = (num1 = 0, num2 = 0) => {
  return num1 * num2;
};

describe('두 수의 곱', () => {
  it('num1을 num2로 곱한 몫을 리턴합니다.', () => {
    expect(solution(3, 4)).toBe(12);
  });
});
