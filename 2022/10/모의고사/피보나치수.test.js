/**
 * 미지의 것
 * - n의 피보나치 수
 * 자료
 * - DP를 통해 문제를 풀 수 있다.
 * 조건
 * - n은 2 이상 100,000 이하인 자연수이다.
 * 계획
 * - DP 테이블을 만든다.
 * -
 * 반성
 */

const solution = (n) => {
  const DP = [0, 1];

  for (let i = 1; i <= n; i += 1) {
    DP[i + 1] = DP[i] + (DP[i - 1] % 1234567);
  }

  return DP[n] % 1234567;
};

describe('피보나치 수', () => {
  it('피보나치 수를 1234567로 나눈 나머지를 리턴한다.', () => {
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(5);
  });
});
