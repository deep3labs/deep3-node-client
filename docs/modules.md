[@deep3labs/node-client](README.md) / Exports

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
- [ChainsResponseInner](interfaces/ChainsResponseInner.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Consume](interfaces/Consume.md)
- [DeepShieldFrResponse](interfaces/DeepShieldFrResponse.md)
- [DeepShieldHftResponse](interfaces/DeepShieldHftResponse.md)
- [ErrorContext](interfaces/ErrorContext.md)
- [FetchParams](interfaces/FetchParams.md)
- [GetDeepShieldFrPredictionRequest](interfaces/GetDeepShieldFrPredictionRequest.md)
- [GetDeepShieldHftPredictionRequest](interfaces/GetDeepShieldHftPredictionRequest.md)
- [GetHodlC1PredictionRequest](interfaces/GetHodlC1PredictionRequest.md)
- [GetHodlC1XTokenPredictionRequest](interfaces/GetHodlC1XTokenPredictionRequest.md)
- [GetHodlC1XTokenPredictionsRequest](interfaces/GetHodlC1XTokenPredictionsRequest.md)
- [GetPredictionRequest](interfaces/GetPredictionRequest.md)
- [GetStakeSageCPredictionRequest](interfaces/GetStakeSageCPredictionRequest.md)
- [GetStakeSageHPredictionRequest](interfaces/GetStakeSageHPredictionRequest.md)
- [GetStakeSageLPredictionRequest](interfaces/GetStakeSageLPredictionRequest.md)
- [HodlC1Response](interfaces/HodlC1Response.md)
- [HodlC1XTokenRequest](interfaces/HodlC1XTokenRequest.md)
- [HodlC1XTokenRequestMappingsInner](interfaces/HodlC1XTokenRequestMappingsInner.md)
- [HodlC1XTokenResponse](interfaces/HodlC1XTokenResponse.md)
- [HodlC1XTokensRequest](interfaces/HodlC1XTokensRequest.md)
- [HodlC1XTokensRequestAddressesInner](interfaces/HodlC1XTokensRequestAddressesInner.md)
- [HodlC1XTokensResponseInner](interfaces/HodlC1XTokensResponseInner.md)
- [Middleware](interfaces/Middleware.md)
- [ModelsResponseInner](interfaces/ModelsResponseInner.md)
- [PredictionResponse](interfaces/PredictionResponse.md)
- [RequestContext](interfaces/RequestContext.md)
- [RequestOpts](interfaces/RequestOpts.md)
- [ResponseContext](interfaces/ResponseContext.md)
- [ResponseTransformer](interfaces/ResponseTransformer.md)
- [StakeSageCResponse](interfaces/StakeSageCResponse.md)
- [StakeSageHResponse](interfaces/StakeSageHResponse.md)
- [StakeSageLResponse](interfaces/StakeSageLResponse.md)

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

- [ChainsResponseInnerFromJSON](modules.md#chainsresponseinnerfromjson)
- [ChainsResponseInnerFromJSONTyped](modules.md#chainsresponseinnerfromjsontyped)
- [ChainsResponseInnerToJSON](modules.md#chainsresponseinnertojson)
- [DeepShieldFrResponseFromJSON](modules.md#deepshieldfrresponsefromjson)
- [DeepShieldFrResponseFromJSONTyped](modules.md#deepshieldfrresponsefromjsontyped)
- [DeepShieldFrResponseToJSON](modules.md#deepshieldfrresponsetojson)
- [DeepShieldHftResponseFromJSON](modules.md#deepshieldhftresponsefromjson)
- [DeepShieldHftResponseFromJSONTyped](modules.md#deepshieldhftresponsefromjsontyped)
- [DeepShieldHftResponseToJSON](modules.md#deepshieldhftresponsetojson)
- [HodlC1ResponseFromJSON](modules.md#hodlc1responsefromjson)
- [HodlC1ResponseFromJSONTyped](modules.md#hodlc1responsefromjsontyped)
- [HodlC1ResponseToJSON](modules.md#hodlc1responsetojson)
- [HodlC1XTokenRequestFromJSON](modules.md#hodlc1xtokenrequestfromjson)
- [HodlC1XTokenRequestFromJSONTyped](modules.md#hodlc1xtokenrequestfromjsontyped)
- [HodlC1XTokenRequestMappingsInnerFromJSON](modules.md#hodlc1xtokenrequestmappingsinnerfromjson)
- [HodlC1XTokenRequestMappingsInnerFromJSONTyped](modules.md#hodlc1xtokenrequestmappingsinnerfromjsontyped)
- [HodlC1XTokenRequestMappingsInnerToJSON](modules.md#hodlc1xtokenrequestmappingsinnertojson)
- [HodlC1XTokenRequestToJSON](modules.md#hodlc1xtokenrequesttojson)
- [HodlC1XTokenResponseFromJSON](modules.md#hodlc1xtokenresponsefromjson)
- [HodlC1XTokenResponseFromJSONTyped](modules.md#hodlc1xtokenresponsefromjsontyped)
- [HodlC1XTokenResponseToJSON](modules.md#hodlc1xtokenresponsetojson)
- [HodlC1XTokensRequestAddressesInnerFromJSON](modules.md#hodlc1xtokensrequestaddressesinnerfromjson)
- [HodlC1XTokensRequestAddressesInnerFromJSONTyped](modules.md#hodlc1xtokensrequestaddressesinnerfromjsontyped)
- [HodlC1XTokensRequestAddressesInnerToJSON](modules.md#hodlc1xtokensrequestaddressesinnertojson)
- [HodlC1XTokensRequestFromJSON](modules.md#hodlc1xtokensrequestfromjson)
- [HodlC1XTokensRequestFromJSONTyped](modules.md#hodlc1xtokensrequestfromjsontyped)
- [HodlC1XTokensRequestToJSON](modules.md#hodlc1xtokensrequesttojson)
- [HodlC1XTokensResponseInnerFromJSON](modules.md#hodlc1xtokensresponseinnerfromjson)
- [HodlC1XTokensResponseInnerFromJSONTyped](modules.md#hodlc1xtokensresponseinnerfromjsontyped)
- [HodlC1XTokensResponseInnerToJSON](modules.md#hodlc1xtokensresponseinnertojson)
- [ModelsResponseInnerFromJSON](modules.md#modelsresponseinnerfromjson)
- [ModelsResponseInnerFromJSONTyped](modules.md#modelsresponseinnerfromjsontyped)
- [ModelsResponseInnerToJSON](modules.md#modelsresponseinnertojson)
- [PredictionResponseFromJSON](modules.md#predictionresponsefromjson)
- [PredictionResponseFromJSONTyped](modules.md#predictionresponsefromjsontyped)
- [PredictionResponseToJSON](modules.md#predictionresponsetojson)
- [StakeSageCResponseFromJSON](modules.md#stakesagecresponsefromjson)
- [StakeSageCResponseFromJSONTyped](modules.md#stakesagecresponsefromjsontyped)
- [StakeSageCResponseToJSON](modules.md#stakesagecresponsetojson)
- [StakeSageHResponseFromJSON](modules.md#stakesagehresponsefromjson)
- [StakeSageHResponseFromJSONTyped](modules.md#stakesagehresponsefromjsontyped)
- [StakeSageHResponseToJSON](modules.md#stakesagehresponsetojson)
- [StakeSageLResponseFromJSON](modules.md#stakesagelresponsefromjson)
- [StakeSageLResponseFromJSONTyped](modules.md#stakesagelresponsefromjsontyped)
- [StakeSageLResponseToJSON](modules.md#stakesagelresponsetojson)
- [canConsumeForm](modules.md#canconsumeform)
- [exists](modules.md#exists)
- [instanceOfChainsResponseInner](modules.md#instanceofchainsresponseinner)
- [instanceOfDeepShieldFrResponse](modules.md#instanceofdeepshieldfrresponse)
- [instanceOfDeepShieldHftResponse](modules.md#instanceofdeepshieldhftresponse)
- [instanceOfHodlC1Response](modules.md#instanceofhodlc1response)
- [instanceOfHodlC1XTokenRequest](modules.md#instanceofhodlc1xtokenrequest)
- [instanceOfHodlC1XTokenRequestMappingsInner](modules.md#instanceofhodlc1xtokenrequestmappingsinner)
- [instanceOfHodlC1XTokenResponse](modules.md#instanceofhodlc1xtokenresponse)
- [instanceOfHodlC1XTokensRequest](modules.md#instanceofhodlc1xtokensrequest)
- [instanceOfHodlC1XTokensRequestAddressesInner](modules.md#instanceofhodlc1xtokensrequestaddressesinner)
- [instanceOfHodlC1XTokensResponseInner](modules.md#instanceofhodlc1xtokensresponseinner)
- [instanceOfModelsResponseInner](modules.md#instanceofmodelsresponseinner)
- [instanceOfPredictionResponse](modules.md#instanceofpredictionresponse)
- [instanceOfStakeSageCResponse](modules.md#instanceofstakesagecresponse)
- [instanceOfStakeSageHResponse](modules.md#instanceofstakesagehresponse)
- [instanceOfStakeSageLResponse](modules.md#instanceofstakesagelresponse)
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

The version of the OpenAPI document: v0.0.4

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

### ChainsResponseInnerFromJSON

▸ **ChainsResponseInnerFromJSON**(`json`): [`ChainsResponseInner`](interfaces/ChainsResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`ChainsResponseInner`](interfaces/ChainsResponseInner.md)

#### Defined in

src/models/ChainsResponseInner.ts:54

___

### ChainsResponseInnerFromJSONTyped

▸ **ChainsResponseInnerFromJSONTyped**(`json`, `ignoreDiscriminator`): [`ChainsResponseInner`](interfaces/ChainsResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`ChainsResponseInner`](interfaces/ChainsResponseInner.md)

#### Defined in

src/models/ChainsResponseInner.ts:58

___

### ChainsResponseInnerToJSON

▸ **ChainsResponseInnerToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`ChainsResponseInner`](interfaces/ChainsResponseInner.md) |

#### Returns

`any`

#### Defined in

src/models/ChainsResponseInner.ts:70

___

### DeepShieldFrResponseFromJSON

▸ **DeepShieldFrResponseFromJSON**(`json`): [`DeepShieldFrResponse`](interfaces/DeepShieldFrResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`DeepShieldFrResponse`](interfaces/DeepShieldFrResponse.md)

#### Defined in

src/models/DeepShieldFrResponse.ts:46

___

### DeepShieldFrResponseFromJSONTyped

▸ **DeepShieldFrResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`DeepShieldFrResponse`](interfaces/DeepShieldFrResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`DeepShieldFrResponse`](interfaces/DeepShieldFrResponse.md)

#### Defined in

src/models/DeepShieldFrResponse.ts:50

___

### DeepShieldFrResponseToJSON

▸ **DeepShieldFrResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`DeepShieldFrResponse`](interfaces/DeepShieldFrResponse.md) |

#### Returns

`any`

#### Defined in

src/models/DeepShieldFrResponse.ts:61

___

### DeepShieldHftResponseFromJSON

▸ **DeepShieldHftResponseFromJSON**(`json`): [`DeepShieldHftResponse`](interfaces/DeepShieldHftResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`DeepShieldHftResponse`](interfaces/DeepShieldHftResponse.md)

#### Defined in

src/models/DeepShieldHftResponse.ts:46

___

### DeepShieldHftResponseFromJSONTyped

▸ **DeepShieldHftResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`DeepShieldHftResponse`](interfaces/DeepShieldHftResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`DeepShieldHftResponse`](interfaces/DeepShieldHftResponse.md)

#### Defined in

src/models/DeepShieldHftResponse.ts:50

___

### DeepShieldHftResponseToJSON

▸ **DeepShieldHftResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`DeepShieldHftResponse`](interfaces/DeepShieldHftResponse.md) |

#### Returns

`any`

#### Defined in

src/models/DeepShieldHftResponse.ts:61

___

### HodlC1ResponseFromJSON

▸ **HodlC1ResponseFromJSON**(`json`): [`HodlC1Response`](interfaces/HodlC1Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1Response`](interfaces/HodlC1Response.md)

#### Defined in

src/models/HodlC1Response.ts:46

___

### HodlC1ResponseFromJSONTyped

▸ **HodlC1ResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1Response`](interfaces/HodlC1Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1Response`](interfaces/HodlC1Response.md)

#### Defined in

src/models/HodlC1Response.ts:50

___

### HodlC1ResponseToJSON

▸ **HodlC1ResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1Response`](interfaces/HodlC1Response.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1Response.ts:61

___

### HodlC1XTokenRequestFromJSON

▸ **HodlC1XTokenRequestFromJSON**(`json`): [`HodlC1XTokenRequest`](interfaces/HodlC1XTokenRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokenRequest`](interfaces/HodlC1XTokenRequest.md)

#### Defined in

src/models/HodlC1XTokenRequest.ts:53

___

### HodlC1XTokenRequestFromJSONTyped

▸ **HodlC1XTokenRequestFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokenRequest`](interfaces/HodlC1XTokenRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokenRequest`](interfaces/HodlC1XTokenRequest.md)

#### Defined in

src/models/HodlC1XTokenRequest.ts:57

___

### HodlC1XTokenRequestMappingsInnerFromJSON

▸ **HodlC1XTokenRequestMappingsInnerFromJSON**(`json`): [`HodlC1XTokenRequestMappingsInner`](interfaces/HodlC1XTokenRequestMappingsInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokenRequestMappingsInner`](interfaces/HodlC1XTokenRequestMappingsInner.md)

#### Defined in

src/models/HodlC1XTokenRequestMappingsInner.ts:47

___

### HodlC1XTokenRequestMappingsInnerFromJSONTyped

▸ **HodlC1XTokenRequestMappingsInnerFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokenRequestMappingsInner`](interfaces/HodlC1XTokenRequestMappingsInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokenRequestMappingsInner`](interfaces/HodlC1XTokenRequestMappingsInner.md)

#### Defined in

src/models/HodlC1XTokenRequestMappingsInner.ts:51

___

### HodlC1XTokenRequestMappingsInnerToJSON

▸ **HodlC1XTokenRequestMappingsInnerToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokenRequestMappingsInner`](interfaces/HodlC1XTokenRequestMappingsInner.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokenRequestMappingsInner.ts:62

___

### HodlC1XTokenRequestToJSON

▸ **HodlC1XTokenRequestToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokenRequest`](interfaces/HodlC1XTokenRequest.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokenRequest.ts:68

___

### HodlC1XTokenResponseFromJSON

▸ **HodlC1XTokenResponseFromJSON**(`json`): [`HodlC1XTokenResponse`](interfaces/HodlC1XTokenResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokenResponse`](interfaces/HodlC1XTokenResponse.md)

#### Defined in

src/models/HodlC1XTokenResponse.ts:46

___

### HodlC1XTokenResponseFromJSONTyped

▸ **HodlC1XTokenResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokenResponse`](interfaces/HodlC1XTokenResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokenResponse`](interfaces/HodlC1XTokenResponse.md)

#### Defined in

src/models/HodlC1XTokenResponse.ts:50

___

### HodlC1XTokenResponseToJSON

▸ **HodlC1XTokenResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokenResponse`](interfaces/HodlC1XTokenResponse.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokenResponse.ts:61

___

### HodlC1XTokensRequestAddressesInnerFromJSON

▸ **HodlC1XTokensRequestAddressesInnerFromJSON**(`json`): [`HodlC1XTokensRequestAddressesInner`](interfaces/HodlC1XTokensRequestAddressesInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokensRequestAddressesInner`](interfaces/HodlC1XTokensRequestAddressesInner.md)

#### Defined in

src/models/HodlC1XTokensRequestAddressesInner.ts:53

___

### HodlC1XTokensRequestAddressesInnerFromJSONTyped

▸ **HodlC1XTokensRequestAddressesInnerFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokensRequestAddressesInner`](interfaces/HodlC1XTokensRequestAddressesInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokensRequestAddressesInner`](interfaces/HodlC1XTokensRequestAddressesInner.md)

#### Defined in

src/models/HodlC1XTokensRequestAddressesInner.ts:57

___

### HodlC1XTokensRequestAddressesInnerToJSON

▸ **HodlC1XTokensRequestAddressesInnerToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokensRequestAddressesInner`](interfaces/HodlC1XTokensRequestAddressesInner.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokensRequestAddressesInner.ts:68

___

### HodlC1XTokensRequestFromJSON

▸ **HodlC1XTokensRequestFromJSON**(`json`): [`HodlC1XTokensRequest`](interfaces/HodlC1XTokensRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokensRequest`](interfaces/HodlC1XTokensRequest.md)

#### Defined in

src/models/HodlC1XTokensRequest.ts:46

___

### HodlC1XTokensRequestFromJSONTyped

▸ **HodlC1XTokensRequestFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokensRequest`](interfaces/HodlC1XTokensRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokensRequest`](interfaces/HodlC1XTokensRequest.md)

#### Defined in

src/models/HodlC1XTokensRequest.ts:50

___

### HodlC1XTokensRequestToJSON

▸ **HodlC1XTokensRequestToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokensRequest`](interfaces/HodlC1XTokensRequest.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokensRequest.ts:60

___

### HodlC1XTokensResponseInnerFromJSON

▸ **HodlC1XTokensResponseInnerFromJSON**(`json`): [`HodlC1XTokensResponseInner`](interfaces/HodlC1XTokensResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`HodlC1XTokensResponseInner`](interfaces/HodlC1XTokensResponseInner.md)

#### Defined in

src/models/HodlC1XTokensResponseInner.ts:46

___

### HodlC1XTokensResponseInnerFromJSONTyped

▸ **HodlC1XTokensResponseInnerFromJSONTyped**(`json`, `ignoreDiscriminator`): [`HodlC1XTokensResponseInner`](interfaces/HodlC1XTokensResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`HodlC1XTokensResponseInner`](interfaces/HodlC1XTokensResponseInner.md)

#### Defined in

src/models/HodlC1XTokensResponseInner.ts:50

___

### HodlC1XTokensResponseInnerToJSON

▸ **HodlC1XTokensResponseInnerToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`HodlC1XTokensResponseInner`](interfaces/HodlC1XTokensResponseInner.md) |

#### Returns

`any`

#### Defined in

src/models/HodlC1XTokensResponseInner.ts:61

___

### ModelsResponseInnerFromJSON

▸ **ModelsResponseInnerFromJSON**(`json`): [`ModelsResponseInner`](interfaces/ModelsResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`ModelsResponseInner`](interfaces/ModelsResponseInner.md)

#### Defined in

src/models/ModelsResponseInner.ts:47

___

### ModelsResponseInnerFromJSONTyped

▸ **ModelsResponseInnerFromJSONTyped**(`json`, `ignoreDiscriminator`): [`ModelsResponseInner`](interfaces/ModelsResponseInner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`ModelsResponseInner`](interfaces/ModelsResponseInner.md)

#### Defined in

src/models/ModelsResponseInner.ts:51

___

### ModelsResponseInnerToJSON

▸ **ModelsResponseInnerToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`ModelsResponseInner`](interfaces/ModelsResponseInner.md) |

#### Returns

`any`

#### Defined in

src/models/ModelsResponseInner.ts:62

___

### PredictionResponseFromJSON

▸ **PredictionResponseFromJSON**(`json`): [`PredictionResponse`](interfaces/PredictionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`PredictionResponse`](interfaces/PredictionResponse.md)

#### Defined in

src/models/PredictionResponse.ts:46

___

### PredictionResponseFromJSONTyped

▸ **PredictionResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`PredictionResponse`](interfaces/PredictionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`PredictionResponse`](interfaces/PredictionResponse.md)

#### Defined in

src/models/PredictionResponse.ts:50

___

### PredictionResponseToJSON

▸ **PredictionResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`PredictionResponse`](interfaces/PredictionResponse.md) |

#### Returns

`any`

#### Defined in

src/models/PredictionResponse.ts:61

___

### StakeSageCResponseFromJSON

▸ **StakeSageCResponseFromJSON**(`json`): [`StakeSageCResponse`](interfaces/StakeSageCResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`StakeSageCResponse`](interfaces/StakeSageCResponse.md)

#### Defined in

src/models/StakeSageCResponse.ts:46

___

### StakeSageCResponseFromJSONTyped

▸ **StakeSageCResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`StakeSageCResponse`](interfaces/StakeSageCResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`StakeSageCResponse`](interfaces/StakeSageCResponse.md)

#### Defined in

src/models/StakeSageCResponse.ts:50

___

### StakeSageCResponseToJSON

▸ **StakeSageCResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`StakeSageCResponse`](interfaces/StakeSageCResponse.md) |

#### Returns

`any`

#### Defined in

src/models/StakeSageCResponse.ts:61

___

### StakeSageHResponseFromJSON

▸ **StakeSageHResponseFromJSON**(`json`): [`StakeSageHResponse`](interfaces/StakeSageHResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`StakeSageHResponse`](interfaces/StakeSageHResponse.md)

#### Defined in

src/models/StakeSageHResponse.ts:46

___

### StakeSageHResponseFromJSONTyped

▸ **StakeSageHResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`StakeSageHResponse`](interfaces/StakeSageHResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`StakeSageHResponse`](interfaces/StakeSageHResponse.md)

#### Defined in

src/models/StakeSageHResponse.ts:50

___

### StakeSageHResponseToJSON

▸ **StakeSageHResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`StakeSageHResponse`](interfaces/StakeSageHResponse.md) |

#### Returns

`any`

#### Defined in

src/models/StakeSageHResponse.ts:61

___

### StakeSageLResponseFromJSON

▸ **StakeSageLResponseFromJSON**(`json`): [`StakeSageLResponse`](interfaces/StakeSageLResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`StakeSageLResponse`](interfaces/StakeSageLResponse.md)

#### Defined in

src/models/StakeSageLResponse.ts:46

___

### StakeSageLResponseFromJSONTyped

▸ **StakeSageLResponseFromJSONTyped**(`json`, `ignoreDiscriminator`): [`StakeSageLResponse`](interfaces/StakeSageLResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`StakeSageLResponse`](interfaces/StakeSageLResponse.md)

#### Defined in

src/models/StakeSageLResponse.ts:50

___

### StakeSageLResponseToJSON

▸ **StakeSageLResponseToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`StakeSageLResponse`](interfaces/StakeSageLResponse.md) |

#### Returns

`any`

#### Defined in

src/models/StakeSageLResponse.ts:61

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

### instanceOfChainsResponseInner

▸ **instanceOfChainsResponseInner**(`value`): `boolean`

Check if a given object implements the ChainsResponseInner interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/ChainsResponseInner.ts:45

___

### instanceOfDeepShieldFrResponse

▸ **instanceOfDeepShieldFrResponse**(`value`): `boolean`

Check if a given object implements the DeepShieldFrResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/DeepShieldFrResponse.ts:39

___

### instanceOfDeepShieldHftResponse

▸ **instanceOfDeepShieldHftResponse**(`value`): `boolean`

Check if a given object implements the DeepShieldHftResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/DeepShieldHftResponse.ts:39

___

### instanceOfHodlC1Response

▸ **instanceOfHodlC1Response**(`value`): `boolean`

Check if a given object implements the HodlC1Response interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1Response.ts:39

___

### instanceOfHodlC1XTokenRequest

▸ **instanceOfHodlC1XTokenRequest**(`value`): `boolean`

Check if a given object implements the HodlC1XTokenRequest interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokenRequest.ts:46

___

### instanceOfHodlC1XTokenRequestMappingsInner

▸ **instanceOfHodlC1XTokenRequestMappingsInner**(`value`): `boolean`

Check if a given object implements the HodlC1XTokenRequestMappingsInner interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokenRequestMappingsInner.ts:39

___

### instanceOfHodlC1XTokenResponse

▸ **instanceOfHodlC1XTokenResponse**(`value`): `boolean`

Check if a given object implements the HodlC1XTokenResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokenResponse.ts:39

___

### instanceOfHodlC1XTokensRequest

▸ **instanceOfHodlC1XTokensRequest**(`value`): `boolean`

Check if a given object implements the HodlC1XTokensRequest interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokensRequest.ts:40

___

### instanceOfHodlC1XTokensRequestAddressesInner

▸ **instanceOfHodlC1XTokensRequestAddressesInner**(`value`): `boolean`

Check if a given object implements the HodlC1XTokensRequestAddressesInner interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokensRequestAddressesInner.ts:46

___

### instanceOfHodlC1XTokensResponseInner

▸ **instanceOfHodlC1XTokensResponseInner**(`value`): `boolean`

Check if a given object implements the HodlC1XTokensResponseInner interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/HodlC1XTokensResponseInner.ts:39

___

### instanceOfModelsResponseInner

▸ **instanceOfModelsResponseInner**(`value`): `boolean`

Check if a given object implements the ModelsResponseInner interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/ModelsResponseInner.ts:39

___

### instanceOfPredictionResponse

▸ **instanceOfPredictionResponse**(`value`): `boolean`

Check if a given object implements the PredictionResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/PredictionResponse.ts:39

___

### instanceOfStakeSageCResponse

▸ **instanceOfStakeSageCResponse**(`value`): `boolean`

Check if a given object implements the StakeSageCResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/StakeSageCResponse.ts:39

___

### instanceOfStakeSageHResponse

▸ **instanceOfStakeSageHResponse**(`value`): `boolean`

Check if a given object implements the StakeSageHResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/StakeSageHResponse.ts:39

___

### instanceOfStakeSageLResponse

▸ **instanceOfStakeSageLResponse**(`value`): `boolean`

Check if a given object implements the StakeSageLResponse interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/models/StakeSageLResponse.ts:39

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
