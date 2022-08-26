const fs = require('fs');

const filePath = process.platform && '/dev/stdin';
const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().split(' ');

/**
 * 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾼다.
 */
const solution = (h, m) => {
  let hours = h;
  let minutes = m;

  if (minutes - 45 < 0) {
    minutes = minutes - 45 + 60;
    if (hours === 0) {
      hours = 23;
    } else {
      hours -= 1;
    }
  } else {
    minutes -= 45;
  }

  return `${hours} ${minutes}`;
};

console.log(solution(Number(input[0]), Number(input[1])));

describe('알람 시계', () => {
  it('시간이 출력된다.', () => {
    expect(solution(23, 40)).toBe('22 55');
  });
});
