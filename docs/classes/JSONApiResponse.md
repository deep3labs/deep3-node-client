[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / JSONApiResponse

# Class: JSONApiResponse<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](JSONApiResponse.md#constructor)

### Properties

- [raw](JSONApiResponse.md#raw)
- [transformer](JSONApiResponse.md#transformer)

### Methods

- [value](JSONApiResponse.md#value)

## Constructors

### constructor

• **new JSONApiResponse**<`T`\>(`raw`, `transformer?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `Response` |
| `transformer` | [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\> |

#### Defined in

src/runtime.ts:377

## Properties

### raw

• **raw**: `Response`

#### Defined in

src/runtime.ts:377

___

### transformer

• `Private` **transformer**: [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\>

#### Defined in

src/runtime.ts:377

## Methods

### value

▸ **value**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

src/runtime.ts:379
