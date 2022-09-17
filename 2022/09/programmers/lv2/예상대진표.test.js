/**
 * 미지의 것
 * - a번 참가자와 b번 참가자가 몇 번째 라운드에서 만나는지
 * 자료
 * - 2로 나누다보면 만나진다.
 *
 * 조건
 * - a번 참가자와 b번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정한다.
 * - 부전승은 일어나지 않는다.
 * - a !== b
 *
 * 계획
 * - round 변수를 0으로 초기화하여 선언한다.
 * - a와 b가 같지 않을 때까지 반복문을 돌린다.
 *   - a = a / 2 를 올림한다.
 *   - b = b / 2 를 올림한다.
 *   - round를 증가시킨다.
 * 반성
 * 생각만 잘 하면 풀 수 있는 문제였는데
 * 나눈다는 개념까지는 생각했지만 어떻게 접근해야할 지 잘 감이 오지 않았습니다.
 * 문제를 많이 풀어봐야할 것 같습니다..!
 */

const solution = (n, a, b) => {
  let copyA = a;
  let copyB = b;
  let round = 0;

  while (copyA !== copyB) {
    copyA = Math.ceil(copyA / 2);
    copyB = Math.ceil(copyB / 2);
    round += 1;
  }
  return round;
};

describe('예상 대진표', () => {
  it('a번 참가자와 b번 참가자가 몇 번째 라운드에서 만나는지 리턴합니다.', () => {
    expect(solution(8, 4, 7)).toBe(3);
  });
});
