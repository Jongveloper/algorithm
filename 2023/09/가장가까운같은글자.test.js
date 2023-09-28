/**
 * 미지의 것
 * s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자
 * 자료
 * 1 <= s.length <= 10,000
 * 소문자로만 이뤄져있음
 * 계획
 * 1. 스택을 정의한다.
 * 2. answer를 정의한다.
 * 3. s를 순회하면서 스택에 없으면 -1을 answer에 넣는다.
 * 4. s를 순회하면서 스택에 있으면 answer에 스택의 길이에서 스택 가장 위쪽에 있는 해당 문자열의 인덱스를넣는다.
 */

const solution = (s) => {
  const stack = [];
  const answer = [];

  [...s].forEach((char) => {
    if (!stack.includes(char)) {
      answer.push(-1);
    }

    if (stack.includes(char)) {
      answer.push(stack.length - stack.lastIndexOf(char));
    }

    stack.push(char);
  });

  return answer;
};

describe('가장 가까운 같은 글자', () => {
  it('가장 가까운 같은 글자', () => {
    expect(solution('banana')).toEqual([-1, -1, -1, 2, 2, 2]);
  });
});
