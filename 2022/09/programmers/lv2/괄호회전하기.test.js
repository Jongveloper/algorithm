/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 한칸씩 밀어 올바른 괄호가 되는 횟수
 * 자료
 * - s.split을 통해 배열로 만들 수 있다.
 * - stack.push(stack.shift())를 통해 한칸씩 미룰 수 있다.
 * 조건
 * - s의 길이는 1 이상 1,000이하
 * 계획
 * - s.split을 해서 배열로 만든다.
 * - 스플릿한 배열을 탐색하며 올바른 괄호가 되면 count += 1을 한다.
 * 반성
 */

const isBracket = (array) => {
  const stack = [];

  for (const x of array) {
    if (stack.length === 0 && x === ')') {
      return false;
    }

    if (stack.length === 0 && x === '}') {
      return false;
    }

    if (stack.length === 0 && x === ']') {
      return false;
    }
    if (x === '(' || x === '{' || x === '[') {
      stack.push(x);
    }

    if (x === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    }

    if (x === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    }

    if (x === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    }
  }

  return stack.length === 0;
};

const solution = (s) => {
  const splitS = s.split('');

  let count = 0;

  for (let i = 0; i <= splitS.length; i += 1) {
    if (splitS[i] !== undefined) {
      splitS.push(splitS.shift());
      if (isBracket(splitS)) {
        count += 1;
      }
    }
  }

  return count;
};

describe('올바른 괄호', () => {
  it('올바른 괄호가 나온 횟수를 리턴합니다.', () => {
    expect(solution('[](){}')).toBe(3);
    expect(solution('[)(]')).toBe(0);
  });
});
