/**
 * 미지의 것
 * - 배열의 요소들이 2배가 된 배열
 * 자료
 * - map을 사용하면 새로운 배열을 리턴한다.
 * 계획
 * - map을 사용하여 각 배열의 요소 x 2를 한다.
 */

const solution = (numbers) => {
  return numbers.map((number) => number * 2);
};

describe('배열 두배 만들기', () => {
  it('배열의 요소들이 2배가 된 배열이 리턴됩니다.', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });
});
