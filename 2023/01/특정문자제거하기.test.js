/* eslint-disable camelcase */
/**
 * 미지의 것
 * - 특정 문자를 제거한 문자열
 * 자료
 * - 배열로 만들어 filter를 사용하면 특정 문자를 제거할 수 있다.
 * 조건
 * - 대소문자를 구분해야한다.
 * 계획
 * - 문자열을 배열로 만든다.
 * - 배열에 filter를 이용해 특정 문자를 제외한 배열을 리턴한다.
 * - 위에서 필터링한 배열을 문자열로 변환한 후 리턴한다.
 */

// const solution = (my_string, letter) => {
//   const strings = my_string.split('');

//   return strings.filter((string) => string !== letter).join('');
// };

// const solution = (my_string, letter) => {
//   return my_string.replaceAll(letter, '');
// };

const solution = (my_string, letter) => {
  return my_string.split(letter).join('');
};

describe('특정 문자 제거하기', () => {
  it('특정 문자를 제거한 문자열이 리턴됩니다.', () => {
    expect(solution('abcdef', 'f')).toBe('abcde');
  });
});
