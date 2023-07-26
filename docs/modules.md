[@deep3labs/node-client](../README.md) / Exports

# @deep3labs/node-client

## Table of contents

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [BlobApiResponse](classes/BlobApiResponse.md)
- [Configuration](classes/Configuration.md)
- [Deep3Api](classes/Deep3Api.md)
- [FetchError](classes/FetchError.md)
- [JSONApiResponse](classes/JSONApiResponse.md)
- [RequiredError](classes/RequiredError.md)
- [ResponseError](classes/ResponseError.md)
- [TextApiResponse](classes/TextApiResponse.md)
- [VoidApiResponse](classes/VoidApiResponse.md)

### Interfaces

- [ApiResponse](interfaces/ApiResponse.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Consume](interfaces/Consume.md)
- [ErrorContext](interfaces/ErrorContext.md)
- [FetchParams](interfaces/FetchParams.md)
- [GetChainsResult](interfaces/GetChainsResult.md)
- [GetHodlerPredictionRequest](interfaces/GetHodlerPredictionRequest.md)
- [GetHodlerResult](interfaces/GetHodlerResult.md)
- [GetModelsResult](interfaces/GetModelsResult.md)
- [GetPredictionRequest](interfaces/GetPredictionRequest.md)
- [GetPredictionResult](interfaces/GetPredictionResult.md)
- [Middleware](interfaces/Middleware.md)
- [RequestContext](interfaces/RequestContext.md)
- [RequestOpts](interfaces/RequestOpts.md)
- [ResponseContext](interfaces/ResponseContext.md)
- [ResponseTransformer](interfaces/ResponseTransformer.md)

### Type Aliases

- [FetchAPI](modules.md#fetchapi)
- [HTTPBody](modules.md#httpbody)
- [HTTPHeaders](modules.md#httpheaders)
- [HTTPMethod](modules.md#httpmethod)
- [HTTPQuery](modules.md#httpquery)
- [HTTPRequestInit](modules.md#httprequestinit)
- [InitOverrideFunction](modules.md#initoverridefunction)
- [Json](modules.md#json)
- [ModelPropertyNaming](modules.md#modelpropertynaming)

### Variables

- [BASE\_PATH](modules.md#base_path)
- [COLLECTION\_FORMATS](modules.md#collection_formats)
- [DefaultConfig](modules.md#defaultconfig)

### Functions

- [GetChainsResultFromJSON](modules.md#getchainsresultfromjson)
- [GetChainsResultFromJSONTyped](modules.md#getchainsresultfromjsontyped)
- [GetChainsResultToJSON](modules.md#getchainsresulttojson)
- [GetHodlerResultFromJSON](modules.md#gethodlerresultfromjson)
- [GetHodlerResultFromJSONTyped](modules.md#gethodlerresultfromjsontyped)
- [GetHodlerResultToJSON](modules.md#gethodlerresulttojson)
- [GetModelsResultFromJSON](modules.md#getmodelsresultfromjson)
- [GetModelsResultFromJSONTyped](modules.md#getmodelsresultfromjsontyped)
- [GetModelsResultToJSON](modules.md#getmodelsresulttojson)
- [GetPredictionResultFromJSON](modules.md#getpredictionresultfromjson)
- [GetPredictionResultFromJSONTyped](modules.md#getpredictionresultfromjsontyped)
- [GetPredictionResultToJSON](modules.md#getpredictionresulttojson)
- [canConsumeForm](modules.md#canconsumeform)
- [exists](modules.md#exists)
- [instanceOfGetChainsResult](modules.md#instanceofgetchainsresult)
- [instanceOfGetHodlerResult](modules.md#instanceofgethodlerresult)
- [instanceOfGetModelsResult](modules.md#instanceofgetmodelsresult)
- [instanceOfGetPredictionResult](modules.md#instanceofgetpredictionresult)
- [mapValues](modules.md#mapvalues)
- [querystring](modules.md#querystring)

## Type Aliases

### FetchAPI

Ƭ **FetchAPI**: `WindowOrWorkerGlobalScope`[``"fetch"``]

#### Defined in

src/runtime.ts:263

___

### HTTPBody

Ƭ **HTTPBody**: [`Json`](modules.md#json) \| `FormData` \| `URLSearchParams`

#### Defined in

src/runtime.ts:269

___

### HTTPHeaders

Ƭ **HTTPHeaders**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

src/runtime.ts:267

___

### HTTPMethod

Ƭ **HTTPMethod**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"OPTIONS"`` \| ``"HEAD"``

#### Defined in

src/runtime.ts:266

___

### HTTPQuery

Ƭ **HTTPQuery**: `Object`

#### Index signature

▪ [key: `string`]: `string` \| `number` \| ``null`` \| `boolean` \| (`string` \| `number` \| ``null`` \| `boolean`)[] \| `Set`<`string` \| `number` \| ``null`` \| `boolean`\> \| [`HTTPQuery`](modules.md#httpquery)

#### Defined in

src/runtime.ts:268

___

### HTTPRequestInit

Ƭ **HTTPRequestInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body?` | [`HTTPBody`](modules.md#httpbody) |
| `credentials?` | `RequestCredentials` |
| `headers?` | [`HTTPHeaders`](modules.md#httpheaders) |
| `method` | [`HTTPMethod`](modules.md#httpmethod) |

#### Defined in

src/runtime.ts:270

___

### InitOverrideFunction

Ƭ **InitOverrideFunction**: (`requestContext`: { `context`: [`RequestOpts`](interfaces/RequestOpts.md) ; `init`: [`HTTPRequestInit`](modules.md#httprequestinit)  }) => `Promise`<`RequestInit`\>

#### Type declaration

▸ (`requestContext`): `Promise`<`RequestInit`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `requestContext` | `Object` |
| `requestContext.context` | [`RequestOpts`](interfaces/RequestOpts.md) |
| `requestContext.init` | [`HTTPRequestInit`](modules.md#httprequestinit) |

##### Returns

`Promise`<`RequestInit`\>

#### Defined in

src/runtime.ts:273

___

### Json

Ƭ **Json**: `any`

#### Defined in

src/runtime.ts:265

___

### ModelPropertyNaming

Ƭ **ModelPropertyNaming**: ``"camelCase"`` \| ``"snake_case"`` \| ``"PascalCase"`` \| ``"original"``

#### Defined in

src/runtime.ts:271

## Variables

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

Deep3 Labs API
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: v0.0.2

NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
https://openapi-generator.tech
Do not edit the class manually.

#### Defined in

src/runtime.ts:16

___

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

src/runtime.ts:256

___

### DefaultConfig

• `Const` **DefaultConfig**: [`Configuration`](classes/Configuration.md)

#### Defined in

src/runtime.ts:63

## Functions

### GetChainsResultFromJSON

▸ **GetChainsResultFromJSON**(`json`): [`GetChainsResult`](interfaces/GetChainsResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`GetChainsResult`](interfaces/GetChainsResult.md)

#### Defined in

src/models/GetChainsResult.ts:54

___

### GetChainsResultFromJSONTyped

▸ **GetChainsResultFromJSONTyped**(`json`, `ignoreDiscriminator`): [`GetChainsResult`](interfaces/GetChainsResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`GetChainsResult`](interfaces/GetChainsResult.md)

#### Defined in

src/models/GetChainsResult.ts:58

___

### GetChainsResultToJSON

▸ **GetChainsResultToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`GetChainsResult`](interfaces/GetChainsResult.md) |

#### Returns

`any`

#### Defined in

src/models/GetChainsResult.ts:70

___

### GetHodlerResultFromJSON

▸ **GetHodlerResultFromJSON**(`json`): [`GetHodlerResult`](interfaces/GetHodlerResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`GetHodlerResult`](interfaces/GetHodlerResult.md)

#### Defined in

src/models/GetHodlerResult.ts:46

___

### GetHodlerResultFromJSONTyped

▸ **GetHodlerResultFromJSONTyped**(`json`, `ignoreDiscriminator`): [`GetHodlerResult`](interfaces/GetHodlerResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`GetHodlerResult`](interfaces/GetHodlerResult.md)

#### Defined in

src/models/GetHodlerResult.ts:50

___

### GetHodlerResultToJSON

▸ **GetHodlerResultToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`GetHodlerResult`](interfaces/GetHodlerResult.md) |

#### Returns

`any`

#### Defined in

src/models/GetHodlerResult.ts:61

___

### GetModelsResultFromJSON

▸ **GetModelsResultFromJSON**(`json`): [`GetModelsResult`](interfaces/GetModelsResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`GetModelsResult`](interfaces/GetModelsResult.md)

#### Defined in

src/models/GetModelsResult.ts:47

___

### GetModelsResultFromJSONTyped

▸ **GetModelsResultFromJSONTyped**(`json`, `ignoreDiscriminator`): [`GetModelsResult`](interfaces/GetModelsResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`GetModelsResult`](interfaces/GetModelsResult.md)

#### Defined in

src/models/GetModelsResult.ts:51

___

### GetModelsResultToJSON

▸ **GetModelsResultToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`GetModelsResult`](interfaces/GetModelsResult.md) |

#### Returns

`any`

#### Defined in

src/models/GetModelsResult.ts:62

___

### GetPredictionResultFromJSON

▸ **GetPredictionResultFromJSON**(`json`): [`GetPredictionResult`](interfaces/GetPredictionResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`GetPredictionResult`](interfaces/GetPredictionResult.md)

#### Defined in

src/models/GetPredictionResult.ts:46

___

### GetPredictionResultFromJSONTyped

▸ **GetPredictionResultFromJSONTyped**(`json`, `ignoreDiscriminator`): [`GetPredictionResult`](interfaces/GetPredictionResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`GetPredictionResult`](interfaces/GetPredictionResult.md)

#### Defined in

src/models/GetPredictionResult.ts:50

___

### GetPredictionResultToJSON

▸ **GetPredictionResultToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`GetPredictionResult`](interfaces/GetPredictionResult.md) |

#### Returns

`any`

#### Defined in

src/models/GetPredictionResult.ts:61

___

### canConsumeForm

▸ **canConsumeForm**(`consumes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumes` | [`Consume`](interfaces/Consume.md)[] |

#### Returns

`boolean`

#### Defined in

src/runtime.ts:327

___

### exists

▸ **exists**(`json`, `key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

src/runtime.ts:288

___

### instanceOfGetChainsResult

▸ **instanceOfGetChainsResult**(`value`): `boolean`

Check if a given object implements the GetChainsResult interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/GetChainsResult.ts:45

___

### instanceOfGetHodlerResult

▸ **instanceOfGetHodlerResult**(`value`): `boolean`

Check if a given object implements the GetHodlerResult interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/GetHodlerResult.ts:39

___

### instanceOfGetModelsResult

▸ **instanceOfGetModelsResult**(`value`): `boolean`

Check if a given object implements the GetModelsResult interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/GetModelsResult.ts:39

___

### instanceOfGetPredictionResult

▸ **instanceOfGetPredictionResult**(`value`): `boolean`

Check if a given object implements the GetPredictionResult interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/GetPredictionResult.ts:39

___

### mapValues

▸ **mapValues**(`data`, `fn`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `fn` | (`item`: `any`) => `any` |

#### Returns

`Object`

#### Defined in

src/runtime.ts:320

___

### querystring

▸ **querystring**(`params`, `prefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | [`HTTPQuery`](modules.md#httpquery) | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`string`

#### Defined in

src/runtime.ts:293
