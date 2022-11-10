// typical deobfuscation step to hardcode the constants
// into array and then shift the array to correct order at some point in runtime to prevent static debug
var _0x3c98 = [
    '23043XPHezp',
    '944315eevWpa',
    '13MUGPla',
    '416190RLgUVf',
    '25498MXdvns',
    '6PwsVKW',
    'min',
    '_0x242da0',
    '24692SBzJYR',
    '325274dAozFC',
    '_0x12ff00',
    '4|3|0|1|2',
    'join',
    'split',
    '_0x2e4f00',
    '15084YBfZLH',
    '_0x19bc30',
    '15FnEhtA',
    'charCodeAt'
];
// the anonymous function call to correct the order of constants array
(function (_0x393bff, _0x65c4f8) {
    var _0x577ca6 = _0x1fa8, _0x347221 = _0x1fa8, _0x3fe9c4 = _0x1fa8;
    while (!![]) {
        try {
            var _0x3a573a = parseInt(_0x577ca6(0x11)) * -parseInt(_0x577ca6(0xb)) + -parseInt(_0x3fe9c4(0x5)) * -parseInt(_0x577ca6(0x7)) + -parseInt(_0x347221(0xe)) * -parseInt(_0x347221(0x9)) + -parseInt(_0x577ca6(0x12)) + parseInt(_0x577ca6(0xd)) + -parseInt(_0x577ca6(0xc)) + parseInt(_0x577ca6(0xa));
            if (_0x3a573a === _0x65c4f8)
                break;
            else
                _0x393bff['push'](_0x393bff['shift']());
        } catch (_0x5d1340) {
            _0x393bff['push'](_0x393bff['shift']());
        }
    }
}(_0x3c98, 0x2 * 0x19310 + 0x3b7df * -0x1 + -0x4b7be * -0x1));

// this function serves as getter to the array
// the second parameter is useless and math expression is just deduction with zero so useless as well but it creates somewhat a fog arroung code :D
function _0x1fa8(_0x1c623a, _0x8af4ee) {
    _0x1c623a = _0x1c623a - (0x4fb + 0xa93 + -0xf8e);
    var _0x27c7b0 = _0x3c98[_0x1c623a];
    return _0x27c7b0;
}

var mysteryFn = function (_0x4fe2c5) {
    // a lot of variable declaration but only few real values are assigned
    // other vars serves as proxy to _0x1fa8 function and _0x3c6452 object is proxy for some binary function and function call
    var _0x239599 = _0x1fa8, _0x5e0f33 = _0x1fa8, _0x3ee92e = _0x1fa8, _0x3c6452 = {
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
        }, _0x4d17b9 = _0x239599(0x1)[_0x5e0f33(0x3)]('|'), _0x2c18aa = -0x1b0d + -0xabb + 0x4b9 * 0x8;
    // this seems like main logic of mysteryFn where somethings finaly happens
    // more described in mysteryFn.js as this version is slightly obfuscated
    while (!![]) {
        switch (_0x4d17b9[_0x2c18aa++]) {
        case '0':
            var _0x3c3677 = function (_0x16dd63, _0x1562b9) {
                var _0x46398a = _0x239599;
                return _0x387056[_0x46398a(0x6)](_0x387056['_0x1af0be'](_0x16dd63, _0x1562b9), _0x1562b9) % _0x1562b9;
            };
            continue;
        case '1':
            for (var _0x4f968e = 0x1bc7 + 0x22 * 0x1e + -0x1fc3; _0x3c6452[_0x5e0f33(0x10)](_0x4f968e, Math[_0x3ee92e(0xf)](0x21 * -0x31 + -0xa4d + 0x10a8 * 0x1, _0x4fe2c5['length'])); _0x4f968e++) {
                var _0x182a58 = _0x4fe2c5[_0x3ee92e(0x8)](_0x4f968e);
                _0x45ca1e = _0x3c6452['_0x12ff00'](_0x45ca1e, _0x3c6452[_0x5e0f33(0x4)](_0x3c3677, _0x182a58, 0x6b * -0x6 + 0x8d9 + -0x652));
            }
            continue;
        case '2':
            return _0x45ca1e[_0x239599(0x3)]('')['reverse']()[_0x5e0f33(0x2)]('');
        case '3':
            var _0x45ca1e = '';
            continue;
        case '4':
            var _0x387056 = {
                '_0x19bc30': function (_0x15d1da, _0x48aa9d) {
                    var _0x2c7b85 = _0x5e0f33;
                    return _0x3c6452[_0x2c7b85(0x0)](_0x15d1da, _0x48aa9d);
                },
                '_0x1af0be': function (_0x451966, _0x396370) {
                    return _0x3c6452['_0x318012'](_0x451966, _0x396370);
                }
            };
            continue;
        }
        break;
    }
};

//console.log(mysteryFn("Hello World!!!")); // returns "3412213312"
console.log(mysteryFn(process.argv[2])); // returns "3412213312"
