/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 알파벳을 n만큼 민 문자열
 *
 * 자료
 * - charCodeAt()을 통해 문자열을 아스키 코드로 변경할 수 있다.
 * - 대문자 = 65 ~ 90
 * - 소문자 = 97 ~ 122
 * - 만약 Z(90) + n(3)이면 C(68)가 되어야한다.
 * - z(90) Z(122)이 넘어가면 -25 + n 을하면 된다.
 *
 * 조건
 * s의 길이는 8000이하이다.
 * n은 1이상, 25이하인 자연수이다.
 *
 * 계획
 * 문자열을 배열로 만든 후,
 * 배열을 탐색하며 ' '는 바로 배열에 넣어주고
 * value를 대문자로 변경 후 아스키 코드로 변환한 값 + n이 90보다 크면
 * String.fromCharCode(value.charCodeAt() + n -26)을 배열에 넣고
 * 90보다 작다면
 * String.fromCharChode(value.charCodeAt() + n)을 해준다.
 *
 * 반성
 * 쉬운 문제임에도 문자열을 대문자로 바꾼다는 생각을 잘 하지못해서
 * 헤맨 문제였습니다.
 * 문제를 바라볼 때, 여러가지 시각으로 바라볼 수 있도록 연습을 해야겠습니다.
 */

function solution(string, n) {
  return string
    .split('')
    .map((char) => {
      if (char === ' ') {
        return char;
      }
      if (char.toUpperCase().charCodeAt() + n > 90) {
        return String.fromCharCode(char.charCodeAt() + n - 26);
      }
      return String.fromCharCode(char.charCodeAt() + n);
    })
    .join('');
}

describe('시저 암호', () => {
  it('시저암호로 변경됩니다.', () => {
    expect(solution('AB', 1)).toBe('BC');
    expect(solution('z', 1)).toBe('a');
    expect(solution('a B z', 4)).toBe('e F d');
    expect(solution('a', 4)).toBe('e');
    expect(solution('ab D', 4)).toBe('ef H');
  });
});
