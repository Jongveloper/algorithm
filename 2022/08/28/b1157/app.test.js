/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString().trim();

/**
 * 알파벳 대소문자로 된 단어가 주어지면,
 * 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
 * 단, 대문자와 소문자를 구분하지 않는다.
 *
 * 1. 문자열을 대문자로 통일한다.
 * 2. Map을 통해서 각 문자에 몇개의 글자가 있는지 확인한다.
 * 3. max변수를 선언해서 가장 많은 글자의 갯수인지 확인 후 글자의 갯수가 많다면 해당 갯수를 max로 바꾼다.
 * 4. 만약 가장 많은 글자의 갯수가 여러개라면 ? 를 출력한다.
 *
 */

const toUpperWord = (str) => {
  return str.toUpperCase();
};

const toObject = (s) => {
  const newMap = s.split('').reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  return newMap;
};

const solution = (string) => {
  let answer = '';
  const upperString = toUpperWord(string);
  const stringToObject = toObject(upperString);

  let max = Number.MIN_SAFE_INTEGER;
  for (const key in stringToObject) {
    if (stringToObject[key] === max) {
      answer = '?';
    }
    if (stringToObject[key] > max) {
      answer = key;
      max = stringToObject[key];
    }
  }
  return answer;
};

process.platform === 'linux' && console.log(solution(input));

describe('단어 공부', () => {
  it('가장 많이 사용된 알파멧을 대문자로 출력, 여러개 존재하는 경우 ? 출력', () => {
    expect(solution('d')).toBe('D');
  });
  it('대문자로 변환합니다.', () => {
    expect(toUpperWord('abcd')).toBe('ABCD');
  });
  it('문자열을 객체로 변환하고 갯수를 셉니다.', () => {
    expect(toObject('aabc')).toEqual({ a: 2, b: 1, c: 1 });
  });
});
