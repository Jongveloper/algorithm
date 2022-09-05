/**
 * 미지의 것
 * - 실제 정수들의 합
 *
 * 자료
 * - absolutes[i] signs[i]가 있을 때 signs[i]가 false이면 음수이다.
 * - signs와 absoluites의 길이는 같다.
 *    - 반복문을 통해서 음수, 양수를 변경할 수 있다.
 *
 * 조건
 * absolutes의 길이는 1 이상 1,000이하이다.
 * 계획
 * 1. numbers 배열을 만든다.
 * 1. absolutes의 길이만큼 반복문을 돌며
 *    signs[i]가 true이면 absolute[i] 를 numbers에 푸시하고
 *    signs[i]가 False이면 numbers에 absolutes[i] *= -1를 푸시 한다.
 * 2. 배열의 누적 값을 리턴한다.
 *
 * 반성
 * 어렵지 않은 문제여서 그런지 계획이 잘 세워졌습니다.
 * 어렵지 않은 문제들은 정말 복잡하지 않게끔 단순하게 계획에 세워지는데
 * 어려운 문제만 만나면 자꾸 단순하게 다가가려하지 않고 어렵게만 생각하는 것 같습니다...
 *
 */

const solution = (absolutes, signs) => {
  const numbers = [];
  for (let i = 0; i < absolutes.length; i += 1) {
    if (!signs[i]) {
      numbers.push(absolutes[i] * -1);
    } else {
      numbers.push(absolutes[i]);
    }
  }

  return numbers.reduce((acc, cur) => acc + cur, 0);
};

describe('음양 더하기', () => {
  it('실제 정수들의 합이 리턴됩니다.', () => {
    expect(solution([4, 7, 12], [true, false, true])).toBe(9);
  });
});
