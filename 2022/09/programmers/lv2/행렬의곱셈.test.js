/**
 * 미지의 것
 * - 행렬을 곱한 값
 * 자료
 * - i는 고정시킬 a의 행
 * - j는 고정시킬 b의 열
 * - k는 a의 행에서 각 인덱스 접근, b의 열 고정해두고 행이 변하여 접근하도록 함
 * - z 반복문에서 sum에 행렬의 곱셈대로 곱한 수를 더해줌
 * 조건
 *
 * 계획
 *
 * 반성
 * 행렬만 나오면 너무 힘들다...
 * 매트릭스 문제를 많이 풀어봐야겠다..
 */

const solution = (arr1, arr2) => {
  const answer = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const arr = arr1[i];

    answer.push([]);
    for (let j = 0; j < arr2[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k += 1) {
        sum += arr[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }

  return answer;
};

describe('행렬의 곱셈', () => {
  it('행렬을 곱한 값을 리턴합니다.', () => {
    expect(
      solution(
        [
          [2, 3, 2],
          [4, 2, 4],
          [3, 1, 4],
        ],
        [
          [5, 4, 3],
          [2, 4, 1],
          [3, 1, 1],
        ],
      ),
    ).toEqual([
      [22, 22, 11],
      [36, 28, 18],
      [29, 20, 14],
    ]);
  });
});
