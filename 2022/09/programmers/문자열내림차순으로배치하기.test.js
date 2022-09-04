/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/**
 * 미지의 것
 * 내림차순 된 문자열
 *
 * 자료
 * 문자열을 배열로 바꾼 후 sort할 수 있다.
 * 대문자는 소문자보다 작은 것으로 간주한다.
 * 아스키코드를 통해 비교한다는 것을 알 수 있다.
 *
 * 조건
 * str은 길이가 1 이상인 문자열이다.
 *
 * 계획
 * 문자열을 sort한다.
 *
 * 반성
 * sort 사용법을 또 기존과 같은 방식으로 사용해서
 * 원하는 결괏값을 못받았습니다.
 * sort 사용법을 완벽하게 숙지해야겠습니다.
 */

const solution = (str) => {
  const splitStr = str
    .split('')
    .sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
    })
    .join('');

  return splitStr;
};

describe('문자열 내림차순으로 배치하기', () => {
  it('문자열을 내림차순한 결과가 나옵니다.', () => {
    expect(solution('Zbcdefg')).toBe('gfedcbZ');
  });
});
