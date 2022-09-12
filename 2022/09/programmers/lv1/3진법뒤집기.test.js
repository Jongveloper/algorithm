/**
 * 미지의 것
 * - 3진법으로 만든 후 뒤집고 다시 10진법으로 변환한 수
 * 자료
 * - toString() 메서드를 활용하면 진법을 변경할 수 있다.
 *
 * 조건
 * - n은 1 이상 100,000,000 이하인 자연수이다.
 * 계획
 * - n을 3진법으로 변경합니다.
 * - n을 뒤집습니다.
 * - n을 10진수로 변경한 후 리턴합니다.
 *
 * 반성
 * parseInt 사용법을 제대로 숙지하지 못했던 것 같습니다.
 * 자바스크립트 내장 메서드를 잘 숙지할 수 있도록 해야겠습니다.
 */

const solution = (number) => {
  const threeReverse = number.toString(3).split('').reverse().join('');
  return parseInt(threeReverse, 3);
};

describe('3진법 뒤집기', () => {
  it('10진수를 3진법으로 만든 후 3진법을 뒤집고 다시 10진법으로 변환한 수를 출력합니다.', () => {
    expect(solution(45)).toBe(7);
  });
});
