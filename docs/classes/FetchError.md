[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](FetchError.md#constructor)

### Properties

- [cause](FetchError.md#cause)
- [message](FetchError.md#message)
- [name](FetchError.md#name)
- [stack](FetchError.md#stack)

## Constructors

### constructor

• **new FetchError**(`cause`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `Error` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

src/runtime.ts:244

## Properties

### cause

• **cause**: `Error`

#### Defined in

src/runtime.ts:244

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"FetchError"``

#### Overrides

Error.name

#### Defined in

src/runtime.ts:243

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055
