[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / Middleware

# Interface: Middleware

## Table of contents

### Methods

- [onError](Middleware.md#onerror)
- [post](Middleware.md#post)
- [pre](Middleware.md#pre)

## Methods

### onError

▸ `Optional` **onError**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ErrorContext`](ErrorContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

#### Defined in

src/runtime.ts:364

___

### post

▸ `Optional` **post**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ResponseContext`](ResponseContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

#### Defined in

src/runtime.ts:363

___

### pre

▸ `Optional` **pre**(`context`): `Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](RequestContext.md) |

#### Returns

`Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Defined in

src/runtime.ts:362
