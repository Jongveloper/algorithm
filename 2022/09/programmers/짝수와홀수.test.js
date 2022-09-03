/**
 * 미지의 것
 * num이 짝수인지, 홀수인지
 *
 * 자료
 *
 * num % 2=== 0이면 짝수이고 아니면 홀수이다.
 * 0은 짝수이다.
 *
 * 조건
 * num은 int범위의 정수이다.
 * 계획
 * num이 0이면 Even을 리턴한다.
 * num % 2=== 0이면 Even 아니면 Odd를 리턴한다.
 * 반성
 */

const solution = (number) => {
  if (number === 0) return 'Even';
  return number % 2 === 0 ? 'Even' : 'Odd';
};

describe('짝수와 홀수', () => {
  it('짝수인지 홀수인지 출력됩니다.', () => {
    expect(solution(3)).toBe('Odd');
  });
});
