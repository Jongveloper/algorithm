/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split('\n');

/**
 * 주어지는 것 : 숫자
 * 구해야하는 것 : 숫자를 42로 나눈 나머지의 서로 다른 갯수
 *
 * 1. 숫자를 42로 나눈 나머지를 배열에 넣어준다.
 * 2. Set 메서드를 통해 uniqueArray를 만든다.
 * 3. uniqueArray의 length를 리턴한다.
 */

const solution = (arr) => {
  const remain = [];

  arr.forEach((v) => {
    remain.push(v % 42);
  });

  const setRemain = new Set(remain);

  const answer = [...setRemain].length;

  return answer;
};

process.platform === 'linux' && console.log(solution(input));

describe('나머지', () => {
  it('42로 나눈 나머지를 구하고 서로 다른 값이 몇 개 있는지 출력합니다.', () => {
    expect(solution([39, 40, 41, 42, 43, 44, 82, 83, 84, 85])).toBe(6);
  });
});
