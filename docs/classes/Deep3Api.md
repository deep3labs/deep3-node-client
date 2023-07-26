[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / Deep3Api

# Class: Deep3Api

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`Deep3Api`**

## Table of contents

### Constructors

- [constructor](Deep3Api.md#constructor)

### Properties

- [configuration](Deep3Api.md#configuration)

### Methods

- [getChains](Deep3Api.md#getchains)
- [getChainsRaw](Deep3Api.md#getchainsraw)
- [getHodlerPrediction](Deep3Api.md#gethodlerprediction)
- [getHodlerPredictionRaw](Deep3Api.md#gethodlerpredictionraw)
- [getModels](Deep3Api.md#getmodels)
- [getModelsRaw](Deep3Api.md#getmodelsraw)
- [getPrediction](Deep3Api.md#getprediction)
- [getPredictionRaw](Deep3Api.md#getpredictionraw)
- [isJsonMime](Deep3Api.md#isjsonmime)
- [request](Deep3Api.md#request)
- [withMiddleware](Deep3Api.md#withmiddleware)
- [withPostMiddleware](Deep3Api.md#withpostmiddleware)
- [withPreMiddleware](Deep3Api.md#withpremiddleware)

## Constructors

### constructor

• **new Deep3Api**(`configuration?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

src/runtime.ts:73

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

src/runtime.ts:73

## Methods

### getChains

▸ **getChains**(`initOverrides?`): `Promise`<[`GetChainsResult`](../interfaces/GetChainsResult.md)\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`GetChainsResult`](../interfaces/GetChainsResult.md)\>

#### Defined in

src/apis/Deep3Api.ts:77

___

### getChainsRaw

▸ **getChainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetChainsResult`](../interfaces/GetChainsResult.md)\>\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetChainsResult`](../interfaces/GetChainsResult.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:54

___

### getHodlerPrediction

▸ **getHodlerPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`GetHodlerResult`](../interfaces/GetHodlerResult.md)\>

Will return the prediction
Get a Hodler prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlerPredictionRequest`](../interfaces/GetHodlerPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`GetHodlerResult`](../interfaces/GetHodlerResult.md)\>

#### Defined in

src/apis/Deep3Api.ts:117

___

### getHodlerPredictionRaw

▸ **getHodlerPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetHodlerResult`](../interfaces/GetHodlerResult.md)\>\>

Will return the prediction
Get a Hodler prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlerPredictionRequest`](../interfaces/GetHodlerPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetHodlerResult`](../interfaces/GetHodlerResult.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:86

___

### getModels

▸ **getModels**(`initOverrides?`): `Promise`<[`GetModelsResult`](../interfaces/GetModelsResult.md)\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`GetModelsResult`](../interfaces/GetModelsResult.md)\>

#### Defined in

src/apis/Deep3Api.ts:149

___

### getModelsRaw

▸ **getModelsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetModelsResult`](../interfaces/GetModelsResult.md)\>\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetModelsResult`](../interfaces/GetModelsResult.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:126

___

### getPrediction

▸ **getPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`GetPredictionResult`](../interfaces/GetPredictionResult.md)\>

Will return the prediction
Get a prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPredictionRequest`](../interfaces/GetPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`GetPredictionResult`](../interfaces/GetPredictionResult.md)\>

#### Defined in

src/apis/Deep3Api.ts:193

___

### getPredictionRaw

▸ **getPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetPredictionResult`](../interfaces/GetPredictionResult.md)\>\>

Will return the prediction
Get a prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPredictionRequest`](../interfaces/GetPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GetPredictionResult`](../interfaces/GetPredictionResult.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:158

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

#### Inherited from

[BaseAPI](BaseAPI.md).[isJsonMime](BaseAPI.md#isjsonmime)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

#### Defined in

src/runtime.ts:83
