[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [configuration](Configuration.md#configuration)

### Accessors

- [apiKey](Configuration.md#apikey)
- [basePath](Configuration.md#basepath)
- [config](Configuration.md#config)
- [fetchApi](Configuration.md#fetchapi)
- [headers](Configuration.md#headers)
- [middleware](Configuration.md#middleware)
- [queryParamsStringify](Configuration.md#queryparamsstringify)

## Constructors

### constructor

• **new Configuration**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

src/runtime.ts:28

## Properties

### configuration

• `Private` **configuration**: [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) = `{}`

#### Defined in

src/runtime.ts:28

## Accessors

### apiKey

• `get` **apiKey**(): (`name`: `string`) => `string`

#### Returns

`fn`

▸ (`name`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`string`

#### Defined in

src/runtime.ts:50

___

### basePath

• `get` **basePath**(): `string`

#### Returns

`string`

#### Defined in

src/runtime.ts:34

___

### config

• `set` **config**(`configuration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Returns

`void`

#### Defined in

src/runtime.ts:30

___

### fetchApi

• `get` **fetchApi**(): (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Returns

`fn`

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

#### Defined in

src/runtime.ts:38

___

### headers

• `get` **headers**(): [`HTTPHeaders`](../modules.md#httpheaders)

#### Returns

[`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

src/runtime.ts:58

___

### middleware

• `get` **middleware**(): [`Middleware`](../interfaces/Middleware.md)[]

#### Returns

[`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

src/runtime.ts:42

___

### queryParamsStringify

• `get` **queryParamsStringify**(): (`params`: [`HTTPQuery`](../modules.md#httpquery)) => `string`

#### Returns

`fn`

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

##### Returns

`string`

#### Defined in

src/runtime.ts:46
