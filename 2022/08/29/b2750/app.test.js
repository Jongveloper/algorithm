/**
 * 오름차순 정렬하기
 */
/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (arr) => {
  const length = arr.shift();

  return arr.sort((a, b) => a - b).join('\n');
};

process.platform === 'linux' && console.log(solution(input));

describe('수 정렬하기', () => {
  it('오름차순으로 정렬한 결과가 나오게 한다.', () => {
    expect(solution([5, 5, 2, 3, 4, 1])).toBe('1\n2\n3\n4\n5');
  });
});
