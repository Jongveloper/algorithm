/**
 * 미지의 것
 * - 큐 자료구조에 따라 원소를 추출 및 삽입하여 각 큐의 합을 같게 만들 때의 최소 횟수
 * 자료
 * - 두 배열의 합을 더해서 2로 나눠 짝수가 아니면 같게 만들 수 없기 때문에 -1을 반환한다.
 * - 배열의 합이 두 배열을 더한 값 / 2 보다 크면 shift를 해주면 된다.
 *
 * 조건
 * - 큐의 길이는 1이상 300,000이하
 * 계획
 * - 두 배열의 합을 구한다.
 * - 두 배열의 합이
 *    - 홀수라면 -1을 리턴한다.
 *    - 짝수라면 두 배열의 합 / 2보다 큰 배열의 첫 원소를 다른 배열에 넣어 준다.
 *    - 합이 같아질 때까지 반복한다.
 * 반성
 */

const solution = (arr1, arr2) => {
  const totalArray = [...arr1, ...arr2];
  const maxCount = 4 * totalArray.length;
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
  const target = sum(totalArray) / 2;
  let count = 0;
  let start = 0;
  let end = arr1.length;
  let totalSum = sum(totalArray.slice(start, end));
  while (count <= maxCount) {
    if (target > totalSum) {
      totalSum += totalArray[end];
      end += 1;
    } else if (target < totalSum) {
      totalSum -= totalArray[start];
      start += 1;
    } else if (target === totalSum) {
      return count;
    }
    count += 1;
  }

  return -1;
};

describe('두 큐 합 같게 만들기', () => {
  it('각 큐의 합을 같게 만들 때의 최소 횟수', () => {
    expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
    // expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7);
    // expect(solution([1, 1], [1, 5])).toBe(-1);
  });
});
