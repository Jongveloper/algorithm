/* eslint-disable no-restricted-syntax */

/**
 * 미지의 것
 * - 문자를 n만큼 반복한 문자열
 * 자료
 * - 반복문을 사용하여 문자열을 반복할 수 있다.
 * 조건
 * - 대소문자로 이루어져있다.
 * 계획
 * - 문자열의 길이만큼 반복문을 돌며 이중 반복으로 n만큼 반복문을 실행한다.
 * - str을 answer에 더해준다.
 * - answer를 리턴한다.
 * 반성
 */

// const solution = (str, n) => {
//   let answer = '';

//   for (const x of str) {
//     answer += x.repeat(n);
//   }

//   return answer;
// };

// const solution = (str, n) => {
//   return str
//     .split('')
//     .map((s) => s.repeat(n))
//     .join('');
// };

const solution = (str, n) => {
  return str.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
};

describe('문자열 반복 출력하기', () => {
  it('문자를 n만큼 반복한 문자열을 리턴합니다.', () => {
    expect(solution('hello', 3)).toBe('hhheeellllllooo');
  });
});
