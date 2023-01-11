/**
 * 미지의 것
 * - 배열의 중앙 값
 * 자료
 * - 배열의 길이 / 2가 중간이다.
 * 조건
 *
 * 계획
 * - 배열을 정렬한다.
 * - 중앙값 index를 구한다.
 * - 배열[중앙index]를 리턴한다.
 * 반성
 */

// const solution = (array) => {
//   const sortedArray = array.sort((a, b) => a - b);
//   const middle = Math.floor(sortedArray.length / 2);

//   return sortedArray[middle];
// };

const solution = (array) => {
  return array.sort((a, b) => a - b).at(Math.floor(array.length / 2));
};

describe('중앙값구하기', () => {
  it('중앙 값이 출력됩니다.', () => {
    expect(solution([1, 2, 7, 10, 11])).toBe(7);
    expect(solution([9, -1, 0])).toBe(0);
  });
});
