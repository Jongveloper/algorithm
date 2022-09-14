/**
 * 미지의 것
 * - 곱하기와 더하기를 하여 결과적으로 만들 수 있는 가장 큰 수
 * 자료
 * - 0이나 1이 나오면 더하고 나머지는 곱하면 가장 큰 수를 만들 수 있다.
 * - reduce를 활용하여 누적 값을 구할 수 있다.
 * 조건
 * - 문자열이 제공된다.
 * 계획
 * - 문자열을 reduce에서 사용할 수 있게 split합니다.
 * - split을 한 후, reduce를 통해 연산을 진행하면서
 *   - 만약 0이나 1이라면 더하기 연산을 하고
 *   - 나머지 수면 곱하기 연산을 합니다.
 * 반성
 * reduce를 사용할 때, 초기값을 잘 설정해야 할 것 같습니다.
 * 곱하기 연산을 할 때는 초기값이 1부터여야하는데
 * 이 점을 망각하여 0으로 습관적으로 초기화하여 원하던 결과가 나오지 않았습니다.
 * 초기값을 항상 생각하며 코드를 설계해야겠습니다
 */

const solution = (str) => {
  const splitStr = str.split('');

  const sum = splitStr.reduce((acc, cur) => {
    if (Number(cur) === 0 || Number(cur) === 1) {
      return acc + Number(cur);
    }
    return acc * Number(cur);
  }, 1);
  return sum;
};

describe('곱하기 혹은 더하기', () => {
  it('만들 수 있는 숫자중 가장 큰 숫자를 리턴합니다.', () => {
    expect(solution('02984')).toBe(576);
    expect(solution('567')).toBe(210);
  });
});
