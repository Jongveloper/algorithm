/**
 * 미지의 것
 * - n 을 x로 나눈 나머지가 1이되도록 하는 가장 작은 자연수 x
 *
 * 자료
 * - 재귀함수를 이용하여 n을 계속 나눠 답을 구할 수 있다.
 * - 반복문을 이용하여 n을 계속 나눠 답을 구할 수 있다.
 *
 * 조건
 * n은 3보다 크다
 *
 * 계획
 * - solution(number, divisor = 1) 재귀함수를 만든다.
 * - 만약 number % divisor === 1 이면 divisor를 리턴한다.
 * - 위에 조건이 충족이 안되면 divisor를 1증가시키며 재귀함수를 반복한다.
 *
 * 반성
 * 재귀가 어느정도 익숙해진 것 같은 느낌이 들어서 좋았지만
 * 항상 종료 조건에서 버벅이는 것이 있는 것 같습니다.
 * 재귀를 더욱 활용해봐야겠습니다.
 */

// 재귀
// const solution = (number, divisor = 1) => {
//   if (number % divisor === 1) {
//     return divisor;
//   }
//   return solution(number, divisor + 1);
// };

// 반복문
const solution = (number) => {
  for (let i = 1; i < number; i += 1) {
    if (number % i === 1) {
      return i;
    }
  }
};

describe('나머지가 1이 되는 수 찾기', () => {
  it('나머지가 1이 되는 수를 리턴합니다.', () => {
    expect(solution(10)).toBe(3);
    expect(solution(12)).toBe(11);
  });
});
