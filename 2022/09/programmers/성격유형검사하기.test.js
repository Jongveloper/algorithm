/**
 * 미지의 것
 * - 성격 유형
 * 자료
 * - 4개의 유형이 있으므로 총 16가지가 나올 수 있다.
 * - 검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있다.
 * - survey[0][0] 비동의 점수
 * - survey[0][1] 동의 점수
 * - 1번 매우 비동의 3
 * - 2번 비동의 2
 * - 3번 약간 비동의 1
 * - 4번 모르겠음 0
 * - 5번 약간 동의 1
 * - 6번 동의 2
 * - 7번 매우 동의 3
 * - 동일한 점수면 사전순으로 빠른 순
 * - Object를 통해서 점수를 매핑할 수 있다.
 * 조건
 * - 동일한 점수면 사전순으로 빠른 순
 * 계획
 * - Object를 통해 각각의 유형을 매핑한다.
 * - servey배열과 choices 배열을 탐색하며
 *    - survey[0][0] 비동의 점수
 *    - survey[0][1] 동의 점수
 *   를 통해 Object 값에 점수를 +해준다.
 *
 * 반성
 * 문제의 지문이 길어서 어려운 문제라고 착각했지만
 * 그렇게 어려운 문제는 아니었습니다.
 * 문제를 풀기 전, 겁을 먹지 않고
 * 지문을 꼼꼼히 읽어서 문제를 풀어야겠습니다!
 */

const solution = (survey, choices) => {
  let answer = '';

  const type = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i += 1) {
    if (choices[i] >= 5) {
      if (choices[i] === 5) {
        type[survey[i][1]] += 1;
      } else if (choices[i] === 6) {
        type[survey[i][1]] += 2;
      } else if (choices[i] === 7) {
        type[survey[i][1]] += 3;
      }
    } else if (choices[i] < 4) {
      if (choices[i] === 3) {
        type[survey[i][0]] += 1;
      } else if (choices[i] === 2) {
        type[survey[i][0]] += 2;
      } else if (choices[i] === 1) {
        type[survey[i][0]] += 3;
      }
    }
  }

  if (type.R > type.T) answer += 'R';
  else if (type.R === type.T) answer += 'R';
  else answer += 'T';

  if (type.C > type.F) answer += 'C';
  else if (type.C === type.F) answer += 'C';
  else answer += 'F';

  if (type.J > type.M) answer += 'J';
  else if (type.J === type.M) answer += 'J';
  else answer += 'M';

  if (type.A > type.N) answer += 'A';
  else if (type.A === type.N) answer += 'A';
  else answer += 'N';

  return answer;
};

describe('성격 유형 검사하기', () => {
  it('성격 유형이 출력됩니다.', () => {
    expect(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])).toBe(
      'TCMA',
    );
  });
});
