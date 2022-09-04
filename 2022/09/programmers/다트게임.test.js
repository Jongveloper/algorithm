/* eslint-disable no-restricted-globals */
/**
 * 미지의 것
 * 다트 총 점수
 *
 * 자료
 * - 다트 게임은 총 3번의 기회로 구성된다.
 * - 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
 * - 점수와 함께 S D T 영역이 존재하고 각 영역 당첨 시
 *   S : 본 점수
 *   D : 점수 ** 2
 *   T : 점수 ** 3 으로 계산된다.
 * - 옵션으로는 * # 이 존재하며
 *   * : 당첨 시 해당 점수와 바로 전에 얻은 점수를 2배로 만든다
 *   # : 당첨 시 해당 점수는 마이너스 된다.
 * - 스타상은 첫 번째 기회에서 나올 수 있다. 이 경우 첫 번째 스타상의 점수만 2배가 된다.
 * - 스타상의 효과는 다른 스타상의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상의 점수는 -2배가 된다.
 * - 스타상 당첨 시, 전에 점수도 2배를 해야하므로 배열을 만들어 점수를 계산하고 배열에 넣어야 한다.
 *
 *
 * 조건
 * 점수는 0에서 10사이의 정수이다.
 * 보너스는 S, D, T 중 하나이다.
 * 옵션은 *이나 # 중 하나이며, 없을 수도 있다.
 *
 * 계획
 * 1. score 배열을 만든다.
 * 2. dartResult를 반복문을 통해 문자를 확인하au
 *    - 정수일 경우 score에 넣고
 *    - 문자일 경우
 *        - S면 그대로 넘어가고
 *        - D면 score[score.length-1] ** 2
 *        - T면 score[score.length-1] ** 3
 *        - * 면 score[score.length -1 * 2]와 score[score.length -2 * 2]를 한다.
 *        - # 면 score[score.length -1 * -1]을 해준다.
 * 3. score의 합을 반환한다.
 * 반성
 * ....!
 */

const solution = (dartResult) => {
  const totalScore = [];

  dartResult.split('').forEach((score, i) => {
    if (isNaN(score)) {
      if (score === 'D') {
        totalScore[totalScore.length - 1] **= 2;
      }
      if (score === 'T') {
        totalScore[totalScore.length - 1] **= 3;
      }
      if (score === '*') {
        totalScore[totalScore.length - 1] *= 2;
        totalScore[totalScore.length - 2] *= 2;
      }
      if (score === '#') {
        totalScore[totalScore.length - 1] *= -1;
      }
    } else if (score === '1' && !isNaN(dartResult[i + 1])) {
      totalScore.push(10);
    } else if (score === '0' && totalScore[totalScore.length - 1] === 10) {
    } else {
      totalScore.push(+score);
    }
  });

  return totalScore.reduce((a, b) => a + b, 0);
};

describe('다트 게임', () => {
  it('점수가 반환됩니다.', () => {
    expect(solution('1S2D*3T')).toBe(37);
    expect(solution('1D2S#10S')).toBe(9);
    expect(solution('1D2S0T')).toBe(3);
    expect(solution('1D2S3T*')).toBe(59);
    expect(solution('1T2D3D#')).toBe(-4);
    expect(solution('10D4S10D')).toBe(204);
  });
});
