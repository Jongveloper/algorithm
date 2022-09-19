/**
 * 미지의 것
 *
 * 자료
 *
 * 조건
 *
 * 계획
 */

const solution = (board, skill) => {
  let answer = 0;

  for (let i = 0; i < skill.length; i += 1) {
    const current = skill[i];
    const attack = current[0] === 1;
    const value = current[5];
    for (let j = current[1]; j <= current[3]; j += 1) {
      for (let k = current[2]; k <= current[4]; k += 1) {
        if (attack) {
          board[j][k] -= value;
        } else {
          board[j][k] += value;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] > 0) {
        answer += 1;
      }
    }
  }

  return answer;
};

describe('파괴되지 않은 건물', () => {
  it('파괴되지 않은 건물의 수를 리턴합니다.', () => {
    expect(
      solution(
        [
          [5, 5, 5, 5, 5],
          [5, 5, 5, 5, 5],
          [5, 5, 5, 5, 5],
          [5, 5, 5, 5, 5],
        ],
        [
          [1, 0, 0, 3, 4, 4],
          [1, 2, 0, 2, 3, 2],
          [2, 1, 0, 3, 1, 2],
          [1, 0, 1, 3, 3, 1],
        ],
      ),
    ).toBe(10);
  });
});
