/**
 * 미지의 것
 * 정수를 내림차순으로 배치한 수
 *
 * 자료
 * number.toString()을 이용하여 문자열로 변환할 수 있다.
 * 문자열을 배열로 변경하면 sort를 사용할 수 있다.
 *
 * 조건
 * n은 1이상 8000000000 이하인 자연수이다.
 *
 * 계획
 * 1. number를 문자열로 변환한다.
 * 2. 1에서 문자열로 만든 것을 배열로 변환한다.
 * 3. 배열을 정렬한다.
 * 4. 정렬한 배열을 join으로 묶어준다.
 * 5. Number(4번에서의 결과)를 반환한다.
 *
 * 반성
 * 자료를 찾는게 어려운 것 같습니다.
 * 자료를 찾을 때, 주어진 값들에서 어떻게 자료를 뽑아내느냐에 따라서
 * 실력이 차이가 나는 것 같은데
 * 자료를 찾는 것이 능숙해질 수 있도록 연습이 필요할 것 같습니다.
 */

const solution = (number) => {
  return Number(
    number
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
};

describe('정수 내림차순으로 배치하기', () => {
  it('정수를 내림차순으로 배치합니다.', () => {
    expect(solution(1234567899999)).toBe(9999987654321);
  });
});
