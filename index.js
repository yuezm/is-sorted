'use strict';
const { checkMatchType, compare } = require('./utils/util');

module.exports = (data, rule) => {
  const checkData = checkMatchType(data);
  const compared = rule || compare;
  let sortType = null;

  if (checkData.length <= 1) {
    return 0;
  }

  for (let i = 0; i <= checkData.length - 2; i++) {
    const type = compared(checkData[ i ], checkData[ i + 1 ], data);
    if (!sortType && type) {
      sortType = type;
    }
    if (type && type !== sortType) {
      return false;
    }
  }
  return sortType || 0;
};
