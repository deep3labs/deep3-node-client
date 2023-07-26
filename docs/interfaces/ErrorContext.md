[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / ErrorContext

# Interface: ErrorContext

## Table of contents

### Properties

- [error](ErrorContext.md#error)
- [fetch](ErrorContext.md#fetch)
- [init](ErrorContext.md#init)
- [response](ErrorContext.md#response)
- [url](ErrorContext.md#url)

## Properties

### error

• **error**: `unknown`

#### Defined in

src/runtime.ts:357

___

### fetch

• **fetch**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

#### Defined in

src/runtime.ts:354

___

### init

• **init**: `RequestInit`

#### Defined in

src/runtime.ts:356

___

### response

• `Optional` **response**: `Response`

#### Defined in

src/runtime.ts:358

___

### url

• **url**: `string`

#### Defined in

src/runtime.ts:355
