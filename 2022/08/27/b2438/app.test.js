const fs = require('fs');

const filePath = process.platform && '/dev/stdin';
const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

const solution = (number) => {
  const answer = [];
  let star = '';

  for (let i = 0; i < number; i += 1) {
    star += '*';
    answer.push(star);
  }

  return answer.join('\n');
};

console.log(solution(input));

describe('별 찍기 -1', () => {
  it('첫째 줄부터 N번째 줄까지 차례대로 별을 출력합니다.', () => {
    expect(solution(2)).toBe('*\n**');
  });
});
