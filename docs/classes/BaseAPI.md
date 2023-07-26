[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`Deep3Api`](Deep3Api.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [configuration](BaseAPI.md#configuration)
- [middleware](BaseAPI.md#middleware)
- [jsonRegex](BaseAPI.md#jsonregex)

### Methods

- [clone](BaseAPI.md#clone)
- [createFetchParams](BaseAPI.md#createfetchparams)
- [fetchApi](BaseAPI.md#fetchapi)
- [isJsonMime](BaseAPI.md#isjsonmime)
- [request](BaseAPI.md#request)
- [withMiddleware](BaseAPI.md#withmiddleware)
- [withPostMiddleware](BaseAPI.md#withpostmiddleware)
- [withPreMiddleware](BaseAPI.md#withpremiddleware)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Defined in

src/runtime.ts:73

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Defined in

src/runtime.ts:73

___

### middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

src/runtime.ts:71

___

### jsonRegex

▪ `Static` `Private` `Readonly` **jsonRegex**: `RegExp`

#### Defined in

src/runtime.ts:70

## Methods

### clone

▸ `Private` **clone**<`T`\>(`this`): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`T`

#### Defined in

src/runtime.ts:219

___

### createFetchParams

▸ `Private` **createFetchParams**(`context`, `initOverrides?`): `Promise`<{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Defined in

src/runtime.ts:119

___

### fetchApi

▸ `Private` **fetchApi**(`url`, `init`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Defined in

src/runtime.ts:169

___

### isJsonMime

▸ `Protected` **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

src/runtime.ts:103

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Response`\>

#### Defined in

src/runtime.ts:110

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Defined in

src/runtime.ts:77

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Defined in

src/runtime.ts:88

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Defined in

src/runtime.ts:83
