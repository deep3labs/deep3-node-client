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
- [getHodlC1Prediction](Deep3Api.md#gethodlc1prediction)
- [getHodlC1PredictionRaw](Deep3Api.md#gethodlc1predictionraw)
- [getHodlC1XTokenPrediction](Deep3Api.md#gethodlc1xtokenprediction)
- [getHodlC1XTokenPredictionRaw](Deep3Api.md#gethodlc1xtokenpredictionraw)
- [getHodlC1XTokenPredictions](Deep3Api.md#gethodlc1xtokenpredictions)
- [getHodlC1XTokenPredictionsRaw](Deep3Api.md#gethodlc1xtokenpredictionsraw)
- [getHodlerPrediction](Deep3Api.md#gethodlerprediction)
- [getHodlerPredictionRaw](Deep3Api.md#gethodlerpredictionraw)
- [getModels](Deep3Api.md#getmodels)
- [getModelsRaw](Deep3Api.md#getmodelsraw)
- [getPrediction](Deep3Api.md#getprediction)
- [getPredictionRaw](Deep3Api.md#getpredictionraw)
- [getStakeSageHPrediction](Deep3Api.md#getstakesagehprediction)
- [getStakeSageHPredictionRaw](Deep3Api.md#getstakesagehpredictionraw)
- [getStakeSageLPrediction](Deep3Api.md#getstakesagelprediction)
- [getStakeSageLPredictionRaw](Deep3Api.md#getstakesagelpredictionraw)
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

▸ **getChains**(`initOverrides?`): `Promise`<[`ChainsResponse`](../interfaces/ChainsResponse.md)\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ChainsResponse`](../interfaces/ChainsResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:121

___

### getChainsRaw

▸ **getChainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ChainsResponse`](../interfaces/ChainsResponse.md)\>\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ChainsResponse`](../interfaces/ChainsResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:98

___

### getHodlC1Prediction

▸ **getHodlC1Prediction**(`requestParameters`, `initOverrides?`): `Promise`<[`HodlC1Response`](../interfaces/HodlC1Response.md)\>

Will return the prediction
Get a HODL-C1 prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1PredictionRequest`](../interfaces/GetHodlC1PredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`HodlC1Response`](../interfaces/HodlC1Response.md)\>

#### Defined in

src/apis/Deep3Api.ts:161

___

### getHodlC1PredictionRaw

▸ **getHodlC1PredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1Response`](../interfaces/HodlC1Response.md)\>\>

Will return the prediction
Get a HODL-C1 prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1PredictionRequest`](../interfaces/GetHodlC1PredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1Response`](../interfaces/HodlC1Response.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:130

___

### getHodlC1XTokenPrediction

▸ **getHodlC1XTokenPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`HodlC1XTokenResponse`](../interfaces/HodlC1XTokenResponse.md)\>

Will return the prediction
Get a HODL-C1 cross-chain token prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1XTokenPredictionRequest`](../interfaces/GetHodlC1XTokenPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`HodlC1XTokenResponse`](../interfaces/HodlC1XTokenResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:200

___

### getHodlC1XTokenPredictionRaw

▸ **getHodlC1XTokenPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1XTokenResponse`](../interfaces/HodlC1XTokenResponse.md)\>\>

Will return the prediction
Get a HODL-C1 cross-chain token prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1XTokenPredictionRequest`](../interfaces/GetHodlC1XTokenPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1XTokenResponse`](../interfaces/HodlC1XTokenResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:170

___

### getHodlC1XTokenPredictions

▸ **getHodlC1XTokenPredictions**(`requestParameters`, `initOverrides?`): `Promise`<[`HodlC1XTokensResponseInner`](../interfaces/HodlC1XTokensResponseInner.md)[]\>

Will return the predictions
Get HODL-C1 cross-chain token predictions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1XTokenPredictionsRequest`](../interfaces/GetHodlC1XTokenPredictionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`HodlC1XTokensResponseInner`](../interfaces/HodlC1XTokensResponseInner.md)[]\>

#### Defined in

src/apis/Deep3Api.ts:239

___

### getHodlC1XTokenPredictionsRaw

▸ **getHodlC1XTokenPredictionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1XTokensResponseInner`](../interfaces/HodlC1XTokensResponseInner.md)[]\>\>

Will return the predictions
Get HODL-C1 cross-chain token predictions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlC1XTokenPredictionsRequest`](../interfaces/GetHodlC1XTokenPredictionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlC1XTokensResponseInner`](../interfaces/HodlC1XTokensResponseInner.md)[]\>\>

#### Defined in

src/apis/Deep3Api.ts:209

___

### getHodlerPrediction

▸ **getHodlerPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`HodlerResponse`](../interfaces/HodlerResponse.md)\>

Will return the prediction
Get a Hodler prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlerPredictionRequest`](../interfaces/GetHodlerPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`HodlerResponse`](../interfaces/HodlerResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:279

___

### getHodlerPredictionRaw

▸ **getHodlerPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlerResponse`](../interfaces/HodlerResponse.md)\>\>

Will return the prediction
Get a Hodler prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetHodlerPredictionRequest`](../interfaces/GetHodlerPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`HodlerResponse`](../interfaces/HodlerResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:248

___

### getModels

▸ **getModels**(`initOverrides?`): `Promise`<[`ModelsResponse`](../interfaces/ModelsResponse.md)\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ModelsResponse`](../interfaces/ModelsResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:311

___

### getModelsRaw

▸ **getModelsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ModelsResponse`](../interfaces/ModelsResponse.md)\>\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ModelsResponse`](../interfaces/ModelsResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:288

___

### getPrediction

▸ **getPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`PredictionResponse`](../interfaces/PredictionResponse.md)\>

Will return the prediction
Get a prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPredictionRequest`](../interfaces/GetPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`PredictionResponse`](../interfaces/PredictionResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:355

___

### getPredictionRaw

▸ **getPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PredictionResponse`](../interfaces/PredictionResponse.md)\>\>

Will return the prediction
Get a prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPredictionRequest`](../interfaces/GetPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PredictionResponse`](../interfaces/PredictionResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:320

___

### getStakeSageHPrediction

▸ **getStakeSageHPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`StakeSageHResponse`](../interfaces/StakeSageHResponse.md)\>

Will return the prediction
Get a StakeSage-H prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageHPredictionRequest`](../interfaces/GetStakeSageHPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`StakeSageHResponse`](../interfaces/StakeSageHResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:395

___

### getStakeSageHPredictionRaw

▸ **getStakeSageHPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageHResponse`](../interfaces/StakeSageHResponse.md)\>\>

Will return the prediction
Get a StakeSage-H prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageHPredictionRequest`](../interfaces/GetStakeSageHPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageHResponse`](../interfaces/StakeSageHResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:364

___

### getStakeSageLPrediction

▸ **getStakeSageLPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`StakeSageLResponse`](../interfaces/StakeSageLResponse.md)\>

Will return the prediction
Get a StakeSage-L prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageLPredictionRequest`](../interfaces/GetStakeSageLPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`StakeSageLResponse`](../interfaces/StakeSageLResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:435

___

### getStakeSageLPredictionRaw

▸ **getStakeSageLPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageLResponse`](../interfaces/StakeSageLResponse.md)\>\>

Will return the prediction
Get a StakeSage-L prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageLPredictionRequest`](../interfaces/GetStakeSageLPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageLResponse`](../interfaces/StakeSageLResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:404

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
