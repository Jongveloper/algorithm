/**
 * 미지의 것
 * - 서로 무게가 다른 볼링공을 골랐을 때, 두 사람이 공을 고르는 경우의 수
 * 자료
 * - 같은 무게의 공이 여러 개 있을 수 있지만, 서로 다른 공으로 간주한다.
 * - 볼링공의 무게는 1부터 M까지의 자연수 형태로 존재한다.
 * - 반복문을 이용하면 쉽게 답을 구할 수 있다.
 * 조건
 * - 공의 최대 무게는 M이다.
 * 계획
 * - 볼링공의 배열만큼 이중 반복문을 돌면서
 *   - 볼링공[i] !== 볼링공[i+1]인지 확인하고
 *      - false라면 넘어갑니다.
 *      - true라면 way += 1을 합니다.
 * 반성
 * forEach를 통해 탐색을 할 때, 이중 반복문을 만들면
 * 항상 i와 j에서 실수를 하는 것 같습니다.
 * 이 부분을 유념해서 문제를 풀어야겠습니다!
 */

const solution = (ballingBalls) => {
  let way = 0;
  ballingBalls.forEach((ballingBall, i) => {
    for (let j = i + 1; j < ballingBalls.length; j += 1) {
      if (ballingBall !== ballingBalls[j]) {
        way += 1;
      }
    }
  });
  return way;
};

describe('볼링공 고르기', () => {
  it('두 사람이 공을 고르는 경우의 수', () => {
    expect(solution([1, 3, 2, 3, 2])).toBe(8);
    expect(solution([1, 5, 4, 3, 2, 4, 5, 2])).toBe(25);
  });
});
