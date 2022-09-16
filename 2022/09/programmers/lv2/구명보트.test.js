/**
 * 미지의 것
 * - 필요한 구명보트의 최소 갯수
 * 자료
 * - 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없다.
 * - 무게제한도 존재한다.
 * - 오름차순 정렬을 통해 무게가 낮은 순으로 정렬할 수 있다.
 * - 최대 두명밖에 타지 못하기 때문에 이중 반복문을 통해 두명이 탈 수 있는지 구할 수 있다.
 * 조건
 * - 몸무게는 40kg 이상 240kg 이하이다.
 * - 구명보트의 무게 제한은 40kg 이상 240kg이하이다.
 * - 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을
 *   구출할 수 없는 경우는 없다.
 * 계획
 * - people를 오름차순 정렬한다.
 * - people을 이중 반복문을 돌려 바로 옆 사람과 같이 탈 수 있는 지 확인한다.
 * - 탈 수 있다면 count += 1을 한다.
 *
 * 반성
 * 문제에 있는 테스트케이스를 통과한 다음에 문제를 제출했을 때,
 * 테스트 케이스를 실패하면 그때부터 방향을 잡지 못하는 것 같습니다!
 * 문제를 처음 바라볼 때, 더욱 정확하게 할 수 있도록 해야겠습니다.
 */

const solution = (people, limit) => {
  const sortedPeople = people.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < sortedPeople.length; i += 1) {
    if (sortedPeople[i] + sortedPeople[sortedPeople.length - 1] <= limit) {
      answer += 1;
      sortedPeople.pop();
    } else {
      answer += 1;
    }
  }

  return answer;
};

describe('구명보트', () => {
  it('필요한 구명 보트의 최소 갯수를 리턴합니다.', () => {
    expect(solution([70, 50, 80, 50], 100)).toBe(3);
    expect(solution([70, 80, 50], 100)).toBe(3);
    expect(solution([40, 40, 40], 100)).toBe(2);
    expect(solution([50, 40, 40], 100)).toBe(2);
    expect(solution([40, 50, 50, 60], 100)).toBe(2);
    expect(solution([30, 40, 50, 60], 100)).toBe(2);
  });
});
