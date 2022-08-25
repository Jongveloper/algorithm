/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

const solution = (str) => {
  return str
    .split(' ')
    .map((item) => +item)
    .reduce((a, b) => a / b);
};

// eslint-disable-next-line no-console
process.platform === 'linux' && console.log(solution(input));

describe('A/B', () => {
  it('A/B를 출력합니다.', () => {
    // expect(solution('1 3')).toBe(0.33333333333333333333333333333333);
    expect(solution('4 5')).toBe(0.8);
  });
});
