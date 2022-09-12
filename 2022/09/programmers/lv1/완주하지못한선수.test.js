/**
 * 미지의 것
 * - 완주하지 못한 선수
 * 자료
 * - 참가자 명단
 * - 완주한 선수의 명단
 * - 참가자 중 동명이인이 있을 수 있다.
 * - 한 명의 선수만 완주를 하지 못했다.
 *
 * filter를 사용할 수 없다 (동명이인이 있을 수 있기 때문에)
 * 두개의 배열을 정렬시킨 뒤, answer += 완주[i] !== 참가자[i]을 하면 완주하지 못한 선수를 가려낼 수 있다.
 *
 * 조건
 * - 동명이인이 있을 수 있음
 * - 알파벳 소문자로 이루어져있음
 *
 * 계획
 * - 완주자 명단과 참가자 명단을 정렬한다.
 * - imCompletionPlayer 변수를 선언하고 빈 문자열을 할당한다.
 * - 정렬한 참가자 명단을 탐색하며 완주자 명단과 일치하지 않는 참가자를 noCompletionPlayer에 할당한다.
 * 반성
 * 처음 문제를 읽었을 때, 동명이인을 생각하지 못하고
 * 간단히 filter를 사용해서 풀면 되겠다라고만 생각하고 이 생각에 꽂혀있던 것 같습니다.
 * 문제를 다시 한 번 읽어보니 동명이인 조건이 있었고
 * 계획 단계에 오기 전에 자료를 수정하였습니다.
 * 문제를 꼼꼼히 읽어야겠습니다.
 *
 */

const solution = (player, completion) => {
  let imCompletionPlayer = '';

  const sortedPlayer = player.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < sortedPlayer.length; i += 1) {
    if (sortedPlayer[i] !== sortedCompletion[i]) {
      imCompletionPlayer = sortedPlayer[i];
      return imCompletionPlayer;
    }
  }
};

describe('완주하지 못한 선수', () => {
  it('완주하지 못한 선수를 출력합니다.', () => {
    expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');
    expect(
      solution(
        ['mislav', 'stanko', 'mislav', 'ana'],
        ['stanko', 'ana', 'mislav'],
      ),
    ).toBe('mislav');
  });
});
