/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().trim().split('\n');

const array =
  process.platform === 'linux' && input[1].split(' ').map((item) => +item);

/**
 * 문제 : 세준이는 기말고사를 망쳤다.
 * 세준이는 점수를 조작해서 집에 가져가기로 했다.
 *  일단 세준이는 자기 점수 중에 최댓값을 골랐다.
 *  이 값을 M이라고 한다.
 * 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
 * 예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
 *
 * 구해야 하는 것 : 새로운 평균
 * 주어지는 것 : 기존 점수 배열
 *
 * 1. 주어진 배열에 최댓값을 구한다.
 * 2. 각 배열에 i / 최댓값 * 100을 한다.
 * 3. 평균을 구한다.
 */

const solution = (arr) => {
  const max = Math.max(...arr);

  const newArr = arr.map((score) => (score / max) * 100);

  const average = newArr.reduce((acc, cur) => acc + cur, 0) / newArr.length;

  const remain = newArr.reduce((acc, cur) => acc + cur, 0) % newArr.length;

  return remain === 0 ? average.toFixed(1) : average;
};

process.platform === 'linux' && console.log(solution(array));

describe('평균', () => {
  it('새로운 평균을 출력합니다.', () => {
    expect(solution([40, 80, 60])).toBe('75.0');
  });
});
