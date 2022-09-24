/* eslint-disable guard-for-in */
/* eslint-disable operator-assignment */
/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 스파이가 입을 수 있는 서로 다른 옷의 조합의 수
 * 자료
 * - clothes[i][1] 은 키 clothes[i][0] 은 value로 만들 수 있다.
 * - Map 생성자를 사용할 수 있다.
 * 조건
 * - 하루에 최소 한 개의 의상은 입는다.
 * 계획
 * - object를 만든다.
 * - object에 해당 키가 없으면 2를 더해준다.
 * - object에 해당 키가 있다면 1을 더해준다.
 * - object의 키를 반복하여 불러오고 해당 값을 answer에 곱해준다.
 * - answer - 1(옷을 입지 않은 경우 제외)를 리턴한다.
 * 반성
 * 처음 문제의 접근은 괜찮았지만 옷을 입지 않은 경우를 제외하는 것을 생각하지 못해서
 * 계속 잘못된 값이 리턴되는 문제가 있었습니다.
 * 앞으로 문제를 풀 때, 문제에서 요구하는 바가 어떤 것인지 정확하게 파악할 수 있도록
 * 노력해야겠습니다.
 */

const solution = (clothes) => {
  let answer = 1;

  const clothesObj = clothes.reduce((acc, cur) => {
    const [, type] = cur;
    if (acc[type] !== undefined) {
      acc[type] += 1;
    } else {
      acc[type] = 2;
    }
    return acc;
  }, {});

  for (const x in clothesObj) {
    answer *= clothesObj[x];
  }

  return answer - 1;
};

describe('위장', () => {
  it('스파이가 입을 수 있는 서로 다른 옷의 조합의 수가 리턴됩니다.', () => {
    expect(
      solution([
        ['yellow_hat', 'headgear'],
        ['blue_sunglasses', 'eyewear'],
        ['green_turban', 'headgear'],
      ]),
    ).toBe(5);
    expect(
      solution([
        ['crow_mask', 'face'],
        ['blue_sunglasses', 'face'],
        ['smoky_makeup', 'face'],
      ]),
    ).toBe(3);
  });
});
