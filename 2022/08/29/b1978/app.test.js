/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' &&
  fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * 소수가 몇 개인지 찾는 프로그램을 만들어라.
 *
 * 1. count 변수를 만든다.
 * 2. 입력받은 배열의 요소를 하나씩 돌면서 primeNumber인지 확인한다.
 * 3. primeNumber라면 count를 + 1 한다.
 * 4. count를 반환한다.
 */

const isPrime = (number) => {
  if (number === 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (array) => {
  return array.filter((v) => isPrime(v)).length;
};

process.platform === 'linux' && console.log(input);

describe('소수 찾기', () => {
  it('소수의 개수를 출력합니다.', () => {
    expect(solution([1, 3, 5, 7, 2, 11, 6, 8, 10, 12, 13, 121])).toBe(6);
  });

  it('소수인지 확인한다.', () => {
    expect(isPrime(6)).toBe(false);
  });
});
