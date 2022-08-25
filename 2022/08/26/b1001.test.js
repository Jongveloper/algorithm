/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

const solution = (str) => {
  const splitStr = str.split(' ').map((item) => +item);
  return splitStr[0] - splitStr[1];
};

// eslint-disable-next-line no-console
process.platform === 'linux' && console.log(solution(input));

describe('A-B', () => {
  it('A-B를 출력합니다.', () => {
    expect(solution('3 2')).toBe(1);
  });
});
