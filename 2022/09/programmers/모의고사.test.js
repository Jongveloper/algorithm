/**
 * 미지의 것
 * - 가장 많이 맞힌 수포자
 *
 * 자료
 * - 수포자가 찍는 방식
 *   1. (1, 2, 3, 4, 5)
 *   2. (2, 1, 2, 3, 2, 4, 2, 5)
 *   3. (3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
 *
 * - i % 1.length를 하면 나머지로 어떤 수를 선택했는 지 알 수 있다.
 *
 * 조건
 * - 시험 문제는 최대 10,000 문제로 구성되어 있다.
 * - 문제의 정답은 1, 2, 3, 4, 5 중 하나이다.
 * - 높은 점수를 받은 사람이 여럿일 경우, 오름차순 정렬한다.
 *
 * 계획
 *
 * 반성
 */

const solution = (answers) => {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer = [];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === student1[i % 5]) {
      score1 += 1;
    }

    if (answers[i] === student2[i % 8]) {
      score2 += 1;
    }

    if (answers[i] === student3[i % 10]) {
      score3 += 1;
    }
  }

  const max = Math.max(score1, score2, score3);

  if (max === score1) {
    answer.push(1);
  }

  if (max === score2) {
    answer.push(2);
  }

  if (max === score3) {
    answer.push(3);
  }

  return answer;
};

describe('모의고사', () => {
  it('가장 높은 점수를 받은 학생이 출력됩니다.', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  });
});
