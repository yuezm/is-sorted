'use strict';

const isSorted = require('../index');

describe('test sort', () => {
  test('Array include number', () => {
    expect(isSorted([ 1, 2, 3, 4 ])).toBe(1);
    expect(isSorted([ 4, 3, 2, 1 ])).toBe(-1);
    expect(isSorted([ 1, 1, 1, 1 ])).toBe(0);
  });

  test('Array include string', () => {
    expect(isSorted([ 'a', 'b', 'c' ])).toBe(1);
    expect(isSorted([ 'c', 'b', 'a' ])).toBe(-1);
    expect(isSorted([ 'a', 'a', 'a' ])).toBe(0);
  });

  const arrayFn = (a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value < b.value) {
      return 1;
    } else {
      return 0;
    }
  };

  test('Array include Object', () => {
    expect(isSorted([ { value: 1 }, { value: 2 } ], arrayFn)).toBe(1);
    expect(isSorted([ { value: 2 }, { value: 1 } ], arrayFn)).toBe(-1);
    expect(isSorted([ { value: 1 }, { value: 1 } ], arrayFn)).toBe(0);
  });

  test('Object', () => {
    expect(isSorted({ a: 'xx', b: 'yy', c: 'zz' })).toBe(1);
    expect(isSorted({ c: 'xx', b: 'yy', a: 'zz' })).toBe(-1);
    expect(isSorted({ a: 'xx' })).toBe(0);
  });

  const objectFn = (a, b, data) => {
    if (data[ a ].value < data[ b ].value) {
      return 1;
    } else if (data[ a ].value > data[ b ].value) {
      return -1;
    } else {
      return 0;
    }
  };

  test('Object has fn', () => {
    expect(isSorted({ a: { value: 0 }, b: { value: 1 }, c: { value: 2 } }, objectFn)).toBe(1);
    expect(isSorted({ a: { value: 2 }, b: { value: 1 }, c: { value: 0 } }, objectFn)).toBe(-1);
    expect(isSorted({ a: { value: 1 }, b: { value: 1 }, c: { value: 1 } }, objectFn)).toBe(0);
  });
});