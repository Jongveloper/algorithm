/**
 * 미지의 것
 * - 카펫의 가로 세로 크기
 * 자료
 * - 카펫의 최소 높이는 3이다.
 * - 갈색과 노란색의 합을 임의의 높이로 나눌 때 나오는 높이와 가로 값을 토대로
 *   (가로 - 2) * (높이-2) = 노란색 격자 수라면, 현재 높이, 가로의 길이를 찾은 것이다.
 *
 *
 * 조건
 * - 카펫의 가로길이는 세로 길이와 같거나, 세로길이보다 길다.
 * 계획
 * - 가로 길이와 세로길이를 더해준 값을 할당한 변수를 생성한다.
 * - 반복문을 돌며 sum % height === 0 이면 가로 길이를 sum / height를 해준다.
 * 반성
 * 문제를 파악하는게 너무 어려웠습니다.
 * 문제를 많이 풀어서 알고리즘적 사고를 기를 수 있도록 노력해야겠습니다.
 */

const solution = (brown, yellow) => {
  const sum = brown + yellow;

  for (let height = 3; height <= brown; height += 1) {
    if (sum % height === 0) {
      const weight = sum / height;

      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
};

describe('카펫', () => {
  it('카펫의 가로 세로 크기를 리턴합니다.', () => {
    expect(solution(10, 2)).toEqual([4, 3]);
  });
});
