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

rsa.ts:25

## Properties

### d

• **d**: `bigint`

#### Defined in

rsa.ts:22

___

### n

• **n**: `bigint`

#### Defined in

rsa.ts:23

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

rsa.ts:30

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

rsa.ts:34
