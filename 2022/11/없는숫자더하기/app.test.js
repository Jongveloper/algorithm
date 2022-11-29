/**
 * 미지의 것
 * - 숫자 배열에 없는 숫자를 모두 더한 값
 * 자료
 * - 원소의 중복이 없는 배열이다.
 * - 0 ~ 9를 더한 값은 45이다.
 * 조건
 * - 1 <= numbers의 길이 <= 9
 * - 0 <= numbers의 모든 원소 < 9
 * - 원소는 중복되지 않는다.
 * 계획
 * 1. numbers의 합을 구한다.
 * 2. numbers의 합에서 45를 뺀 값을 리턴한다.
 * 반성
 */

const solution = (numbers) => {
  return 45 - numbers.reduce((acc, cur) => acc + cur);
};

describe('없는 숫자 더하기', () => {
  it('numbers에서 찾을 수 없는 숫자를 모두 더한 값을 리턴한다.', () => {
    expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
    expect(solution([5, 8, 4, 0, 6, 7, 9])).toBe(6);
  });
});
