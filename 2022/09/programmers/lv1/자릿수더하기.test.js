/**
 * 미지의 것
 * 자연수 N의 각 자릿수의 합을 구해서 리턴한 값
 *
 * 자료
 * 숫자를 문자열로 문자열을 배열로 만들고 배열의 합을 구하면 간단히 값을 구할 수 있다.
 *
 * 숫자를 10으로 나눈 나머지를 구하면 각 자릿수를 구할 수 있다.
 *
 * 조건
 * N의 범위 : 100,000,000 이하의 자연수
 *
 * 계획
 * 1. 숫자를 문자열로 바꾼다.
 * 2. 문자열을 배열로 만든다.
 * 3. 배열의 합을 리턴한다.
 *
 * 반성
 * 코드를 작성할 때 코드의 순서에 주의해서 코드를 작성해야겠습니다.
 * 코드의 순서에 따라 완전히 다른 결과가 나오기 때문에
 * while문에서 다른 결괏값이 나왔습니다.
 */

// 문자열 방식
// const solution = (number) => {
//   return number
//     .toString()
//     .split('')
//     .map((item) => +item)
//     .reduce((acc, cur) => acc + cur, 0);
// };

// 재귀
// const solution = (number, sum = 0) => {
//   if (number <= 0) {
//     return sum;
//   }

//   return solution(Math.floor(number / 10), sum + (number % 10));
// };

// while
const solution = (number) => {
  let num = number;
  let sum = 0;

  while (num > 0) {
    sum += num % 10;

    num = Math.floor(num / 10);
  }

  return sum;
};

describe('자릿수 더하기', () => {
  it('자릿수의 합을 구합니다.', () => {
    expect(solution(123)).toBe(6);
  });
});
