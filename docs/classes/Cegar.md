# Class: Cegar

## Table of contents

### Constructors

- [constructor](Cegar.md#constructor)

### Properties

- [pubKey](Cegar.md#pubkey)
- [r](Cegar.md#r)

### Methods

- [cegarMensaje](Cegar.md#cegarmensaje)
- [descegarMensaje](Cegar.md#descegarmensaje)

## Constructors

### constructor

• **new Cegar**(`pubKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | [`RsaPublicKey`](RsaPublicKey.md) |

#### Defined in

[rsa.ts:70](https://github.com/miguelangelro/RSA_module/blob/d296724/src/ts/rsa.ts#L70)

## Properties

### pubKey

• **pubKey**: [`RsaPublicKey`](RsaPublicKey.md)

#### Defined in

[rsa.ts:68](https://github.com/miguelangelro/RSA_module/blob/d296724/src/ts/rsa.ts#L68)

___

### r

• **r**: `bigint`

#### Defined in

[rsa.ts:67](https://github.com/miguelangelro/RSA_module/blob/d296724/src/ts/rsa.ts#L67)

## Methods

### cegarMensaje

▸ **cegarMensaje**(`msg`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:75](https://github.com/miguelangelro/RSA_module/blob/d296724/src/ts/rsa.ts#L75)

___

### descegarMensaje

▸ **descegarMensaje**(`blindedSignature`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blindedSignature` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:80](https://github.com/miguelangelro/RSA_module/blob/d296724/src/ts/rsa.ts#L80)
