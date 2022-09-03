/**
 * 미지의 것
 * - 하샤드 수인지 아닌지 판별
 * 자료
 * - 하샤드 수 : x의 자릿수의 합으로 x 가 나누어진 수
 * 예를들어, 18의 자릿수는 1 + 8 = 9 / 18은 9로 나누어 떨어지므로 18은 하샤드 수
 * 숫자를 toString()메서드로 문자열로 변경할 수 있다.
 * 문자열을 split을 통해 배열로 변경할 수 있다.
 * 배열을 통해 숫자인 문자를 숫자로 변경할 수 있다.
 *
 *
 * 조건
 * - x는 1이상, 10000 이하인 정수
 *
 * 계획
 * strings = x.toString().split('').map((item) => +item) 을하여 만들어준다
 * value = strings배열의 값을 더한 것을 할당한다.
 * x % value === 0 이면 true 아니면 false를 리턴한다.
 *
 * 반성
 * 간단한 문제임에도 코드를 작성할 땐, 그냥 할 수 있을 것 같은데
 * 계획을 세우는 건 뭔가 버벅이는 느낌이 들었습니다.
 * 계획을 세우고 순차적으로 코드를 작성하는 연습을 많이 해야할 것 같습니다.
 */

const solution = (x) => {
  const strings = x
    .toString()
    .split('')
    .map((item) => +item);

  const value = strings.reduce((a, b) => a + b, 0);

  return x % value === 0;
};

describe('하샤드 수', () => {
  it('하샤드 수인지 아닌지 true / false로 출력됩니다.', () => {
    expect(solution(11)).toBe(false);
  });
});
