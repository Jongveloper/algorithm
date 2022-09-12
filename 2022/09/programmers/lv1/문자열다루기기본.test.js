/* eslint-disable no-restricted-globals */
/**
 * 미지의 것
 * 문자열의 길이가 4 혹은 6이고 숫자로만 구성되어있는지
 *
 * 자료
 * isNaN을 통해 숫자로만 구성되어있는지 확인할 수 있다.
 * .length를 통해 길이를 알 수 있다.
 *
 * 조건
 * s는 1 이상 길이 8이하인 문자열이다.
 * 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있다.
 *
 * 계획
 * 문자열의 길이가 4 또는 6이 아니면 false를 리턴
 * isNaN(문자열)이면 false를 리턴
 *
 * 반성
 * 처음부터 정규식을 사용했어야 했는데
 * isNaN('1e10')이 true인 걸 생각하지 못했습니다...!
 * 다음부터 이런 유형의 문제가 나올 때 정규 표현식을 바로 떠올려야겠습니다!
 */

const solution = (str) => {
  const regExp = /^[0-9]*$/gi;

  if (str.length === 4 || str.length === 6) {
    if (!regExp.test(str)) {
      return false;
    }
    return true;
  }
  return false;
};

describe('문자열 다루기 기본', () => {
  it('참/거짓이 출력됩니다.', () => {
    expect(solution('a234')).toBe(false);
    expect(solution('1234')).toBe(true);
    expect(solution('abc234')).toBe(false);
    expect(solution('123234')).toBe(true);
    expect(solution('123123123123')).toBe(false);
    expect(solution('3e10')).toBe(false);
  });
});
