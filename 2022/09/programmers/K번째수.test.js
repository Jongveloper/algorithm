/**
 * 미지의 것
 * - array의 i번 째 숫자부터 j번 째 숫자까지 자르고 정렬했을 때, k번째에 있는 수
 * 자료
 * - array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 *  1. array의 두번째부터 5번째까지 잘랐을 때 [5,2,6,3] 이다.
 *  2. 1.에서 나온 배열을 정렬하면 [2,3,5,6] 이다.
 *  3. 2.에서 나온 배열의 3번 째 숫자는 5이다.
 *
 * slice를 사용하면 배열을 자를 수 있다.
 *
 * 조건
 * array의 길이는 1 이상 100 이하이다.
 *
 * 단계
 * 1. answer 배열을 만든다.
 * 2. commands의 반복문을 돌며 commands[i][0]부터 commands[i][1]까지 자르고
 * 3. 2.에서 자른 배열을 정렬한 뒤, commands[i][2] 번째 수를 answer 배열에 넣는다.
 *
 * 반성
 * 문제에서는 index번호가 아닌 몇 번째에 있는지를 구하는 것이었는데
 * 이 부분을 캐치하지 못해서 원하던 결과값을 구하지 못했었습니다.
 * 항상 문제를 잘 읽어야겠습니다.
 */

const solution = (array, commands) => {
  const answer = [];

  for (let i = 0; i < commands.length; i += 1) {
    const sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);

    sliceArray.sort((a, b) => a - b);

    answer.push(sliceArray[commands[i][2] - 1]);
  }

  return answer;
};

describe('K번째 수', () => {
  it('K번째 수가 출력됩니다.', () => {
    expect(
      solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
          [2, 5, 3],
          [4, 4, 1],
          [1, 7, 3],
        ],
      ),
    ).toEqual([5, 6, 3]);
  });
});
