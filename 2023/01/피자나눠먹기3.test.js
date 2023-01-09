/**
 * 미지의 것
 * - 피자를 slice로 잘랐을 때 n명의 사람이 최소 한 조각 이상 피자를 먹을 수 있는 피자 수
 * 자료
 * - 단순히 people / slice를 하면된다..
 * 계획
 * - 단순히 people / slice를 하면된다..
 */

const solution = (slice, people) => {
  return Math.ceil(people / slice);
};

describe('피자 나눠 먹기', () => {
  it('총 필요한 피자 수를 리턴합니다.', () => {
    expect(solution(7, 10)).toBe(2);
  });
});
