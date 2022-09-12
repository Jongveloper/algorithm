/* eslint-disable no-restricted-globals */
/**
 * 미지의 것
 * - 문자열을 숫자로 바꾼 값
 * 자료
 * - 0 : zero ... 9:nine
 * - 오브젝트를 사용하여 키(zero) 값(0)을 하면 값을 쉽게 찾을 수 있다.
 *
 * 조건
 * - 0으로 시작하는 경우는 주어지지 않는다.
 * 계획
 * - 오브젝트를 만든다.
 * - answer 변수를 선언한다.
 * - 반복문을 돌며 반복문 안에 words =''를 선언한다.
 * - words가 오브젝트의 키에 있는지 확인한다.
 * - words가 있다면 value값을 answer에 더해준다.
 * - 숫자라면 바로 answer에 더해준다.
 *
 * 반성
 * 어렵지 않은 문제지만 다른 유형으로 어떻게 풀어야할 지,
 * 아직은 감이 오지 않는 것 같습니다.
 * 문제를 많이 풀어서 여러 유형을 익혀야겠습니다!
 */

// 오브젝트
// const solution = (str) => {
//   const numbers = {
//     zero: '0',
//     one: '1',
//     two: '2',
//     three: '3',
//     four: '4',
//     five: '5',
//     six: '6',
//     seven: '7',
//     eight: '8',
//     nine: '9',
//   };
//   let answer = '';
//   let word = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (isNaN(str[i])) {
//       word += str[i];
//     } else {
//       answer += str[i].toString();
//     }
//     if (numbers[word]) {
//       answer += numbers[word];
//       word = '';
//     }
//   }
//   return Number(answer);
// };

const solution = (str) => {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let answer = str;

  for (let i = 0; i < numbers.length; i += 1) {
    const arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
};

describe('숫자 문자열과 영단어', () => {
  it('문자열을 숫자로 변경합니다.', () => {
    expect(solution('one4seveneight')).toBe(1478);
  });
});
