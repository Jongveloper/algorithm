/**
 * 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
 *
 * 주어지는 것 : 학생들의 점수
 * 구해야하는 것 : 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지
 *
 * 단계별로 생각하기
 * 1. 학생들의 평균을 구한다.
 * 2. 평균이 '넘는' 학생 수를 구한다.
 * 3. 평균이 넘는 학생수 / 전체 학생 수 * 100을 한 후 소수점 3자리까지 나타나게 한다.
 */
/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (array) => {
  const answer = [];

  for (let i = 1; i < array.length; i += 1) {
    const students = array[i].shift();
    const average = Math.floor(
      array[i].reduce((acc, cur) => acc + cur, 0) / students,
    );

    const difference = [];
    for (let j = 0; j < students; j += 1) {
      if (array[i][j] > average) difference.push(array[i][j]);
    }
    answer.push(`${((difference.length / students) * 100).toFixed(3)}%`);
  }

  return answer.join('\n');
};

process.platform === 'linux' && console.log(solution(input));

describe('평균은 넘겠지', () => {
  it('평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력', () => {
    expect(
      solution([
        [5],
        [5, 50, 50, 70, 80, 100],
        [7, 100, 95, 90, 80, 70, 60, 50],
        [3, 70, 90, 80],
        [3, 70, 90, 81],
        [9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
      ]),
    ).toBe('40.000%\n57.143%\n33.333%\n66.667%\n55.556%');
  });
});
