/* eslint-disable no-unreachable-loop */
/**
 * 미지의 것
 * - 기사단원의 무기에 필요한 총 무게
 * 자료
 * - 공격력 제한 수치가 넘으면 power를 더해야한다.
 * 조건
 * - 1 <= number <= 100,000
 * - 2 <= limit <= 100
 * - 1 <= power <= limit
 * 계획
 * - 약수를 구하는 함수를 만든다.
 * - sum 변수를 만든다.
 * - number만큼 반복문을 돌며 약수의 갯수를 구한 후
 * - 약수의 갯수가 limit보다 크다면 power를 더하고
 * - 약수의 갯수가 limit보다 작다면 약수의 갯수를 더한다.
 * - sum을 리턴한다.
 * 반성
 */

const getDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      divisors.push(i);
      if (number / i !== i) {
        divisors.push(number / i);
      }
    }
  }
  return divisors.length;
};

const solution = (number, limit, power) => {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    if (getDivisors(i) > limit) {
      sum += power;
    } else {
      sum += getDivisors(i);
    }
  }
  return sum;
};

describe('기사단원의 무기', () => {
  it('무기를 모두 만들기 위해 필요한 철의 무게를 return 합니다.', () => {
    expect(solution(5, 3, 2)).toBe(10);
  });
});

describe('getDivisors', () => {
  it('약수의 갯수를 리턴합니다.', () => {
    expect(getDivisors(5)).toBe(2);
    expect(getDivisors(4)).toBe(3);
  });
});
