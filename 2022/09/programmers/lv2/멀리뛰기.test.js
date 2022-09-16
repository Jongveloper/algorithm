/**
 * 미지의 것
 * - 끝에 도달하는 방법 % 1234567
 * 자료
 * - 한번에 1칸 또는 2칸을 뛸 수 있다.
 * - 피보나치 수열 문제와 유사하다.
 * 조건
 * n은 1 이상, 2000 이하인 정수이다.
 * 계획
 * - 피보나치 수열 공식을 사용한다.
 * 반성
 * - 피보나치 수열임을 단번에 떠올리지 못했습니다...
 *   DP 유형을 많이 풀어봐야할 것 같습니다..!
 */

const solution = (numbers) => {
  if (numbers < 2) {
    return 1;
  }
  const count = [0, 1, 2, ...Array(numbers - 2).fill(0)];
  count.forEach((_, i) => {
    if (i > 2) {
      count[i] = (count[i - 2] + count[i - 1]) % 1234567;
    }
  });
  return count[numbers];
};

describe('멀리 뛰기', () => {
  it('끝에 도달하는 방법이 몇가지인지 알아내 1234567을 나눈 나머지를 리턴합니다.', () => {
    expect(solution(4)).toBe(5);
    expect(solution(6)).toBe(13);
  });
});
