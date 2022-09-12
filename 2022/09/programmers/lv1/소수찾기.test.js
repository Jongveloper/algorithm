/**
 * 미지의 것
 * 1부터 입력받은 숫자 n사이에 있는 소수의 개수
 *
 * 자료
 * 소수 : 1과 자기 자신으로만 나뉘어지는 수
 * 배열을 만들고 배열에 소수만 넣고 배열의 길이를 구하면 소수의 갯수를 구할 수 있다.
 *
 * 조건
 * n은 2이상 1000000 이하의 자연수이다.
 *
 * 계획
 * 소수 배열을 만든다.
 * 소수 판별 함수를 만든다.
 * 소수 판별 함수에서 true이면 소수 배열에 넣는다.
 * 소수 배열의 길이를 구한다.
 *
 * 반성
 * 소수를 판별하는 식이 헷갈렸습니다.
 * 반복문의 조건의 설정이 정말 중요하단 것을 느꼈습니다.
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

const solution = (num) => {
  const primeNumber = [];

  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      primeNumber.push(i);
    }
  }
  return primeNumber.length;
};

describe('소수 찾기', () => {
  it('소수의 개수를 반환합니다.', () => {
    expect(solution(10)).toBe(4);
  });

  it('소수인지 판별합니다.', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
  });
});
