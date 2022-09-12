/* eslint-disable no-param-reassign */
/**
 * 미지의 것
 * 두 수의 최대 공약수와 최소 공배수
 *
 * 자료
 *
 * 조건
 * 두 수는 1이상 100000이하의 자연수이다.
 * 계획
 * 최대 공약수를 만드는 함수와 최소 공배수를 만드는 함수를 만든 후
 * 최대 공약수를 push하고 최소 공배수를 push한다.
 *
 * 반성
 * 최대 공약수와 최소 공배수의 정의를 까먹어서...
 * 구글링을 해서 코드를 작성하였습니다.
 * 기초적인 지식을 쌓아야겠다는 생각이 들었습니다.
 */

const getGcd = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

// 재귀
// const getLcm = (num1, num2, lcm = 1) => {
//   if (lcm % num1 === 0 && lcm % num2 === 0) {
//     return lcm;
//   }
//   lcm += 1;

//   return getLcm(num1, num2, lcm);
// };

const getLcm = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      return lcm;
    }

    lcm += 1;
  }
};

const solution = (n, m) => {
  return [getGcd(n, m), getLcm(n, m)];
};

describe('최대 공약수와 최소 공배수', () => {
  it('최대 공약수와 최소 공배수가 반환됩니다.', () => {
    expect(solution(2, 5)).toEqual([1, 10]);
  });

  it('최대 공약수를 리턴합니다.', () => {
    expect(getGcd(3, 12)).toBe(3);
  });

  it('최소 공배수를 리턴합니다.', () => {
    expect(getLcm(3, 12)).toBe(12);
  });
});
