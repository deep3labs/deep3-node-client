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
- [getDeepShieldFrPrediction](Deep3Api.md#getdeepshieldfrprediction)
- [getDeepShieldFrPredictionRaw](Deep3Api.md#getdeepshieldfrpredictionraw)
- [getDeepShieldHftPrediction](Deep3Api.md#getdeepshieldhftprediction)
- [getDeepShieldHftPredictionRaw](Deep3Api.md#getdeepshieldhftpredictionraw)
- [getHodlC1Prediction](Deep3Api.md#gethodlc1prediction)
- [getHodlC1PredictionRaw](Deep3Api.md#gethodlc1predictionraw)
- [getHodlC1XTokenPrediction](Deep3Api.md#gethodlc1xtokenprediction)
- [getHodlC1XTokenPredictionRaw](Deep3Api.md#gethodlc1xtokenpredictionraw)
- [getHodlC1XTokenPredictions](Deep3Api.md#gethodlc1xtokenpredictions)
- [getHodlC1XTokenPredictionsRaw](Deep3Api.md#gethodlc1xtokenpredictionsraw)
- [getModels](Deep3Api.md#getmodels)
- [getModelsRaw](Deep3Api.md#getmodelsraw)
- [getPrediction](Deep3Api.md#getprediction)
- [getPredictionRaw](Deep3Api.md#getpredictionraw)
- [getStakeSageCPrediction](Deep3Api.md#getstakesagecprediction)
- [getStakeSageCPredictionRaw](Deep3Api.md#getstakesagecpredictionraw)
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

▸ **getChains**(`initOverrides?`): `Promise`<[`ChainsResponseInner`](../interfaces/ChainsResponseInner.md)[]\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ChainsResponseInner`](../interfaces/ChainsResponseInner.md)[]\>

#### Defined in

src/apis/Deep3Api.ts:137

___

### getChainsRaw

▸ **getChainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ChainsResponseInner`](../interfaces/ChainsResponseInner.md)[]\>\>

Will return currently supported chains
Get currently supported chains and the active machine learning models

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ChainsResponseInner`](../interfaces/ChainsResponseInner.md)[]\>\>

#### Defined in

src/apis/Deep3Api.ts:114

___

### getDeepShieldFrPrediction

▸ **getDeepShieldFrPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`DeepShieldFrResponse`](../interfaces/DeepShieldFrResponse.md)\>

Will return the prediction
Get a DeepShield-FR prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeepShieldFrPredictionRequest`](../interfaces/GetDeepShieldFrPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`DeepShieldFrResponse`](../interfaces/DeepShieldFrResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:177

___

### getDeepShieldFrPredictionRaw

▸ **getDeepShieldFrPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeepShieldFrResponse`](../interfaces/DeepShieldFrResponse.md)\>\>

Will return the prediction
Get a DeepShield-FR prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeepShieldFrPredictionRequest`](../interfaces/GetDeepShieldFrPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeepShieldFrResponse`](../interfaces/DeepShieldFrResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:146

___

### getDeepShieldHftPrediction

▸ **getDeepShieldHftPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`DeepShieldHftResponse`](../interfaces/DeepShieldHftResponse.md)\>

Will return the prediction
Get a DeepShield-HFT prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeepShieldHftPredictionRequest`](../interfaces/GetDeepShieldHftPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`DeepShieldHftResponse`](../interfaces/DeepShieldHftResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:217

___

### getDeepShieldHftPredictionRaw

▸ **getDeepShieldHftPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeepShieldHftResponse`](../interfaces/DeepShieldHftResponse.md)\>\>

Will return the prediction
Get a DeepShield-HFT prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeepShieldHftPredictionRequest`](../interfaces/GetDeepShieldHftPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeepShieldHftResponse`](../interfaces/DeepShieldHftResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:186

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

src/apis/Deep3Api.ts:257

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

src/apis/Deep3Api.ts:226

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

src/apis/Deep3Api.ts:296

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

src/apis/Deep3Api.ts:266

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

src/apis/Deep3Api.ts:335

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

src/apis/Deep3Api.ts:305

___

### getModels

▸ **getModels**(`initOverrides?`): `Promise`<[`ModelsResponseInner`](../interfaces/ModelsResponseInner.md)[]\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ModelsResponseInner`](../interfaces/ModelsResponseInner.md)[]\>

#### Defined in

src/apis/Deep3Api.ts:367

___

### getModelsRaw

▸ **getModelsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ModelsResponseInner`](../interfaces/ModelsResponseInner.md)[]\>\>

Will return active machine learning models
Get active machine learning models and the chains they support

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ModelsResponseInner`](../interfaces/ModelsResponseInner.md)[]\>\>

#### Defined in

src/apis/Deep3Api.ts:344

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

src/apis/Deep3Api.ts:411

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

src/apis/Deep3Api.ts:376

___

### getStakeSageCPrediction

▸ **getStakeSageCPrediction**(`requestParameters`, `initOverrides?`): `Promise`<[`StakeSageCResponse`](../interfaces/StakeSageCResponse.md)\>

Will return the prediction
Get a StakeSage-C prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageCPredictionRequest`](../interfaces/GetStakeSageCPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`StakeSageCResponse`](../interfaces/StakeSageCResponse.md)\>

#### Defined in

src/apis/Deep3Api.ts:451

___

### getStakeSageCPredictionRaw

▸ **getStakeSageCPredictionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageCResponse`](../interfaces/StakeSageCResponse.md)\>\>

Will return the prediction
Get a StakeSage-C prediction

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetStakeSageCPredictionRequest`](../interfaces/GetStakeSageCPredictionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StakeSageCResponse`](../interfaces/StakeSageCResponse.md)\>\>

#### Defined in

src/apis/Deep3Api.ts:420

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

src/apis/Deep3Api.ts:491

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

src/apis/Deep3Api.ts:460

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

src/apis/Deep3Api.ts:531

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

src/apis/Deep3Api.ts:500

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
