/**
 * 734와 893을 칠판에 적었다면,
 * 상수는 이 수를 437과 398로 읽는다.
 * 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
 *
 * 주어지는 것 : 문자열
 * 구해야하는 것 : 각각의 문자열을 뒤집었을 때 큰 숫자
 */

/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString().trim();

const reverseNumber = (number) => {
  const splitNumber = number.split('');

  return splitNumber.reverse().join('');
};

const solution = (string) => {
  const splitString = string.split(' ');

  const A = splitString[0];
  const B = splitString[1];

  const reverseA = reverseNumber(A);
  const reverseB = reverseNumber(B);

  return reverseA > reverseB ? Number(reverseA) : Number(reverseB);
};

process.platform === 'linux' && console.log(solution(input));

describe('상수', () => {
  it('뒤집었을 때, 큰 숫자를 반환합니다.', () => {
    expect(solution('734 893')).toBe(437);
  });
  it('숫자를 뒤집습니다.', () => {
    expect(reverseNumber('734')).toBe('437');
  });
});
