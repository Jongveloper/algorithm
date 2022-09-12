/**
 * 미지의 것
 * - 약수의 개수가 짝수인 것은 더하고 약수의 개수가 홀수인 수는 뺀 값
 *
 * 자료
 * - 재귀함수를 이용하면 약수의 수를 간단히 구할 수 있다.
 * 조건
 * 1 <= left <= rignt <= 1,000
 *
 * 단계
 * 1. 약수의 개수를 구하는 재귀함수를 만든다.
 * 2. 약수의 개수가 짝수라면 더한다.
 * 3. 약수의 개수가 홀수라면 뺀다.
 *
 * 반성
 * 지금 한 방법이 최선의 방법인 지, 잘 판단이 안섭니다.
 * 문제를 많이 풀어봐야할 것 같습니다!
 */

const numberOfDivisors = (number, divisor = 1, divisors = []) => {
  if (number % divisor === 0) {
    divisors.push(divisor);
  }

  if (number === divisor) {
    return divisors.length % 2 === 0;
  }

  return numberOfDivisors(number, divisor + 1, divisors);
};

const solution = (left, right) => {
  let sum = 0;
  for (let i = left; i <= right; i += 1) {
    if (numberOfDivisors(i)) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;
};

describe('약수의 개수와 덧셈', () => {
  it('약수의 개수가 짝수인 것은 더하고 약수의 개수가 홀수인 수를 뺀 수를 리턴합니다.', () => {
    expect(solution(13, 17)).toBe(43);
  });

  it('약수의 개수가 짝수이면 true 홀수라면 false가 리턴됩니다.', () => {
    expect(numberOfDivisors(13)).toBe(true);
    expect(numberOfDivisors(14)).toBe(true);
    expect(numberOfDivisors(15)).toBe(true);
    expect(numberOfDivisors(16)).toBe(false);
  });
});
