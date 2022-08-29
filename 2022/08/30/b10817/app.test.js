/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';
const input =
  process.platform === 'linux' &&
  fs
    .readFileSync(filePath)
    .toString()
    .split(' ')
    .map((item) => +item);

const solution = (numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[1];
};

process.platform === 'linux' && console.log(solution(input));

describe('세 수', () => {
  it('두 번째로 큰 정수를 출력합니다.', () => {
    expect(solution([20, 30, 10])).toBe(20);
  });
});
