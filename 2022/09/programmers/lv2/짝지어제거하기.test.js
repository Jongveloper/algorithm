/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 짝을 지어 모두 제거가 되는지
 * 자료
 * - 스택을 사용하여 문자가 반복되는 지 확인할 수 있다.
 * 조건
 * - 문자열은 모두 소문자로 이루어져 있다.
 * 계획
 * - stack 배열을 생성한다.
 * - str을 탐색하며
 *    - stack[stack.length-1] === str[i]라면 stack.pop()을 한다.
 *    - stack[stack.length-1] !== str[i]라면 stack.push(str[i])를 한다.
 * - stack의 길이가
 *    - 0이라면 1을 리턴
 *    - 0이 아니라면 0을 리턴한다.
 * 반성
 * 처음부터 스택을 생각하지 못했습니다.
 * 스택을 생각하면 정말 쉬운 문제임에도
 * 문자열이 나와 바로 정규표현식만 생각했습니다.
 * 항상 적절한 선택을 할 수 있도록 해야겠습니다.
 */

const solution = (str) => {
  const stack = [];

  for (const char of str) {
    if (!stack.length || stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
};

describe('first', () => {
  it('짝을 지어 모두 제거가 되면 1을 리턴 아니라면 0을 리턴', () => {
    expect(solution('baabaa')).toBe(1);
    expect(solution('cdcd')).toBe(0);
  });
});
