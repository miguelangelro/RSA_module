# Class: RsaPublicKey

## Table of contents

### Constructors

- [constructor](RsaPublicKey.md#constructor)

### Properties

- [e](RsaPublicKey.md#e)
- [n](RsaPublicKey.md#n)

### Methods

- [encrypt](RsaPublicKey.md#encrypt)
- [verify](RsaPublicKey.md#verify)

## Constructors

### constructor

• **new RsaPublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

[rsa.ts:7](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L7)

## Properties

### e

• **e**: `bigint`

#### Defined in

[rsa.ts:4](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L4)

___

### n

• **n**: `bigint`

#### Defined in

[rsa.ts:5](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L5)

## Methods

### encrypt

▸ **encrypt**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:12](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L12)

___

### verify

▸ **verify**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:16](https://github.com/miguelangelro/RSA_module/blob/e6ccd76/src/ts/rsa.ts#L16)
