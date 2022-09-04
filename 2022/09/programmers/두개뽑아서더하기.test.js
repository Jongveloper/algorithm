/**
 * 미지의 것
 * 서로 다른 인덱스에 있는 두개의 수를 뽑아 더해서 만들 수 있는 모든 수를 오름차순한 배열
 *
 * 자료
 * new Set 생성자를 통해 중복을 제거할 수 있다.
 * 이중 반복문을 통해 모든 경우의 수를 구할 수 있다.
 *
 * 조건
 * 배열은 2 이상 100이하의 길이를 가지고 있다.
 * 배열안에 모든 수는 0이상 100 이하이다.
 *
 * 계획
 * const numbers = []을 선언한다.
 * 이중 반복문을 통해 numbers에 모든 경우의 수를 넣는다.
 * new Set 생성자를 통해 numbers의 중복을 제거한다.
 *
 * 반성
 * 문제의 독해력이 부족했습니다.
 * 처음에 어떤 것을 구해야하는 지 몰랐지만
 * 예시를 보고 어떤 문제인 지, 알게 되었습니다.
 * 문제의 독해력을 늘려야겠습니다.
 */

const solution = (num) => {
  const numbers = [];

  for (let i = 0; i < num.length; i += 1) {
    for (let j = i + 1; j < num.length; j += 1) {
      numbers.push(num[i] + num[j]);
    }
  }

  const setNumbers = new Set(numbers);

  return [...setNumbers].sort((a, b) => a - b);
};

describe('두 개 뽑아서 더하기', () => {
  it('서로 다른 인덱스에 있는 두개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 담아 오름차순으로 정렬합니다.', () => {
    expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  });
});
