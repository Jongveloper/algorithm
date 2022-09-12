/**
 * 미지의 것
 * str에서 나타나는 숫자 중 최솟값과 최대값
 * 자료
 * - '1 4'처럼 최댓값이 뒤에 최솟값이 앞에 나온다.
 * - 문자열을 배열로 만들 수 있다.
 * - 배열에서 최댓값과 최솟값을 구할 수 있다.
 * 조건
 * - 공백으로 구분되어있다.
 * 계획
 * - 문자열을 배열로 만든다.
 * - 최댓값과 최솟값을 answer배열에 넣는다.
 * - 공백으로 join한다.
 * 반성
 * 간단한 문제였지만 코드를 작성하기 전에 계획을 세우는 것은
 * 가끔씩 헷갈리는 것 같습니다..!
 * 연습을 많이 해야할 것 같습니다!
 */

const solution = (str) => {
  const strToArray = str.split(' ');

  const answer = [];

  answer.push(Math.min(...strToArray));
  answer.push(Math.max(...strToArray));

  return answer.join(' ');
};

describe('최댓값과 최솟값', () => {
  it('최댓값과 최솟값이 리턴됩니다.', () => {
    expect(solution('1 2 3 4')).toBe('1 4');
    expect(solution('-1 -2 -3 -4')).toBe('-4 -1');
  });
});
