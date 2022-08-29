/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input[1].split(' ').map((item) => +item);

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
  const targets = array;

  const count = targets.reduce((acc, cur) => {
    if (isPrime(cur)) return acc + 1;

    return acc;
  }, 0);

  return count;
};

console.log(solution(nums));
