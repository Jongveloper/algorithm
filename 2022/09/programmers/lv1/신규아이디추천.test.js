/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/**
 * 미지의 것
 * - 규칙에 맞는 아이디
 *
 * 자료
 * - 1단계 대문자를 소문자로 바꾼다.
 * - 2단계 알파벳 , 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거한다.
 * - 3단계 마침표가 두번 이상이면 마침표를 1개로 바꾼다.
 * - 4단계 아이디의 처음과 마지막에 .이 위치한다면 제거한다.
 * - 5단계 아이디가 빈 문자열이면, a를 대입한다.
 * - 6단계 아이디의 길이가 16자 이상이면 15자까지만 출력한다.
 *  -7단계 아이디의 길이가 2자 이하라면 아이디의 마지막 문자를 길이가 3이될 때까지 끝에 붙인다.
 * 조건
 * 길이 1 이상 1,000이하인 문자열이다.
 * 계획
 * - 1단계 대문자를 소문자로 바꾼다.
 * - 2단계 알파벳 , 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거한다.
 * - 3단계 마침표가 두번 이상이면 마침표를 1개로 바꾼다.
 * - 4단계 아이디의 처음과 마지막에 .이 위치한다면 제거한다.
 * - 5단계 아이디가 빈 문자열이면, a를 대입한다.
 * - 6단계 아이디의 길이가 16자 이상이면 15자까지만 출력한다.
 *  -7단계 아이디의 길이가 2자 이하라면 아이디의 마지막 문자를 길이가 3이될 때까지 끝에 붙인다.
 * 반성
 * - 정규표현식...을 열심히 공부해야겠습니다!
 */

const solution = (new_id) => {
  // 1단계: 모든 대문자를 소문자로
  new_id = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
  new_id = new_id.replace(/[^\w\-\.]/g, '');

  // 3단계: 연속되는 마침표는 마침표 하나로
  new_id = new_id.replace(/\.{2,}/g, '.');

  // 4단계: 처음이나 끝에 마침표가 있으면 제거
  new_id = new_id.replace(/^\.|\.$/, '');

  // 5단계: new_id가 빈 문자열이면 "a" 대입
  if (new_id.length === 0) new_id = 'a';

  // 6단계: new_id의 길이가 16자 이상이면,
  // new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  // 제거 후 끝에 마침표가 있으면 제거
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, '');

  // 7단계: new_id의 길이가 2자 이하이면,
  // new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 이어붙임
  const len = new_id.length;
  if (len <= 2) new_id += new_id[len - 1].repeat(3 - len);

  return new_id;
};

describe('신규 아이디 추천', () => {
  it('신규 아이디를 추천합니다.', () => {
    expect(solution('...!@BaT#*..y.abcdefghijklm')).toBe('bat.y.abcdefghi');
    expect(solution('z-+.^.')).toBe('z--');
    expect(solution('=.=')).toBe('aaa');
  });
});
