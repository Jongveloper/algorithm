/**
 * 미지의 것
 * - 조카가 발음할 수 있는 단어의 개수
 *
 * 자료
 * - filter를 사용하면 조건에 만족하는 요소만 남는 배열을 만들 수 있다.
 *
 * 조건
 * - 연속해서 같은 발음을 하지 못한다.
 * - 발음을 조합해서 할 수 있다.
 * 계획
 * - 조카가 발음할 수 있는 단어의 배열을 만든다.
 * - babbling에서 조카가 발음할 수 있는 단어만 필터링한 새로운 배열을 만든다.
 * - 필터링한 배열의 길이를 리턴한다.
 * 반성
 * - 재귀 함수를 제대로 사용하지 못했었던 것 같다....
 * 이 문제는 다시 한번 풀어봐야할 것 같다..
 */
const base = ['aya', 'ye', 'woo', 'ma'];

const removePossible = (word = '') => {
  if (word === '') {
    return true;
  }

  const found = base.find((it) => word.startsWith(it));

  if (!found) {
    return false;
  }

  const next = word.replace(found, '');

  if (next.startsWith(found)) {
    return false;
  }

  return removePossible(next);
};

const solution = (babbling = []) => {
  return babbling.filter(removePossible).length;
};

describe('옹알이2', () => {
  it('조카가 발음할 수 있는 단어의 개수를 리턴한다.', () => {
    expect(solution(['aya', 'yee', 'u', 'maa'])).toBe(1);
    expect(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])).toBe(2);
  });
});
