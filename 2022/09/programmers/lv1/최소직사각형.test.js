/**
 * 미지의 것
 * - 모든 명함을 수납할 수 있는 가장 작은 지갑 크기
 * 자료
 * - w가 h보다 작으면 위치를 바꾼다.
 * 조건
 *
 * 계획
 * - sizes를 탐색하며 w가 h보다 작으면 위치를 바꾼 배열을 리턴한다.
 * - 위의 과정에서 나온 배열을 탐색하며 maxSize =[0,0] 을 선언하여 가장 큰 것으로 바꿔준다.
 * 반성
 */

const solution = (sizes) => {
  const rotated = sizes.map(([w, h]) => (w < h ? ([w, h] = [h, w]) : [w, h]));

  const maxSize = [0, 0];

  rotated.forEach(([w, h]) => {
    if (maxSize[0] < w) maxSize[0] = w;
    if (maxSize[1] < h) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
};

describe('최소 직사각형', () => {
  it('모든 명함을 수납할 수 있는 가장 작은 지갑 크기가 리턴됩니다.', () => {
    // expect(
    //   solution([
    //     [60, 50],
    //     [30, 70],
    //     [60, 30],
    //     [80, 40],
    //   ]),
    // ).toBe(4000);

    expect(
      solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
      ]),
    ).toBe(120);
  });
});
