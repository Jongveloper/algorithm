/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split('\n');

/**
 * 주어지는 것 : 반복해야하는 숫자 , 문자열
 * 구해야하는 것 : 문자열의 문자를 숫자만큼 반복해서 반환 3 AB => AAABBB
 *
 * 1. 문자를 split한다.
 * 2. 그 후 반복문을 통해 새로운 배열에 문자를 숫자만큼 반복해서 넣는다.
 */

const solution = (array) => {
  const totalLength = array.shift();

  const result = [];

  for (let i = 0; i < totalLength; i += 1) {
    let answer = '';

    const [number, str] = array[i].split(' ');

    for (let j = 0; j < str.length; j += 1) {
      answer += str[j].repeat(number);
    }
    result.push(answer);
  }

  return result.join('\n');
};

process.platform === 'linux' && console.log(solution(input));

describe('문자열 반복', () => {
  it('각 문자를 R번 반복하는 문자열을 만든다.', () => {
    expect(solution([[1], '3 ABCDE'])).toBe('AAABBBCCCDDDEEE');
  });
});
