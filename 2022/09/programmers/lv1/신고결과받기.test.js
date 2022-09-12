/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/**
 * 미지의 것
 * - 정지를 시킨 횟수가 담긴 배열
 * 자료
 * - 각 유저는 한 번에 한 명의 유저를 신고할 수 있다.
 * - 신고 횟수에 제한은 없다.
 * - 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리된다.
 *
 * 조건
 * - 아이디 리스트는 중복되지 않는다.
 * - 자기 자신을 신고하는 경우는 없다.
 *
 * 계획
 * - 동일 유저에 대한 신고 횟수 카운트를 막기 위해 중복을 제거한 배열을 만든다.
 * - 정지당한 사람의 배열을 만든다.
 * - count를 하기위해 id_list의 길이만큼의 배열을 만든다.
 * - mail을 보내기 위해 id_list의 길이만큼의 배열을 만든다.
 * - 중복을 제거한 배열을 탐색하며
 *  - 신고당한 사람을 split을 이용해 구한다.
 *  - 신고당한 사람을 카운트한다.
 *  - 만약 k보다 크거나 같게 신고를 당했으면 out에 넣는다.
 * - 중복을 제거한 배열을 다시 탐색하며
 *  - 신고한 사람과 신고 당한 사람을 만든다.
 *  - 만약 신고한 사람이 정지당한 사람에 포함되어있으면
 *  - mail에 카운트를 한다.
 *
 * 반성
 */

function solution(id_list, report, k) {
  const setReport = [...new Set(report)];
  const out = [];
  const count = Array(id_list.length).fill(0);
  const mail = Array(id_list.length).fill(0);

  for (const x of setReport) {
    const reported = x.split(' ')[1];

    const idxReported = id_list.indexOf(reported);

    count[idxReported] += 1;

    if (count[idxReported] >= k) {
      out.push(id_list[idxReported]);
    }
  }

  setReport.map((x) => {
    const reporter = x.split(' ')[0];
    const reported = x.split(' ')[1];

    if (out.indexOf(reported) >= 0) {
      const idx = id_list.indexOf(reporter);
      mail[idx] += 1;
    }
  });

  return mail;
}

describe('신고 결과 받기', () => {
  it('정지를 시킨 횟수가 배열에 담겨 리턴됩니다.', () => {
    expect(
      solution(
        ['muzi', 'frodo', 'apeach', 'neo'],
        ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
        2,
      ),
    ).toEqual([2, 1, 1, 0]);
  });
});
