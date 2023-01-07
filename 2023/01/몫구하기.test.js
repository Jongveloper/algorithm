/**
 * 미지의 것
 * - num1을 num2로 나눈 값
 * 자료
 * - 단순히 나누면 된다...
 * 조건
 * - 0 < num1 <= 100
 * - 0 < num2 <= 100
 * 계획
 * - 단순히 나누면 된다...
 * 반성
 */

const solution = (num1 = 0, num2 = 0) => {
  return Math.floor(num1 / num2);
};

describe('몫 구하기', () => {
  it('num1을 num2로 나눈 몫을 리턴합니다.', () => {
    expect(solution(10, 5)).toBe(2);
  });
});
