/**
 * 미지의 것
 * - 두 숫자의 곱이 자연수 n 인 순서쌍의 갯수
 * 자료
 * - 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 것
 * 조건
 * - 1 <= n <= 1,000,000
 * 계획
 * 1. answer 배열을 만든다.
 * 2. n만큼 반복문을 돌린다.
 * 3. 만약 n % i === 0 이면 answer 배열에 i를 넣는다.
 * 4. answer 배열의 길이를 리턴한다.
 *
 * 재귀
 * 1. solution(n, targetNumber = 1, divisorCount = 0) 함수를 만든다.
 * 2. 만약 targetNumber가 n보다 크다면 divisorCount를 리턴한다.
 * 3. 만약 n % targetNumber === 0 이면 solution(n, targetNumber + 1, divisorCount + 1)를 리턴한다.
 * 4. 만약 n % targetNumber !== 0 이면 solution(n, targetNumber + 1, divisorCount)를 리턴한다.
 *
 * 반성
 * 재귀로 풀어야할 때 간단함에도 불구하고 어떻게 접근해야할지 생각이 잘 나지 않았다.
 * 다시 알고리즘 문제를 열심히 풀어야겠다.
 */

// const solution = (n) => {
//   const answer = [];

//   for (let i = 0; i <= n; i += 1) {
//     if (n % i === 0) {
//       answer.push(i);
//     }
//   }

//   return answer.length;
// };

// const solution = (n, targetNumber = 1, divisorCount = 0) => {
//   if (targetNumber > n) {
//     return divisorCount;
//   }

//   if (n % targetNumber === 0) {
//     return solution(n, targetNumber + 1, divisorCount + 1);
//   }

//   return solution(n, targetNumber + 1, divisorCount);
// };

const solution = (n) => {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  return arr.reduce((count, targetNumber) => {
    if (arr.length % targetNumber === 0) {
      return count + 1;
    }

    return count;
  }, 0);
};

describe('몫 구하기', () => {
  it('num1을 num2로 나눈 나머지를 리턴합니다.', () => {
    expect(solution(20)).toBe(6);
  });
});
