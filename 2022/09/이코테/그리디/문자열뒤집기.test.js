/**
 * 미지의 것
 * - 같은 숫자로 만들기 위한 최소 뒤집기 횟수
 * 자료
 * - 정규표현식과 split을 활용할 수 있다.
 * 조건
 * - 0과 1로만 이루어진 문자열이다.
 * 계획
 * - 0이 많은지 1이 많은지 확인한다.
 * - 0이 많다면 0을 기준으로 split(정규표현식).filter(공백제거)
 * - 1이 많다면 1을 기준으로 split(정규표현식).filter(공백제거)
 *   를 리턴한다.
 * 반성
 * 정규표현식을 사용하다보니 헷갈렸던 부분이 많았던 것 같습니다.
 * 정규표현식을 올바르게 사용할 수 있도록 정규표현식을 사용할 수 있을 땐,
 * 정규표현식을 많이 사용해봐야겠습니다.
 */

// const input = require('fs').readFileSync('/dev/stdin').toString();

const solution = (str) => {
  const consecutiveZeros = /0+/gm;
  const consecutiveOnes = /1+/gm;

  const one = str.split(consecutiveOnes).filter((s) => s !== '').length;

  const zero = str.split(consecutiveZeros).filter((s) => s !== '').length;

  return one > zero ? zero : one;
};

// console.log(solution(input));

describe('문자열 뒤집기', () => {
  it('같은 숫자로 만들기 위한 최소 뒤집기 횟수를 리턴합니다.', () => {
    expect(solution('0001100')).toBe(1);
    expect(solution('11111')).toBe(0);
    expect(solution('00000001')).toBe(1);
    expect(solution('11101101')).toBe(2);
    expect(solution('11001100110011000001')).toBe(4);
  });
});
