var _0x3c98 = ['23043XPHezp', '944315eevWpa', '13MUGPla', '416190RLgUVf', '25498MXdvns', '6PwsVKW', 'min', '_0x242da0', '24692SBzJYR', '325274dAozFC', '_0x12ff00', '4|3|0|1|2', 'join', 'split', '_0x2e4f00', '15084YBfZLH', '_0x19bc30', '15FnEhtA', 'charCodeAt'];
(function (_0x393bff, _0x65c4f8) {
  var _0x577ca6 = _0x1fa8,
    _0x347221 = _0x1fa8,
    _0x3fe9c4 = _0x1fa8;
  while (!![]) {
    try {
      var _0x3a573a = parseInt("24692SBzJYR") * -parseInt("13MUGPla") + -parseInt("15084YBfZLH") * -parseInt("15FnEhtA") + -parseInt("6PwsVKW") * -parseInt("23043XPHezp") + -parseInt("325274dAozFC") + parseInt("25498MXdvns") + -parseInt("416190RLgUVf") + parseInt("944315eevWpa");
      if (_0x3a573a === _0x65c4f8) break;else _0x393bff['push'](_0x393bff['shift']());
    } catch (_0x5d1340) {
      _0x393bff['push'](_0x393bff['shift']());
    }
  }
})(_0x3c98, 271871);

function _0x1fa8(_0x1c623a, _0x8af4ee) {
  _0x1c623a = _0x1c623a - 0;
  var _0x27c7b0 = _0x3c98[_0x1c623a];
  return _0x27c7b0;
}
var mysteryFn = function (_0x4fe2c5) {
    var _0x239599 = _0x1fa8,
    _0x5e0f33 = _0x1fa8,
    _0x3ee92e = _0x1fa8,
    _0x3c6452 = {
      '_0x242da0': function (_0x12921b, _0x2cb99f) {
        return _0x12921b < _0x2cb99f;
      },
      '_0x12ff00': function (_0x325dcd, _0x577c6e) {
        return _0x325dcd + _0x577c6e;
      },
      '_0x2e4f00': function (_0x170e8d, _0x5ceea4, _0x547add) {
        return _0x170e8d(_0x5ceea4, _0x547add);
      },
      '_0x318012': function (_0x375ae9, _0x30011c) {
        return _0x375ae9 % _0x30011c;
      }
    },

    // after AST transformation we can the main logic is executed as branches of cases in switch statement
    // the order of branches is determined by the numbers in string below
    _0x4d17b9 = "4|3|0|1|2"["split"]('|'),
    _0x2c18aa = 0;
    while (!![]) {
    switch (_0x4d17b9[_0x2c18aa++]) {
      case '0':
        // ((first param % second param) + second param ) % second param
        // obviously the addition with same number after modulo is useless as well as the another round of module with same number
        var _0x3c3677 = function (_0x16dd63, _0x1562b9) {
          var _0x46398a = _0x239599;
          return _0x387056["_0x19bc30"](_0x387056['_0x1af0be'](_0x16dd63, _0x1562b9), _0x1562b9) % _0x1562b9;
        };
        continue;
        // main logic
        // number of iteration is lenght of string if its smaller than 10 otherwise its 10
        // each iteration take the ordinal value of character at the position given the loop count
        // do modulo with 5 and append it to final string
      case '1':
        for (var _0x4f968e = 0; _0x4f968e < Math["min"](10, _0x4fe2c5['length']); _0x4f968e++) {
          var _0x182a58 = _0x4fe2c5["charCodeAt"](_0x4f968e);
          _0x45ca1e = _0x45ca1e + _0x3c3677(_0x182a58, 5);
        }
        continue;
      case '2':
        // reverse the final string
        return _0x45ca1e["split"]('')['reverse']()["join"]('');
      case '3':
        var _0x45ca1e = '';
        continue;
      case '4':
        // just another proxy functions
        var _0x387056 = {
          '_0x19bc30': function (_0x15d1da, _0x48aa9d) {
            var _0x2c7b85 = _0x5e0f33;
            return _0x15d1da + _0x48aa9d;
          },
          '_0x1af0be': function (_0x451966, _0x396370) {
            return _0x451966 % _0x396370;
          }
        };
        continue;
    }
    break;
  }
};

//console.log(mysteryFn("Hello World!!!")); // returns "3412213312"
console.log(mysteryFn(process.argv[2])); // returns "3412213312"
