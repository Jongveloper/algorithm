/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/**
 * 문제 :
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 *
 * 입출력 예
 * 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
 *
 * 미지의 것
 * n이 양의 정수 x의 제곱인지 판별
 *
 * 자료
 *   - n양의 정수다
 *   - x * x = n이면 x는 n의 제곱근이다.
 *
 * 조건
 *  - n 은 1 이상이다.
 * 계획
 * 1. Math.sqrt(n) === Math.floor(Math.sqrt(n))
 *    - true일 때,
 *       - n + 1을 제곱해준 값을 리턴
 *    - false일 때,
 *       - -1을 리턴
 *
 * 1. solution(number, count = 1) 재귀함수를 만들어준다.
 * 2. count ** 2 === number 이면 (number + 1) ** 2를 한다.
 * 3. count ** 2 > number 이면 -1을 리턴한다.
 * 반성
 * 코드를 작성할 때, 제곱근 + 1을 제곱해야하는데도 불구하고,
 * 문제를 제대로 읽지 않아서 제곱인 수에 제곱을 해서 원하는 결괏값이 나오지 않았습니다.
 * 문제를 풀 때, 조급하지 않은 마음을 가져야겠습니다.
 *
 * 코드의 중복이 많은데도 불구하고, 문제를 푸는데 급급해서
 * 코드의 퀄리티를 신경쓰지 못했습니다.
 *
 * 자바스크립트의 ** 연산자를 이용할 수 있음에도 이용하지 않았습니다.
 */

// 자바스크립트 내장 메서드 활용
// const solution = (number) => {
//   const squareRoot = Math.sqrt(number);
//   // if (!squareRoot.toString().includes('.')) {
//   if (Number.isInteger(squareRoot)) {
//     return (squareRoot + 1) ** 2;
//   }
//   return -1;
// };

// 재귀 함수
// const solution = (number, squareRoot = 1) => {
//   const squared = squareRoot ** 2;
//   if (squared === number) {
//     return (squareRoot + 1) ** 2;
//   }

//   if (squared > number) {
//     return -1;
//   }

//   return solution(number, squareRoot + 1);
// };

// while
// const solution = (number) => {
//   let squareRoot = 0;

//   while (true) {
//     const squared = squareRoot ** 2;

//     if (squared === number) {
//       return (squareRoot + 1) ** 2;
//     }

//     if (squared > number) {
//       return -1;
//     }

//     squareRoot += 1;
//   }
// };

/**
 * 이진 탐색
 * 계획
 * numbers = 1부터 number까지의 숫자가 담긴 배열을 생성한다.
 * start=0 , mid= Math.floor(end / start), end=numbers.length-1변수를 생성한다.
 *
 * mid ** 2 < number 이면 end= mid -1이 된다.
 * mid ** 2 > number 이면 start = mid + 1이 된다.
 *
 * 만약, start > end이면 -1을 반환한다.
 * mid ** 2 === number 이면 (mid+1) ** 2를 반환한다.
 */

// 0.058s

const solution = (number) => {
  let start = 1;
  let end = number;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    if (mid ** 2 > number) {
      end = mid - 1;
    }

    if (mid ** 2 < number) {
      start = mid + 1;
    }

    if (mid ** 2 === number) {
      return (mid + 1) ** 2;
    }
  }

  return -1;
};

describe('정수 제곱근 판별', () => {
  it('정수가 제곱근이면 +1 하고 제곱을 해서 리턴합니다.', () => {
    expect(solution(121)).toBe(144);
  });

  it('정수가 제곱근이 아니면 -1을 리턴합니다.', () => {
    expect(solution(3)).toBe(-1);
  });
});
