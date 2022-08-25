/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

const solution = (str) => {
  const answer = [];

  const splitStr = str.split(' ').map((item) => +item);

  const A = splitStr[0];

  const B = splitStr[1];

  answer.push(A + B);
  answer.push(A - B);
  answer.push(A * B);
  answer.push(Math.floor(A / B));
  answer.push(A % B);

  return answer.join('\n');
};

// eslint-disable-next-line no-console
process.platform === 'linux' && console.log(solution(input));

describe('사칙연산', () => {
  it('첫 줄 + 둘째 줄 - 셋째 줄 * 넷째 줄 / 다섯째 줄 %를 출력', () => {
    expect(solution('7 3')).toBe('10\n4\n21\n2\n1');
  });
});
