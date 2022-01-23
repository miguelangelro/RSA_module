'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

class RsaPublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(m) {
        return bcu__namespace.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.e, this.n);
    }
}
class RsaPrivateKey {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }
    decrypt(c) {
        return bcu__namespace.modPow(c, this.d, this.n);
    }
    sign(m) {
        return bcu__namespace.modPow(m, this.d, this.n);
    }
}
const generateKeys = async function (bitLength) {
    const e = 65537n;
    let p, q, n, phi;
    do {
        p = await bcu__namespace.prime(bitLength / 2 + 1);
        q = await bcu__namespace.prime(bitLength / 2);
        n = p * q;
        phi = (p - 1n) * (q - 1n);
    } while (bcu__namespace.bitLength(n) !== bitLength || (phi % e === 0n));
    const publicKey = new RsaPublicKey(e, n);
    const d = bcu__namespace.modInv(e, phi);
    const privateKey = new RsaPrivateKey(d, n);
    return {
        publicKey,
        privateKey
    };
};
class Cegar {
    constructor(pubKey) {
        this.pubKey = pubKey;
        this.r = bcu__namespace.randBetween(this.pubKey.n);
    }
    cegarMensaje(msg) {
        const bm = (msg * (this.pubKey.encrypt(this.r))) % this.pubKey.n;
        return bm;
    }
    descegarMensaje(blindedSignature) {
        return (blindedSignature * bcu__namespace.modInv(this.r, this.pubKey.n) % this.pubKey.n);
    }
}

exports.Cegar = Cegar;
exports.RsaPrivateKey = RsaPrivateKey;
exports.RsaPublicKey = RsaPublicKey;
exports.generateKeys = generateKeys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9yc2EudHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbImJjdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFYSxZQUFZO0lBSXZCLFlBQWEsQ0FBUyxFQUFFLENBQVM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNYO0lBRUQsT0FBTyxDQUFFLENBQVM7UUFDaEIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7SUFFRCxNQUFNLENBQUUsQ0FBUztRQUNmLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0NBQ0Y7TUFFWSxhQUFhO0lBSXhCLFlBQWEsQ0FBUyxFQUFFLENBQVM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNYO0lBRUQsT0FBTyxDQUFFLENBQVM7UUFDaEIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7SUFFRCxJQUFJLENBQUUsQ0FBUztRQUNiLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0NBQ0Y7TUFPWSxZQUFZLEdBQUcsZ0JBQWdCLFNBQWlCO0lBQzNELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtJQUNoQixJQUFJLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEdBQVcsQ0FBQTtJQUNoRCxHQUFHO1FBQ0QsQ0FBQyxHQUFHLE1BQU1BLGNBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxDQUFDLEdBQUcsTUFBTUEsY0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtLQUMxQixRQUFRQSxjQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO0lBRTVELE1BQU0sU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV4QyxNQUFNLENBQUMsR0FBR0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRTFDLE9BQU87UUFDTCxTQUFTO1FBQ1QsVUFBVTtLQUNYLENBQUE7QUFDSCxFQUFDO01BRVksS0FBSztJQUloQixZQUFhLE1BQW9CO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUdBLGNBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUN4QztJQUVELFlBQVksQ0FBRSxHQUFXO1FBQ3ZCLE1BQU0sRUFBRSxHQUFXLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLE9BQU8sRUFBRSxDQUFBO0tBQ1Y7SUFFRCxlQUFlLENBQUUsZ0JBQXdCO1FBQ3ZDLFFBQVEsZ0JBQWdCLEdBQUdBLGNBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDO0tBQzlFOzs7Ozs7OzsifQ==
