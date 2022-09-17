/* eslint-disable no-unreachable-loop */
/**
 * 미지의 것
 * - 가장 배터리를 조금 쓰는 횟수
 * 자료
 * - 점프를 하면 배터리가 소모된다.
 * - 텔레포트를 하면 현재 거리 x2만큼 이동할 수 있다.(배터리가 소모되지 않는다.)
 * - number를 나눠서 2의 배수이면 건전지를 사용하지 않는다.
 * - 2의 배수가 아니라면 건전지를 사용한다.
 *
 * n = 4 배터리 1
 * 점프 1 / 텔레포트 2 / 텔레포트 4
 * n = 5 배터리 2
 * 점프 1 / 텔레포트 2 / 텔레포트 4 / 점프 1
 * n = 6 배터리 2
 * 점프 1 / 텔레포트 2 / 점프 3 / 텔레포트 6
 * n = 7 배터리 3
 * 점프 1 / 텔레포트 2 / 점프 3 / 텔레포트 6 / 점프 4
 * n = 8 배터리 1
 * 점프 1 / 텔레포트 2 / 텔레포트 4 / 텔레포트 8
 * n = 9 배터리 2
 * 점프 1 / 텔레포트 2 / 텔레포트 4 / 텔레포트 8 / 점프 9
 * n = 10 배터리 2
 * 점프 1 / 텔레포트 2 / 텔레포트 4 / 점프 5 / 텔레포트 10
 *
 * 조건
 * 수는 10억이하
 *
 * 계획
 * - number가 0보다 작아질때까지 while문을 돌며
 *  - 2로 나누어지면 number /= 2를한다.
 *  - 2로 나누어지지 않으면 number = (number-1) / 2를 한 후 answer += 1을 한다.
 *
 * 반성
 * 이런 유형의 문제가 나오면 항상 헷갈리는 것 같습니다....
 * 생각해보면 규칙을 찾고 규칙대로 점화식을 세우면 되는데
 * 그게 쉽지가 않은 것 같습니다...!
 * 많이 풀어보는게 정답인 것 같습니다!
 */

const solution = (number) => {
  let copyNumber = number;
  let answer = 0;

  while (copyNumber > 0) {
    console.log('copyNumber: ', copyNumber);
    if (copyNumber % 2 !== 0) {
      copyNumber = (copyNumber - 1) / 2;
      answer += 1;
    } else {
      copyNumber /= 2;
    }
  }

  return answer;
};

describe('점프와 순간이동', () => {
  it('배터리를 가장 조금 쓰는 횟수를 리턴합니다.', () => {
    expect(solution(5000)).toBe(5);
    expect(solution(5)).toBe(2);
    expect(solution(6)).toBe(2);
  });
});
