/**
 * 미지의 것
 * - H-Index
 * 자료
 * - 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면
 *   h의 최댓값이 이 과학자의 H-Index이다.
 * - citations에는 논문의 인용 횟수가 담겨있다.
 * - citations의 요소 하나하나가 h이다.
 * 조건
 * - 논문별 인용 횟수는 0회 이상 10,000회 이하이다.
 * - 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하이다.
 * 계획
 * - citations를 내림차순 정렬한다.
 * - citations를 탐색하며
 *    - citations[i]가 자신보다 인용횟수가 많은 논문 수[i]보다 많으면 answer +=1을 한다.
 * 반성
 */

const solution = (citations) => {
  const sortableCitations = citations.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 0; i < sortableCitations.length; i += 1) {
    if (i < sortableCitations[i]) {
      answer += 1;
    }
  }

  return answer;
};

describe('H-Index', () => {
  it('H-index가 출력됩니다.', () => {
    expect(solution([3, 0, 6, 1, 5])).toBe(3);
  });
});
