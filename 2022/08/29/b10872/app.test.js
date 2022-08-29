/**
 * 팩토리얼을 출력한다.
 */

/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

const solution = (number) => (number > 0 ? number * solution(number - 1) : 1);

console.log(Number(solution(input)));

describe('팩토리얼', () => {
  it('팩토리얼을 반환합니다.', () => {
    expect(solution(1)).toBe(1);
  });
});
