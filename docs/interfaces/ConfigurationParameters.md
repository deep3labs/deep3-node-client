[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / ConfigurationParameters

# Interface: ConfigurationParameters

## Table of contents

### Properties

- [apiKey](ConfigurationParameters.md#apikey)
- [basePath](ConfigurationParameters.md#basepath)
- [fetchApi](ConfigurationParameters.md#fetchapi)
- [headers](ConfigurationParameters.md#headers)
- [middleware](ConfigurationParameters.md#middleware)
- [queryParamsStringify](ConfigurationParameters.md#queryparamsstringify)

## Properties

### apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

#### Defined in

src/runtime.ts:23

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

src/runtime.ts:19

___

### fetchApi

• `Optional` **fetchApi**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

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

src/runtime.ts:20

___

### headers

• `Optional` **headers**: [`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

src/runtime.ts:24

___

### middleware

• `Optional` **middleware**: [`Middleware`](Middleware.md)[]

#### Defined in

src/runtime.ts:21

___

### queryParamsStringify

• `Optional` **queryParamsStringify**: (`params`: [`HTTPQuery`](../modules.md#httpquery)) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

##### Returns

`string`

#### Defined in

src/runtime.ts:22
