/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

/**
 *영어 대소문자와 공백으로 이루어진 문자열이 주어진다.
 * 이 문자열에는 몇 개의 단어가 있을까?
 * 이를 구하는 프로그램을 작성하시오.
 * 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.
 *
 * 구해야하는 것 : 단어의 갯수
 * 주어지는 것 : 문자열
 *
 * 1. 주어지는 문자열을 공백을 기준으로 split한다.
 * 2. 거기서 빈 문자열은 제외한다.
 * 3. 해당 split한 배열의 length를 리턴한다.
 */

const solution = (str) => {
  const answer = str.trim().split(' ');

  if (answer[0] === '') {
    return 0;
  }

  return answer.length;
};

process.platform === 'linux' && console.log(solution(input));

describe('단어의 갯수', () => {
  it('단어의 갯수를 출력한다.', () => {
    expect(solution('')).toBe(0);
  });
});
