/**
 * 미지의 것
 * 문자열 s를 숫자로 변환한 결과
 *
 * 자료
 * '1234' 이면 1234를 반환, '-1234'이면 -1234를 반환
 * Number()를 사용하면 숫자로 변경할 수 있다.
 *
 * 조건
 * s는 부호와 숫자로만 이루어져있다.
 * s는 0으로 시작하지 않는다.
 * s의 길이는 1 이상 5 이하이다.
 *
 * 계획
 * return Number(str)
 * 반성
 * 문제를 다른 방식으로 풀어보고 싶었는데
 * 어떻게 다른 방식으로 풀어야할 지, 감이 안왔습니다.
 * 여러 유형의 문제를 만나봐야할 것 같습니다.
 */

const solution = (str) => {
  return Number(str);
};

describe('문자열을 정수로 바꾸기', () => {
  it('문자열을 정수로 변경합니다.', () => {
    expect(solution('1234')).toBe(1234);
    expect(solution('-1234')).toBe(-1234);
  });
});
