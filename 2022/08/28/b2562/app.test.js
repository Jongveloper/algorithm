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
 * 구해야하는 것: 최댓값과 최댓값의 위치
 * 주어지는 것 : 배열
 *
 * 1. Math.max()를 활용해 최댓값을 구한 후 변수에 저장한다
 * 2. indexOf()메서드를 활용해 자리를 구한다.
 */

const solution = (array) => {
  const answer = [];

  const max = Math.max(...array);

  answer.push(max);

  const index = array.indexOf(max);

  answer.push(index + 1);

  return answer.join('\n');
};

if (process.platform === 'linux') {
  const max = Math.max(...input);

  console.log(max);
  console.log(input.indexOf(max) + 1);
}

describe('최댓값', () => {
  it('최댓값을 출력하고 최댓값이 몇 번째 수인지 출력합니다.', () => {
    expect(solution([3, 29, 38, 12, 57, 74, 40, 85, 61])).toEqual(`85\n8`);
  });
});
