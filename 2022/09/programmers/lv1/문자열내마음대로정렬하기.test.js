/**
 * 미지의 것
 * 문자열로 구성된 배열의 정렬된 배열
 *
 * 자료
 * 문자열의 인덱스 n번 째 기준으로 정렬하면 된다.
 * sort를 사용하면 정렬을 할 수 있다.
 * string[index]의 같은 문자열이 여럿 일 경우,
 * 사전순으로 앞선 문자열이 앞쪽에 위치한다.
 * 조건
 * strings는 길이 1 이상, 50 이하인 배열이다.
 * strings의 원소는 소문자 알파벳으로 이루어져 있다.
 * strings의 원소는 길이 1이상, 100이하 문자열이다.
 * 계획
 * 문자열을 sort해서 리턴한다.
 *
 * 반성
 * 문제에서 사전순이라는 것을 잘 이해하지 못했던 것 같습니다.
 * 문제를 분석할 때, 조금 더 신중히 해야겠습니다.
 */

const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] > b[n]) {
      return 1;
    }

    if (a[n] === b[n]) {
      if (a > b) {
        return 1;
      }

      if (a < b) {
        return -1;
      }
    }
  });
};

describe('문자열 내 마음대로 정렬하기', () => {
  it('문자열을 해당 조건대로 정렬합니다.', () => {
    expect(solution(['sun', 'bed', 'car'], 1)).toEqual(['car', 'bed', 'sun']);
    expect(solution(['abce', 'abcd', 'cdx'], 2)).toEqual([
      'abcd',
      'abce',
      'cdx',
    ]);
  });
});
