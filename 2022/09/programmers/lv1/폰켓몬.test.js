/**
 * 미지의 것
 * - 선택할 수 있는 폰켓몬 종류 개수의 최댓값
 * 자료
 * - nums.length / 2 마리만큼 가져갈 수 있다.
 * - 중복된 폰켓몬이 있다.
 * - Set 생성자를 이용해 중복을 제거할 수 있다.
 * - numbers의 길이는 항상 짝수이다.
 * 조건
 * - nums는 폰켓몬의 종류 번호가 담긴 1차원 배열이다.
 * - 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 리턴하면 된다.
 * 계획
 * - select = numbers.length / 2를 선언한다.
 * - Set 생성자를 통해 numbers의 중복제거를 한다.
 * 반성
 * 문제를 이해하는데 어려움이 있었던 것 같다.
 * 많은 문제들을 풀어보며 문제의 독해력을 높여야겠다
 */

const solution = (numbers) => {
  const max = numbers.length / 2;
  const arr = [...new Set(numbers)];

  return arr.length > max ? max : arr.length;
};

describe('first', () => {
  it('선택할 수 있는 폰켓몬의 종류 개수의 최대값', () => {
    expect(solution([3, 1, 2, 3])).toBe(2);
    expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
    expect(solution([3, 3, 3, 2, 2, 2])).toBe(2);
  });
});
