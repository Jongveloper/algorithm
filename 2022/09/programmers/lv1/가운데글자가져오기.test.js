/**
 * 미지의 것
 * 가운데 두 글자
 * 자료
 * 문자열의 길이가 홀수이면 Math.floor(str.length / 2)를 하면 가운데 인덱스를 구할 수 있다.
 * 문자열의 길이가 짝수이면 str.length / 2와 str.length / 2 -1 을 하면 가운데 두글자를 구할 수 있다.
 *
 * 조건
 * s는 길이가 1 이상, 100 이하인 문자열이다.
 *
 * 계획
 * 문자열의 길이가 홀수이면
 *  Math.floor(str.length/2)위치에 있는 글자를 리턴
 * 문자열의 길이가 짝수라면
 * str.length / 2와 str.length / 2 -1을 리턴
 *
 * 반성
 * 방금 푼 풀이보다 더 좋은 방법이 있을 것 같은데
 * 떠오르지가 않는다....
 * 알고리즘을 많이 풀어봐야할 것 같다..!
 *
 * 지금은 알고리즘 연습이기 때문에 문제를 빨리 푸는 것 보단
 * 문제를 어떻게 푸느냐가 중요한데 자꾸 빨리 풀려고 하니
 * 중복되는 부분을 간소화할 수 있음에도 그런 걸 놓치는 것 같다....!
 * 반성하자..
 */

const solution = (str) => {
  let answer = '';
  const mid = str.length / 2;
  if (str.length % 2 === 0) {
    answer += str[mid - 1];
    answer += str[mid];
  } else {
    answer += str[Math.floor(mid)];
  }
  return answer;
};

describe('가운데 글자 가져오기', () => {
  it('가운데 글자를 가져옵니다.', () => {
    expect(solution('abcde')).toBe('c');
    expect(solution('qwer')).toBe('we');
  });
});
