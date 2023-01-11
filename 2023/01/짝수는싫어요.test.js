/**
 * 미지의 것
 * - n 이하의 홀수가 오름차순 정렬된 배열
 * 자료
 * - i % 2 !== 0이면 홀수이다.
 * 조건
 *
 * 계획
 *
 * 반성
 */

// const solution = (n = 0) => {
//   const answer = [];

//   for (let i = 0; i < n; i += 1) {
//     if (i % 2 !== 0) {
//       answer.push(i);
//     }
//   }
//   return answer;
// };

// const solution = (n = 0, odd = []) => {
//   if (n === 0) {
//     return odd.sort((a, b) => a - b);
//   }

//   if (n % 2 !== 0) {
//     return solution(n - 1, [...odd, n]);
//   }

//   return solution(n - 1, odd);
// };

const solution = (n = 0) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  return arr.filter((num) => num % 2 !== 0);
};

describe('짝수는 싫어요', () => {
  it('홀수가 오름차순으로 담긴 배열을 리턴합니다.', () => {
    expect(solution(10)).toEqual([1, 3, 5, 7, 9]);
  });
});
