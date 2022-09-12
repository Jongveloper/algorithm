/**
 * 미지의 것
 * - 실패율
 * 자료
 * - 실패율 : 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * - N + 1 은 마지막 스테이지까지 클리어 한 사용자를 나타냄
 * - 실패율이 같으면 오름차순으로 정렬해야한다.
 * - 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0이다.
 * - filter를 활용하여 해당 번호를 제외한 배열을 리턴할 수 있다.
 * - i / filter한 배열의 길이를 하고 오브젝트에 할당을 하면
 * - 오브젝트에 값을 넣어 비교하며 원하는 답을 찾을 수 있다.
 * 조건
 *
 * 계획
 * - chart 오브젝트를 생성한다.
 * - stages 배열을 N만큼 반복문을 돌며
 *  - i + 1 / stages.length를 하여 chart[i+1]에 할당한다.
 * - chart 오브젝트의 반복문을 돌며 value 값을 내림차순으로 리턴한다.
 * 반성
 * 테스트 케이스를 제대로 설정해야할 것 같습니다.
 * 테스트 케이스를 놓치는 바람에... 정답 코드임에도 한참 헤매는 결과를 초래했습니다..!
 * 항상 정신을 차리고 테스트 코드를 작성해야겠습니다!
 */

const solution = (N, stages) => {
  const answer = [];
  const chart = [];
  let filterStages = stages;

  for (let i = 0; i < N; i += 1) {
    const filteredStage = stages.filter((stg) => stg === i + 1);

    const chartChild = {
      stage: i + 1,
      fail: filteredStage.length / filterStages.length,
    };

    chart.push(chartChild);

    filterStages = filterStages.filter((stage) => stage !== i + 1);
  }

  const sortedChart = chart.sort((a, b) => {
    return b.fail - a.fail;
  });

  for (let i = 0; i < sortedChart.length; i += 1) {
    answer.push(sortedChart[i].stage);
  }

  return answer;
};

describe('실패율', () => {
  it('실패율을 내림차순으로 정렬한 배열을 리턴합니다.', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
    expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
  });
});
