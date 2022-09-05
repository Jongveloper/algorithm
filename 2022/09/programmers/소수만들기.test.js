/**
 * 미지의 것
 * - 소수를 만들 수 있는 총 개수
 *
 * 자료
 * - 주어진 숫자 중 서로 다른 3개의 수를 더했을 때, 소수가 되는 경우의 개수를  구한다.
 * - 소수 판별 함수를 통해 소수를 구별할 수 있다.
 *
 * 조건
 * - nums에 들어있는 숫자의 개수는 3개 이상 50개 이하이다.
 * - 중복된 숫자는 들어있지 않다.
 * - 서로 다른 3개의 수를 더해 소수가 나와야한다.
 *
 * 계획
 * - 1.소수 판별 함수를 만든다.
 * - 2.nums.length만큼 3중 반복문을 통해 i + j + k를 더한 값이
 *     소수인지 확인한다.
 * - 3. 소수가 맞다면 count를 증가시킨다.
 * - 4. count를 리턴한다.
 *
 * 반성
 * 3중 반복문이 너무 마음에 들지 않지만 다른 방법이 떠오르지 않는 것 같습니다.
 * 또한, 반복문을 사용하면서 조건을 제대로 걸지 않아서 무한 루프를 도는 실수를 했습니다.
 * 이런 실수는 처음 해보는데 3중 반복문을 하다보니 실수한 것 같습니다.
 * 다음부터 이 부분을 조심해야겠습니다.
 */

const isPrime = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (numbers) => {
  let count = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      for (let k = j + 1; k < numbers.length; k += 1) {
        if (isPrime(numbers[i] + numbers[j] + numbers[k])) {
          count += 1;
        }
      }
    }
  }

  return count;
};

describe('소수 만들기', () => {
  it('소수를 만들 수 있는 총 개수를 리턴합니다.', () => {
    expect(solution([1, 2, 3, 4])).toBe(1);
    expect(solution([1, 2, 7, 6, 4])).toBe(4);
  });

  it('소수인지 확인합니다.', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(9)).toBe(false);
  });
});
