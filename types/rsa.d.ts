export declare class RsaPublicKey {
    e: bigint;
    n: bigint;
    constructor(e: bigint, n: bigint);
    encrypt(m: bigint): bigint;
    verify(s: bigint): bigint;
}
export declare class RsaPrivateKey {
    d: bigint;
    n: bigint;
    constructor(d: bigint, n: bigint);
    decrypt(c: bigint): bigint;
    sign(m: bigint): bigint;
}
export interface rsaKeyPair {
    publicKey: RsaPublicKey;
    privateKey: RsaPrivateKey;
}
export declare const generateKeys: (bitLength: number) => Promise<rsaKeyPair>;
//# sourceMappingURL=rsa.d.ts.map