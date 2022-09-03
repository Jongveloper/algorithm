/* eslint-disable no-param-reassign */
/**
 * 미지의 것
 * 뒷 4자리를 제외하고 모두 *로 가린 핸드폰 번호
 *
 * 자료
 * 핸드폰 번호는 문자열이다.
 * 번호의 길이는 다를 수 있다.
 * 뒷 4자리만 남겨놓고 모두 *로 변경하면 된다.
 *
 * 조건
 * 문자열의 길이는 4 이상, 20이하인 문자열이다.
 *
 * 계획
 * answer 변수를 만든다.
 * phoneNumber의 길이만큼 반복문을 돌며
 * i가 phoneNumber.length-4보다 작다면
 *    answer += '*'을 해준다.
 * i가 phoneNumber.length-4보다 크다면
 *    answeer += phoneNumber[i]를 해준다.
 *
 * 반성
 * 처음에 계획을 잘못세워서 문제를 제대로 풀지 못했습니다.
 * 계획을 세우는 것을 조금 더 신경써서 해야할 것 같습니다.
 */

const solution = (phoneNumber) => {
  let answer = '';
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (i < phoneNumber.length - 4) {
      answer += '*';
    } else {
      answer += phoneNumber[i];
    }
  }
  return answer;
};

describe('핸드폰 번호 가리기', () => {
  it('핸드폰 번호를 가린 결과가 나옵니다.', () => {
    expect(solution('01033334444')).toBe('*******4444');
  });
});
