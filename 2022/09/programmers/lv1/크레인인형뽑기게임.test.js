/* eslint-disable no-param-reassign */
/**
 * 미지의 것
 * - 인형이 사라진 개수
 * 자료
 * - 같은 인형이 두개가 되면 인형이 사라진다.
 * - 배열을 탐색하며 인형을 빼낼 수 있다.
 *   - board[i]는 배열의 y를 탐색
 *   - board[i][j]는 배열의 x를 탐색
 *   - board[i][0] !== 0이 아니면
 *      - box.push(board[i][0])
 *      - box[box.length - 1] === board[i][0]이라면
 *         - answer +=1
 *         - box.pop()
 *      - board[i][0] = 0
 * 조건
 * - 이동한 곳에 인형이 없으면 무효
 * 계획
 * - board[i]는 배열의 y를 탐색
 *   - board[i][j]는 배열의 x를 탐색
 *   - board[i][0] !== 0이 아니면
 *      - box.push(board[i][0])
 *      - box[box.length - 1] === board[i][0]이라면
 *         - answer +=1
 *         - box.pop()
 *      - board[i][0] = 0
 * 반성
 * 계획을 맞게 세웠음에도 계속 헷갈렸던 것 같습니다.
 * 문제를 많이 풀어서 헷갈리지 않게끔 해야할 것 같습니다!
 */

const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i][move - 1] !== 0) {
        const target = board[i][move - 1];
        board[i][move - 1] = 0;

        if (target === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(target);
        }
        break;
      }
    }
  });

  return answer;
};

describe('크레인 인형 뽑기 게임', () => {
  it('사라진 인형 개수를 리턴합니다.', () => {
    expect(
      solution(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 3],
          [0, 2, 5, 0, 1],
          [4, 2, 4, 4, 2],
          [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4],
      ),
    ).toBe(4);
  });
});
