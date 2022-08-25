/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input = process.platform === 'linux' && fs.readFileSync(filePath);

const solution = (number) => {
  let answer = '';

  if (number >= 90) {
    answer += 'A';
  } else if (number >= 80) {
    answer += 'B';
  } else if (number >= 70) {
    answer += 'C';
  } else if (number >= 60) {
    answer += 'D';
  } else answer += 'F';

  return answer;
};

// eslint-disable-next-line no-console
process.platform === 'linux' && console.log(solution(input));

describe('시험 성적', () => {
  it('성적을 출력합니다.', () => {
    expect(solution(100)).toBe('A');
    expect(solution(90)).toBe('A');
  });
});
