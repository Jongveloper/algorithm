/**
 * 미지의 것
 * - 2016년 month월 day일의 요일
 * 자료
 * - new Date를 사용하면 요일을 구할 수 있다.
 *
 * 조건
 * 실제로 있는 날이다.
 *
 * 계획
 * new Date 생성자를 사용한다.
 *
 * 반성
 * new Date를 사용하는 부분에서 살짝 버벅이게 되었습니다....
 */

const solution = (month, day) => {
  return new Date(2016, month - 1, day).toString().slice(0, 3).toUpperCase();
};

describe('2016년', () => {
  it('2016년 해당 월과 해당 일의 요일을 구합니다.', () => {
    expect(solution(5, 24)).toBe('TUE');
  });
});
