/**
 * 미지의 것
 * - 행렬을 덧셈한 결과
 *
 * 자료
 * - 각 원소의 자리에 맞춰 덧셈을 해주면 된다.
 * - arr1과 arr2는 행과열이 같다.
 *
 * 조건
 * arr1, arr2의 행과 열의 길이는 500을 넘지 않는다.
 * 계획
 * 이중 반복문을 돌며 arr1[i][j] + arr2[i][j]를 한다.
 *
 * 반성
 * 매트릭스가 나오면 굉장히 헷갈리는 것 같습니다.
 * 매트릭스에 관한 문제를 많이 풀어봐야할 것 같습니다.
 */

const solution = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      arr1[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr1;
};

describe('행렬의 덧셈', () => {
  it('행렬을 덧셈한 값이 리턴됩니다.', () => {
    expect(
      solution(
        [
          [1, 2],
          [2, 3],
        ],
        [
          [3, 4],
          [5, 6],
        ],
      ),
    ).toEqual([
      [4, 6],
      [7, 9],
    ]);
  });
});
