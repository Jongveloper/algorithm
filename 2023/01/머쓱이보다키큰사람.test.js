/**
 * 미지의 것
 * - 머쓱이보다 키 큰 사람의 수
 * 자료
 * - 단순히 키를 비교하면 된다.
 * 조건
 *
 * 계획
 * - 단순히 키를 비교하면 된다.
 */

const solution = (array = [], height = 0) => {
  let sum = 0;

  array.forEach((i) => {
    if (i > height) {
      sum += 1;
    }
  });

  return sum;
};

describe('머쓱이보다 키 큰 사람', () => {
  it('키 큰 사람 수를 리턴합니다.', () => {
    expect(solution([149, 180, 192, 170], 167)).toBe(3);
  });
});
