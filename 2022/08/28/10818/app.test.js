/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split('\n');

const array =
  process.platform === 'linux' && input[1].split(' ').map((item) => +item);

/**
 * 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
 * 구해야 하는 것 : 배열의 최댓 값과 최솟값
 * 주어지는 것 : 배열
 *
 * 1. 자바스크립트의 내장 함수를 사용하여 문제를 풀이한다.
 */

const solution = (arr) => {
  const answer = [];

  answer.push(Math.min(...arr));

  answer.push(Math.max(...arr));

  return answer.join(' ');
};

// eslint-disable-next-line no-console
process.platform === 'linux' && console.log(solution(array));

describe('최소, 최대', () => {
  it('최솟값과 최댓값을 공백으로 구분해 출력합니다.', () => {
    expect(solution([20, 10, 35, 30, 7])).toBe('7 35');
  });
});
