/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - Jaden Case 문자열로 변환된 문자열
 * 자료
 * - 모든 단어의 첫 문자가 대문자이고 그 외의 알파벳은 소문자인 문자열이다.
 * - 공백을 기준으로 배열을 나눌 수 있다.
 * - 배열의 맨 앞부분을 추출할 수 있다.
 * - 문자를 대문자로 변환해주는 메서드를 사용할 수 있다.
 *
 * 조건
 * - 숫자로만 이루어진 단어는 없다.
 * - 숫자는 단어의 첫 문자로만 나온다.
 * - 공백문자가 연속해서 나올 수 있다.
 * 계획
 * - 문자를 공백을 기준으로 배열로 나눈다.
 * - 배열을 탐색하며 각 첫번째 요소를 대문자로 변환하여 answer배열에 넣는다.
 * - answer.join(' ')을 리턴한다.
 * 반성
 * 지금은 코드를 수정했지만 처음부터 소문자로 다 바꿔놓고 시작을 했었습니다.
 * 어차피 반복문을 통해 문자열을 탐색하면 i가 0일 때, 조건만 넣으면 되는데
 * 이 부분을 간과한 것 같습니다!
 * 앞으로는 처음부터 이런 부분을 잘 캐치해서 코드를 설계할 것입니다!
 */

const solution = (str) => {
  const strToArray = str.split(' ');

  const answer = [];

  for (const word of strToArray) {
    let jaden = '';
    for (let i = 0; i < word.length; i += 1) {
      if (i === 0) {
        jaden += word[i].toUpperCase();
      } else {
        jaden += word[i].toLowerCase();
      }
    }
    answer.push(jaden);
  }

  return answer.join(' ');
};

describe('JadenCase문자열 만들기', () => {
  it('JadenCase문자열이 리턴됩니다.', () => {
    expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');
  });
});
