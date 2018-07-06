'use strict';

/*
**Author yzm
**Date   2018-07-06
**Description 
*/

exports.checkMatchType = data => {
  const typeStr = Object.prototype.toString.call(data); // 这返回的是[Object Array]的类型
  const type = typeStr.split(' ')[ 1 ].slice(0, -1);
  let checkData = null;
  if (type === 'Array') {
    checkData = data;
  } else if (type === 'Object') {
    checkData = Object.keys(data);
  } else {
    throw new TypeError(`want get a Array or JSON,but get ${type}`);
  }
  return checkData;
};

exports.compare = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};
