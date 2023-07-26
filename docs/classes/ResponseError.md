[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / ResponseError

# Class: ResponseError

## Hierarchy

- `Error`

  ↳ **`ResponseError`**

## Table of contents

### Constructors

- [constructor](ResponseError.md#constructor)

### Properties

- [message](ResponseError.md#message)
- [name](ResponseError.md#name)
- [response](ResponseError.md#response)
- [stack](ResponseError.md#stack)

## Constructors

### constructor

• **new ResponseError**(`response`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

src/runtime.ts:237

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"ResponseError"``

#### Overrides

Error.name

#### Defined in

src/runtime.ts:236

___

### response

• **response**: `Response`

#### Defined in

src/runtime.ts:237

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055
