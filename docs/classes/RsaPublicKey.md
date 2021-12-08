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

rsa.ts:7

## Properties

### e

• **e**: `bigint`

#### Defined in

rsa.ts:4

___

### n

• **n**: `bigint`

#### Defined in

rsa.ts:5

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

rsa.ts:12

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

rsa.ts:16
