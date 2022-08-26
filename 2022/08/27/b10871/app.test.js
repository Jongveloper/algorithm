const fs = require('fs');

const filePath = process.platform && '/dev/stdin';
const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split('\n');

// const [linuxLen, linuxTarget] = input[0].split(' ').map((item) => +item);
// const array = input[1].split(' ').map((item) => +item);

const solution = (len, target, arr) => {
  const answer = [];

  for (let i = 0; i < len; i += 1) {
    if (arr[i] < target) answer.push(arr[i]);
  }
  return answer.join(' ');
};

// console.log(solution(linuxLen, linuxTarget, array));

describe('X보다 작은 수', () => {
  it('X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력', () => {
    expect(solution(10, 5, [1, 10, 4, 9, 2, 3, 8, 5, 7, 6])).toBe('1 4 2 3');
  });
});
