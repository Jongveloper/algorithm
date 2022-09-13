/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 괄호가 올바르게 작성되어있는지
 * 자료
 * - 스택을 이용하면 쉽게 구할 수 있다.
 * 조건
 * - () 로만 이루어져있다.
 * 계획
 * - count 변수를 만든다.
 * - str을 탐색하며 ( 일 땐, count+=1을 한다.
 * - ) 일 땐, count -=1을 한다.
 * - 만약 count가 0이고 )라면 false를 리턴한다.
 *
 */

function solution(str) {
  let count = 0;

  for (const char of str) {
    if (count === 0 && char === ')') {
      return false;
    }
    if (char === '(') {
      count += 1;
    }

    if (char === ')') {
      count -= 1;
    }
  }
  return count === 0;
}

describe('올바른 괄호', () => {
  it('괄호가 올바르게 되어있는지 리턴합니다.', () => {
    expect(solution('()()')).toBe(true);
    expect(solution('(()(')).toBe(false);
  });
});
