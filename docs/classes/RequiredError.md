[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / RequiredError

# Class: RequiredError

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](RequiredError.md#constructor)

### Properties

- [field](RequiredError.md#field)
- [message](RequiredError.md#message)
- [name](RequiredError.md#name)
- [stack](RequiredError.md#stack)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

src/runtime.ts:251

## Properties

### field

• **field**: `string`

#### Defined in

src/runtime.ts:251

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

src/runtime.ts:250

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055
