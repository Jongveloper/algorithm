/**
 * 미지의 것
 * - 내적
 * 자료
 * - a[0] * b[0] + ... + a[n-1] + b[n-1]
 * 조건
 * - a의 길이는 1 이상 1,000 이하
 * - a, b의 모든 수는 -1,000 이상 1,000 이하
 * - a와 b의 길이는 같다.
 * 계획
 * 1. sum 변수를 만든다.
 * 2. a배열과 b배열의 길이가 같으니 a배열의 길이만큼 반복문을 돌린다.
 * 3. 배열을 돌며 a[i] * b[i]를 sum에 누적한다.
 * 반성
 */

const solution = (a, b) => {
  let sum = 0;

  for (let i = 0; i < a.length; i += 1) {
    sum += a[i] * b[i];
  }
  return sum;
};

describe('내적', () => {
  it('내적을 리턴한다.', () => {
    expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
    expect(solution([-1, 0, 1], [1, 0, -1])).toBe(-2);
  });
});
