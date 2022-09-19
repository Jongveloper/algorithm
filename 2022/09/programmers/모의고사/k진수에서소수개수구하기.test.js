/**
 * 미지의 것
 * - 소수의 개수
 * 자료
 * - toString(k)를 이용하여 k진법으로 변경할 수 있다.
 * - 10진법으로 보았을 때, 소수여야 한다.
 * - 오른쪽이 0일 때, 소수 판별을 하면된다.
 * 조건
 * - 0P0처럼 소수 양쪽에 0이 있는 경우
 * - P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
 * - 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
 * - P처럼 소수 양쪽에 아무것도 없는 경우
 * - 단, P는 각 자릿수에 0을 포함하지 않는 소수임
 * - 소수가 중복되어도 따로 카운팅한다.
 * 계획
 * - number를 k진수로 변경한다.
 * - 소수 판별 함수를 생성한다.
 * - k진수로 변경한 number를 탐색하며
 *    - target 변수를 ''로 초기화하여 선언한다.
 *    - number[i] === 0일 경우
 *      - target이 소수인지 확인한다.
 *        - 소수라면 count += 1을 하고 target = ''한다.
 *        - 소수가 아니라면 target= ''한다.
 *    - number[i] !== 0일 경우
 *      - target += number[i]를 한다.
 */

const isPrime = (number) => {
  if (number === '') {
    return false;
  }
  const integerNumber = Number(number);

  if (integerNumber === 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(integerNumber)); i += 1) {
    if (integerNumber % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (numbers, k) => {
  let answer = 0;
  let target = '';
  const numbersToK = numbers.toString(k);

  for (let i = 0; i < numbersToK.length; i += 1) {
    if (numbersToK[i] !== '0') {
      target += numbersToK[i];
    }
    if (numbersToK[i] === '0' || i === numbersToK.length - 1) {
      if (isPrime(target)) {
        answer += 1;
      }
      target = '';
    }
  }

  return answer;
};

describe('k진수에서 소수 개수 구하기', () => {
  it('k진법으로 변환하여 조건에 맞는 소수가 몇 개인지 리턴합니다.', () => {
    // expect(solution(437674, 3)).toBe(3);
    expect(solution(110011, 10)).toBe(2);
  });

  it('소수인지 확인합니다.', () => {
    expect(isPrime('1')).toBe(false);
    expect(isPrime('2')).toBe(true);
    expect(isPrime('3')).toBe(true);
    expect(isPrime('4')).toBe(false);
    expect(isPrime('5')).toBe(true);
    expect(isPrime('6')).toBe(false);
    expect(isPrime('7')).toBe(true);
    expect(isPrime('8')).toBe(false);
    expect(isPrime('9')).toBe(false);
    expect(isPrime('10')).toBe(false);
  });
});
