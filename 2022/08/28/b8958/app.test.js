/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split('\n');

const arr = process.platform === 'linux' && input;
/**
 * "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다.
 * O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
 * 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
 * 예를 들어, 10번 문제의 점수는 3이 된다.
 * "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
 *
 * 구해야하는 것 : 점수
 * 주어지는 것 : 배열
 *
 * 1. 이중 배열 안에 배열을 탐색하며 점수를 계산한다.
 * 2. 점수를 계산할 때 앞의 문자가 O라면 +1을 누적하며 계산한다.
 * 3. X를 만나면 누적 값이 0이된다.
 */

const solution = (array) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    let score = 0;
    let acc = 0;
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i][j].length; k++) {
        if (array[i][j][k] === 'O') {
          acc += 1;
          score += acc;
        } else {
          acc = 0;
        }
      }
    }
    answer.push(score);
  }
  return answer.join('\n');
};

process.platform === 'linux' && console.log(solution(arr));

describe('OX퀴즈', () => {
  it('점수를 반환합니다.', () => {
    expect(
      solution([
        ['OOXXOXXOOO'],
        ['OOXXOOXXOO'],
        ['OXOXOXOXOXOXOX'],
        ['OOOOOOOOOO'],
        ['OOOOXOOOOXOOOOX'],
      ]),
    ).toBe('10\n9\n7\n55\n30');
  });
});
