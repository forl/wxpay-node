/*
 * @Author: forl 
 * @Date: 2017-01-12 22:43:30 
 * @Last Modified by: forl
 * @Last Modified time: 2017-01-12 22:50:56
 */

'use strict';

const WXPay = function () {
  if (!(this instanceof WXPay)) {
    throw new TypeError('Please use \'new WXPay\'');
  }
};

module.exports = WXPay;