/* eslint-disable no-restricted-globals */
/**
 * 구해야하는 것
 * - JadenCase가 된 문자열
 * 자료
 * - 맨 앞자리가 숫자면 대문자로 변경하지 않아도 된다.
 * - split으로 공백을 통해 단어를 구분할 수 있다.
 * - 재귀함수를 이용할 수 있다.
 * - 반복문도 이용할 수 있다.
 * 조건
 * - 숫자는 단어의 첫 문자로만 나온다.
 * - 숫자로만 이루어진 단어는 없다.
 * - 공백문자가 연속해서 나올 수 있다.
 * 계획
 * - split을 통해 문자를 나눈다.
 * - 문자열을 돌며 첫 글자가
 *    - 숫자가 아니면 첫 글자를 대문자로 만들고 다른 글자를 소문자로 변환한다.
 *    - 숫자라면 단어를 소문자화 시킨다.
 * 반성
 * 코드를 너무 복잡하게 짠 것 같고 기존에 쉽게 풀었던 난이도인데
 * 생각보다 푸는데 시간이 오래걸렸던 것 같습니다.
 * 알고리즘을 푸는 것도 열심히 해야겠습니다.
 */

const solution = (str) => {
  const toLowerStr = str.toLowerCase();
  const splitStr = toLowerStr.split(' ');
  const answer = [];

  for (let i = 0; i < splitStr.length; i += 1) {
    if (!isNaN(splitStr[i][0])) {
      answer.push(splitStr[i].toLowerCase());
    } else {
      let words = '';
      for (let j = 0; j < splitStr[i].length; j += 1) {
        if (j === 0) {
          words += splitStr[i][j].toUpperCase();
        } else {
          words += splitStr[i][j];
        }
      }
      answer.push(words);
    }
  }

  return answer.join(' ');
};

describe('JadenCase문자열 만들기', () => {
  it('jadenCase문자열이 만들어집니다.', () => {
    expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');
    expect(solution('for the last week')).toBe('For The Last Week');
  });
});
