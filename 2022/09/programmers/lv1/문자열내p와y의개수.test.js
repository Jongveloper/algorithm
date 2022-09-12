/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * p와 y의 개수가 같은지
 *
 * 자료
 * 문자열을 반복문을 돌며 p의 개수와 y의 개수를 카운팅할 수 있다.
 *
 * 조건
 * 문자열은 알파벳으로만 이루어져 있다.
 *
 * 계획
 * 문자열을 대문자로 통일한다.
 * 문자열을 반복문을 돌며 p와 y의 개수를 카운트 한다.
 * 반복문이 끝난 후,
 *
 *  p와 y의 개수가 같다면 true를 반환한다.
 *  p와 y의 개수가 같지 않다면 false를 반환한다.
 *
 * 반성
 * 예외 케이스를 생각하지 않고 계획을 세웠는데
 * 코드를 작성하기 전 알아차려 다행이었습니다.
 * 항상 예외에 대한 부분을 생각하며 계획을 세워야겠습니다.
 *
 * 문자열이 나온다면 정규표현식을 사용할 수 있을 지 항상 생각해봐야겠습니다.
 */

// 반복문
// const solution = (str) => {
//   const upperStr = str.toUpperCase();
//   let pCount = 0;
//   let yCount = 0;

//   for (const char of upperStr) {
//     if (char === 'P') {
//       pCount += 1;
//     }

//     if (char === 'Y') {
//       yCount += 1;
//     }
//   }

//   return pCount === yCount;
// };

// split
// const solution = (str) => {
//   return (
//     str.toUpperCase().split('P').length === str.toUpperCase().split('Y').length
//   );
// };

// 정규 표현식
const solution = (str) => {
  return str.match(/p/gi).length === str.match(/y/gi).length;
};

describe('문자열 내 p와 y의 개수', () => {
  it('p와 y의 개수가 같다면 true 같지 않다면 false를 반환합니다.', () => {
    expect(solution('pPoooyY')).toBe(true);
  });
});
