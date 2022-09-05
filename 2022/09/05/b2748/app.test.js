/**
 * 미지의 것
 * n 번째 피보나치 수
 *
 * 자료
 * 피보나치 수는 0과 1로 시작한다.
 * 0번 째 피보나치 수는 0이고  1번 째 피보나치 수는 1이다.
 * 피보나치 수: F(n) = F(n-1) + F(n-2)
 * n이 4일 때,
 * F(2) = 1 + 0 = 1
 * F(3) = 1 + 1 = 2
 * F(4) = 1 + 2 = 3
 * 전에 더했던 값을 메모리에 넣어 놓으면 연산 속도를 줄일 수 있다.
 *
 * 조건
 * n은 90보다 작거나 같은 자연수이다.
 *
 * 계획
 * 동적 계획법을 통해 문제를 풀 것
 * 1. 처음 값은 [0, 1]이기 때문에 DP[0, 1]을 선언한다.
 * 2. number만큼 반복문을 돌며 DP[i + 1] = DP[i] + DP[i-1]을 할당한다.
 * 3. DP[number]를 리턴한다.
 *
 * 반성
 * DP를 잘 이해하지 못한 느낌이 듭니다..
 * 우선 많은 DP문제를 풀어보며 DP에 대한 감을 익힐 생각입니다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString() * 1;

const solution = (number) => {
  const DP = [0, 1];

  for (let i = 1; i < number; i += 1) {
    DP[i + 1] = BigInt(DP[i]) + BigInt(DP[i - 1]);
  }
  return DP[number].toString();
};

console.log(solution(input));

describe('피보나치', () => {
  it('n 번째 피보나치 수를 리턴합니다.', () => {
    expect(solution(4)).toBe(3);
    expect(solution(35)).toBe(9227465);
  });
});
