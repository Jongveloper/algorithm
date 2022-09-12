/**
 * 미지의 것
 * 자연수 n을 뒤집어 각 자리 숫자를 원소래 가지는 배열 형태를 리턴
 *
 * 자료
 * n.toString()을 이용하여 문자열로 만들 수 있다.
 * 문자열.split('')을 이용하여 배열로 만들 수 있다.
 * 배열.reverse()를 이용하여 문자열을 뒤집을 수 있다.
 *
 * 조건
 * n은 10,000,000,000이하인 자연수입니다.
 *
 * 계획
 * 1. n을 문자열로 변환한다.
 * 2. 문자열을 reverse로 뒤집는다.
 * 3. 문자열을 배열로 만들어 리턴한다.
 * 반성
 * reverse를 사용할 땐, 배열일 때 사용할 수 있는데
 * 문자열도 사용할 수 있는걸로 착각했습니다.
 * 고차 함수를 사용하거나 반복문을 사용할 때 매개변수 이름을 적절한 이름을 생각하지않고
 * 습관적으로 item, v, index로 표현하는 버릇을 고쳐야겠습니다.
 *
 * 숫자를 분리할 때, 문자열로 변경하는 것 뿐 아닌
 * 나머지연산자를 이용하는 습관을 들여야겠다는 생각이 들었습니다.
 */

// const solution = (number) => {
//   return number
//     .toString()
//     .split('')
//     .reverse()
//     .map((num) => +num);
// };

// while
// const solution = (number) => {
//   const numbers = [];

//   let num = number;

//   while (num > 0) {
//     numbers.push(num % 10);

//     num = Math.floor((num /= 10));
//   }

//   return numbers;
// };

// 재귀
const solution = (number, numbers = []) => {
  if (number <= 0) {
    return numbers;
  }

  numbers.push(number % 10);

  return solution(Math.floor(number / 10), numbers);
};

describe('자연수 뒤집어 배열로 만들기', () => {
  it('자연수를 뒤집어 배열로 만든 값을 리턴합니다.', () => {
    expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(solution(1)).toEqual([1]);
    expect(solution(20)).toEqual([0, 2]);
  });
});
