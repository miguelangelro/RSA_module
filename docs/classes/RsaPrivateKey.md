# Class: RsaPrivateKey

## Table of contents

### Constructors

- [constructor](RsaPrivateKey.md#constructor)

### Properties

- [d](RsaPrivateKey.md#d)
- [n](RsaPrivateKey.md#n)

### Methods

- [decrypt](RsaPrivateKey.md#decrypt)
- [sign](RsaPrivateKey.md#sign)

## Constructors

### constructor

• **new RsaPrivateKey**(`d`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `n` | `bigint` |

#### Defined in

[rsa.ts:25](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L25)

## Properties

### d

• **d**: `bigint`

#### Defined in

[rsa.ts:22](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L22)

___

### n

• **n**: `bigint`

#### Defined in

[rsa.ts:23](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L23)

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:30](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L30)

___

### sign

▸ **sign**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:34](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L34)
