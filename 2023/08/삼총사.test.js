/**
 * 미지의 것
 * 학생 3명의 번호를 더했을 때, 0이 되는 경우의 수
 *
 * 자료
 * 배열의 길이가 제한적이므로 완전 탐색을 이용할 수 있다.
 *
 * 조건
 * 배열의 길이는 3이상 13이하이다.
 * 정수 번호는 -1000 이상 1000이하이다.
 *
 * 계획
 * 1. 완전 탐색
 * - 3중 반복을 통해 배열을 완전 탐색한다.
 * - i + j + k === 0 이라면 answer += 1을 한다.
 * - answer를 return 한다.
 * 2. 함수 분리
 * - 총 합이 0이되면 true를 return하는 함수 getCombination
 * 2. 총 합이 0이라면 true를 return한다.
 * 3. 총 합이 0이 아니라면 false를 return한다.
 *
 * 반성
 * 유틸 함수 + 재귀 함수로 해당 문제를 풀려고 했는데 실패했습니다.
 * 연습을 많이 해야겠습니다.
 */

const solution = (n) => {
  let answer = 0;

  for (let i = 0; i < n.length; i += 1) {
    for (let j = i + 1; j < n.length; j += 1) {
      for (let k = j + 1; k < n.length; k += 1) {
        if (n[i] + n[j] + n[k] === 0) {
          answer += 1;
        }
      }
    }
  }

  return answer;
};

describe('삼총사', () => {
  it('학생 3명의 번호를 더했을 때, 0이 되는 경우의 수를 리턴합니다.', () => {
    expect(solution([-2, 3, 0, 2, -5])).toBe(2);
    expect(solution([-3, -2, -1, 0, 1, 2, 3])).toBe(5);
    expect(solution([-1, 1, -1, 1])).toBe(0);
  });
});
