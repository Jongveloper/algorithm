/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 짝수번째 알파벳은 대문자로 홀수번째 알파멧은 소문자로 바꾼 문자열
 *
 * 자료
 * - toUpperString()과 toLowerCase()를 사용하면 문자를 대문자 / 소문자로 변경할 수 있다.
 * - 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야 한다.
 * - 공백을 기준으로 배열로 만들 수 있는 split(' ')을 사용할 수 있다.
 * - 첫 번째 글자는 0으로 보아 짝수번째 알파벳으로 처리해야한다.
 *
 * 조건
 *
 * 계획
 * 1. 문자열을 공백 기준으로 나눠 배열로 만든다.
 * 2. 배열의 요소를 탐색하며 짝수는 대문자 홀수는 소문자로 바꾼다.
 * 3. join(' ')을 통해 문자열로 만들어 준다.
 * 반성
 * 문제를 풀 때, 너무 짧게 생각하고 문제를 접근하는 것 같다.
 * 문제를 풀 때, 신중하게 생각하는 습관을 들여야겠다.
 */

const solution = (word) => {
  const words = word.split(' ');

  const answer = [];

  for (const str of words) {
    let newWords = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        newWords += str[i].toUpperCase();
      } else {
        newWords += str[i].toLowerCase();
      }
    }
    answer.push(newWords);
  }

  return answer.join(' ');
};

describe('이상한 문자 만들기', () => {
  it('짝수번째는 대문자, 홀수는 소문자로 바꾼다.', () => {
    expect(solution('try hello world')).toBe('TrY HeLlO WoRlD');
  });
});
