const solution = () => {
  const str = ['강한친구 대한육군', '강한친구 대한육군'];

  return str.join('\n');
};

describe('We love kriii', () => {
  it('문구가 출력됩니다.', () => {
    expect(solution()).toBe(`강한친구 대한육군
강한친구 대한육군`);
  });
});
