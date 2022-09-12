/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/**
 * 미지의 것
 * - 키패드를 순서대로 누른 손가락을 문자열로 나타낸 것
 *
 * 자료
 * - 0이 아니고 3의 배수이면 무조건 오른손으로 누른다.
 * - 3으로 나눈 나머지가 1이라면 무조건 왼손으로 나눈다.
 * - 거리가 같다면 왼손잡이라면 왼손으로 오른손잡이라면 오른손으로 누른다.
 *
 * 조건
 * - hand는 left아니면 right이다.
 * - numbers 배열 원소의 값은 0이상 9이하인 정수이다.
 *
 * 계획
 * - 키패드를 좌표화한 객체를 생성한다.
 * - 현재 왼손과 오른손의 위치를 *과 #으로 초기화한 변수를 선언한다.
 * - numbers를 탐색하며 0이 아니고 3의 배수이면 R을 3으로 나눈 나머지가 1이라면 L을 result에 더해준다.
 *
 * 반성
 * 문제가 몇시간 째 풀리지 않아 해답을 보았는데
 * 좌표를 찾는 문제를 많이 어려워하는 것 같습니다...!
 * 좌표에 대한 문제를 많이 접해봐야할 것 같습니다!
 */

const distance = (number, lh, rh, pos, hand) => {
  const leftDistance =
    Math.abs(pos[lh][0] - pos[number][0]) +
    Math.abs(pos[lh][1] - pos[number][1]);
  const rightDistance =
    Math.abs(pos[rh][0] - pos[number][0]) +
    Math.abs(pos[rh][1] - pos[number][1]);

  if (leftDistance === rightDistance) {
    return hand === 'left' ? 'L' : 'R';
  }

  return leftDistance < rightDistance ? 'L' : 'R';
};

const solution = (numbers, hand) => {
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let leftHand = '*';
  let rightHand = '#';
  let result = '';

  for (const num of numbers) {
    if (num % 3 === 1) {
      result += 'L';
      leftHand = num;
    } else if (num !== 0 && num % 3 === 0) {
      result += 'R';
      rightHand = num;
    } else {
      result += distance(num, leftHand, rightHand, pos, hand);
      result[result.length - 1] === 'L' ? (leftHand = num) : (rightHand = num);
    }
  }

  return result;
};

describe('키패드 누르기', () => {
  it('키패드를 누른 손가락위치가 순서대로 출력됩니다.', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe(
      'LRLLLRLLRRL',
    );
  });
});
