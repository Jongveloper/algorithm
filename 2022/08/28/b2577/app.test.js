/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => +item);
/**
 * 구해야하는 것 : 3가지 숫자를 곱한 값의 등장하는 숫자 빈도 수
 * 주어지는 것 : 3가지 숫자
 *
 * 1. 숫자를 곱한 값을 변수로 선언한다.
 * 2. 곱한 값을 문자열로 변경한다.
 * 3. 각 숫자를 match를 이용하여 몇개 들어있는지 센다.
 *
 */

const solution = (array) => {
  const answer = [];

  const multiple = array.reduce((acc, cur) => acc * cur);

  const multipleToString = multiple.toString();

  for (let i = 0; i < 10; i += 1) {
    const regex = new RegExp(`${i}`, 'g');
    if (multipleToString.match(regex) === null) {
      answer.push(0);
    } else {
      answer.push(multipleToString.match(regex).length);
    }
  }

  return answer.join('\n');
};

process.platform === 'linux' && console.log(solution(input));

describe('숫자의 갯수', () => {
  it('세가지 숫자를 곱한 값의 숫자가 몇개 쓰였는지 출력', () => {
    expect(solution([150, 266, 427])).toBe(`3\n1\n0\n2\n0\n0\n0\n2\n0\n0`);
  });
});
