/**
 * 미지의 것
 * - 1로 만들기 위해 연산한 최솟값
 *
 * 자료
 * - x가 3으로 나누어 떨어지면, 3으로 나눈다.
 * - x가 2로 나누어 떨어지면, 2로 나눈다.
 * - 1을 뺀다.
 *
 *
 * 조건
 * x는 1보다 크거나 같고, 10^6보다 작거나 같은 정수이다.
 *
 * 계획
 * - 1. DP[] : x의 길이만큼 테이블을 0으로 초기화한다.
 * - 2. 반복문을 돌며 DP[i] = DP[i-1] + 1 을 채워준다 (현재의 수가 1을 빼는 경우)
 * - 3. i % 2 === 0 이면 DP[i] = Math.min(DP[i], DP[i/2] + 1)을 채워준다.
 * - 4. i % 3 === 0 이면 DP[i] = Math.min(DP[i], DP[i/3] + 1)을 채워준다.
 * -
 * 반성
 * 아직 DP 동작을 어떻게 하는지 정확하게 감이 오지 않습니다....!
 * DP 유형의 문제를 많이 풀어봐야 할 것 같습니다.
 */

// const input = require('fs').readFileSync('/dev/stdin').toString();

// const num = Number(input);

const solution = (number) => {
  const DP = new Array(number).fill(0);
  for (let i = 2; i <= number; i += 1) {
    DP[i] = DP[i - 1] + 1;
    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
  }

  return DP[number];
};

// console.log(solution(num));

describe('1로 만들기', () => {
  it('1로 만들기 위해 연산한 최솟 값을 출력합니다.', () => {
    expect(solution(2)).toBe(1);
    expect(solution(10)).toBe(3);
  });
});
