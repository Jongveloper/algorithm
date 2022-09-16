/**
 * 미지의 것
 * - 성격 유형
 * 자료
 * - 원소[0]은 비동의 할 때 점수가 높음
 * - 원소의[1]은 동의할 때 점수가 높음
 * - object를 활용하여 점수를 구할 수 있음
 * 조건
 *
 * 계획
 * - object를 만든다.
 * - survey배열을 탐색하며 각 점수를 계산해서
 *    - object에 해당 원소 점수를 더해준다.
 * - 탐색이 끝나면 각 지표에서 큰 것을 토대로 문자열에 더해준다.
 * - 만약 점수가 같다면 사전 순으로 앞에있는 것을 문자열에 더해준다.
 */

const solution = (survey, choices) => {
  const character = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  let answer = '';

  survey.forEach((item, i) => {
    if (choices[i] > 4) {
      character[item[1]] += choices[i] - 4;
    }

    if (choices[i] < 4) {
      character[item[0]] += 4 - choices[i];
    }
  });

  if (character.R > character.T) {
    answer += 'R';
  } else if (character.R === character.T) {
    answer += 'R';
  } else {
    answer += 'T';
  }

  if (character.C > character.F) {
    answer += 'C';
  } else if (character.C === character.F) {
    answer += 'C';
  } else {
    answer += 'F';
  }

  if (character.J > character.M) {
    answer += 'J';
  } else if (character.J === character.M) {
    answer += 'J';
  } else {
    answer += 'M';
  }

  if (character.A > character.N) {
    answer += 'A';
  } else if (character.A === character.N) {
    answer += 'A';
  } else {
    answer += 'N';
  }

  return answer;
};

describe('성격 유형 검사하기', () => {
  it('성격 유형이 리턴됩니다.', () => {
    expect(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])).toBe(
      'TCMA',
    );
    expect(solution(['TR', 'RT', 'TR'], [7, 1, 3])).toBe('RCJA');
  });
});
