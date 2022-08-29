/* eslint-disable no-unreachable-loop */
/* eslint-disable no-param-reassign */
/**
 * 주어지는 것 : 거스름돈 5와 2
 * 구해야하는 것 : 거스름돈의 최소 갯수
 *
 * 1. exchange를 5로 나눠본다.
 * 2. 5로 나뉜다면 count = exchange / 5 로 하고 count를 리턴한다.
 * 3. 5로 나뉘지 않는다면 2를 뺀다.
 * 4. count +=1 을 해주고 exchange - 2를 한 값이 5의 배수인지 확인한다.
 * 5. 위의 과정을 반복한다.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString().trim();

const solution = (exchange) => {
  let answer = 0;
  if (exchange === 1 || exchange === 3) return -1;

  while (exchange > 0) {
    if (exchange % 2 === 1 || exchange % 5 === 0) {
      answer += 1;
      exchange -= 5;
    } else if (exchange % 2 === 0) {
      answer += 1;
      exchange -= 2;
    }
  }

  return answer;
};

console.log(solution(Number(input)));

describe('거스름돈', () => {
  it('동전의 최소 개수를 출력합니다.', () => {
    expect(solution(1)).toBe(-1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(-1);
    expect(solution(4)).toBe(2);
    expect(solution(5)).toBe(1);
    expect(solution(6)).toBe(3);
    expect(solution(7)).toBe(2);
    expect(solution(8)).toBe(4);
    expect(solution(9)).toBe(3);
    expect(solution(10)).toBe(2);
    expect(solution(11)).toBe(4);
    expect(solution(12)).toBe(3);
    expect(solution(13)).toBe(5);
    expect(solution(14)).toBe(4);
  });
});
