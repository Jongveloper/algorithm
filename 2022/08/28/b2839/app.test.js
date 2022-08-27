/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString();

/**
 * 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.
 * 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면,
 * 더 적은 개수의 봉지를 배달할 수 있다.
 *
 * 구해야하는 것 : 봉지의 최소 갯수
 * 주어지는 것 : 설탕 kg 수와 5kg 봉지, 3kg 봉지
 * 예외 : 정확하게 N킬로그램을 구할 수 없다면 -1을 출력
 *
 * 1. 주어지는 설탕 kg수 / 5를 한 몫을 구한다.
 * 2. 만약 kg / 5의 나머지가 5의 배수라면 5를 나눈 몫을 3의 배수라면 3을 나눈 몫을 리턴
 * 3. 5의 배수도 3의 배수도 아니라면 -1을 출력한다.
 */

const solution = (number) => {
  let nums = number;
  let count = 0;

  while (true) {
    if (nums % 5 === 0) {
      count += nums / 5;
      break;
    }

    if (nums < 0) {
      return -1;
    }

    count += 1;
    nums -= 3;
  }

  return count;
};

process.platform === 'linux' && console.log(solution(input));

describe('설탕 배달', () => {
  it('상근이가 배달하는 봉지의 최소 개수를 반환합니다.', () => {
    expect(solution(18)).toBe(4);
  });
});
