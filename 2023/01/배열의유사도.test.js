/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 두 배열의 같은 원소 개수
 * 자료
 * - filter를 사용할 수 있다.
 * 조건
 * - 원소는 알파벳 소문자로만 이루어져있다.
 * 계획
 * - filter를 통해 s1에 속한 s2의 요소만 남긴 배열을 만든다.
 * - 필터링한 배열의 길이를 리턴한다.
 */

// const solution = (s1, s2) => {
//   const answer = s2.filter((item) => {
//     for (const x of s1) {
//       if (x === item) {
//         return item;
//       }
//     }

//     return null;
//   }).length;

//   return answer;
// };

const solution = (s1, s2) => {
  const answer = s1.filter((x) => s2.includes(x)).length;

  return answer;
};

describe('배열의 유사도', () => {
  it('같은 원소의 개수를 리턴합니다.', () => {
    expect(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])).toBe(2);
  });
});
