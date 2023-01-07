/**
 * 미지의 것
 * - num1 에서 num2를 뺀 값
 * 자료
 * - 단순히 빼면 된다..
 * 조건
 * - -50,000 <= num1 <= 50000
 * - -50,000 <= num2 <= 50000
 * 계획
 * - 단순히 빼면 된다..
 * 반성
 */

const solution = (num1 = 0, num2 = 0) => {
  return num1 - num2;
};

describe('두 수의 차', () => {
  it('num1에서 num2를 뺀 값을 리턴한다.', () => {
    expect(solution(2, 3)).toBe(-1);
  });
});
