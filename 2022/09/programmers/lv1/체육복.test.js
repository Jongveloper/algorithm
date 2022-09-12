/**
 * 미지의 것
 * 체육 수업을 들을 수 있는 총 학생 수
 *
 * 자료
 * - 바로 앞번호의 학생이나 바로 뒷 번호의 학생에게 체육복을 빌려줄 수 있다.
 *    - 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있다.
 * - 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수도 있다.
 *
 * - 여벌 체육복이 없고 잃어버린 사람만 가려내면 여벌 체육복에 대한 생각을 안할 수 있다.
 *
 * 조건
 * - 전체 학생의 수는 2명 이상 30명 이하이다.
 * - 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없다.
 * - 여벌의 체육복을 가져온 학생 수는 1명 이상 n명 이하이고 중복되는 번호는 없다.
 * - 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있다.
 *
 * 계획
 * 1. 진짜 빌려줄 수 있는 학생들의 배열과 진짜 도난당한 학생들의 배열을 만든다.
 * 2. 진짜 잃어버린 학생들 배열을 오름차순 정렬한다.
 * 3. attend = n - lost.length
 * 4. 진짜 잃어버린 학생들의 배열을 탐색하며
 *      - 만약 빌려줄 수 있는 학생 배열 길이가 0 이라면 탐색을 종료
 *      - 만약 빌려줄 수 있는 학생 배열에 잃어버린 학생 -1 혹은 +1이 포함되어있다면
 *      - attend를 증가시킨다.
 *
 * 반성
 * 그리디는 아직 어려운 것 같습니다.
 * DFS, BFS, 그리디, DP 유형의 문제를 많이 풀어봐야할 것 같습니다...!
 *
 */

const solution = (n, lost, reserve) => {
  const realLost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);

  let realReserve = reserve.filter((student) => !lost.includes(student));

  let attend = n - realLost.length;

  realLost.forEach((student) => {
    if (realReserve.length === 0) {
      return;
    }

    if (realReserve.includes(student - 1)) {
      realReserve = realReserve.filter((std) => std !== student - 1);
      attend += 1;
    } else if (realReserve.includes(student + 1)) {
      realReserve = realReserve.filter((std) => std !== student + 1);
      attend += 1;
    }
  });

  return attend;
};

describe('체육복', () => {
  it('체육 수업을 들을 수 있는 총 학생 수를 리턴합니다.', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  });
});
