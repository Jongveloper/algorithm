/**
 * 미지의 것
 * - 여행을 떠날 수 있는 그룹의 최댓값
 * 자료
 * - 공포도가 3이면 3인 이상 그룹을 만들어야 한다.
 * - 공포도가 1인 사람은 1인 이상 그룹을 만들면 되기 때문에 3인 이상 그룹에 들어갈 수 있다.
 * - 정렬을 통해 공포도가 높은 사람 수를 내림차순 정렬할 수 있다.
 * - 가장 높은 공포도를 가진 사람부터 내려오면 그 두번째로 공포도가 높은 사람은 자연스럽게 그룹에 들어갈 수 있다.
 *
 * 조건
 * 모험가의 공포드는 N이하의 자연수이다.
 *
 * 계획
 * - 배열을 오름차순 정렬한다.
 * - 배열의 첫 번째 원소부터 배열의 첫 번째 원소의 크기만큼 삭제하고 count += 1을 한다.
 * - 그룹을 지을 수 없을 때까지 반복한다.
 * 반성
 */

// const solution = (
//   adventurer,
//   sorted = adventurer.sort((a, b) => b - a),
//   group = 0,
// ) => {
//   const highestFear = sorted[0];
//   if (highestFear > sorted.length || sorted.length === 0) {
//     return group;
//   }

//   sorted.splice(0, highestFear);

//   return solution(adventurer, sorted.splice(0, highestFear), group + 1);
// };

// while
const solution = (adventurer) => {
  const sorted = adventurer.sort((a, b) => a - b);
  const highestFear = sorted[sorted.length - 1];
  let group = 0;

  while (sorted.length > highestFear || sorted.length !== 0) {
    sorted.splice(0, sorted[0]);
    group += 1;
    if (sorted[1] > sorted.length) {
      return group;
    }
  }
  return group;
};

describe('모험가 길드', () => {
  it('여행을 떠날 수 있는 그룹의 최댓값을 리턴합니다.', () => {
    expect(solution([2, 3, 1, 2, 2])).toBe(2);
  });
});
