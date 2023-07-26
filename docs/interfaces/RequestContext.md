[@deep3labs/node-client](../README.md) / [Exports](../modules.md) / RequestContext

# Interface: RequestContext

## Table of contents

### Properties

- [fetch](RequestContext.md#fetch)
- [init](RequestContext.md#init)
- [url](RequestContext.md#url)

## Properties

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

src/runtime.ts:341

___

### init

• **init**: `RequestInit`

#### Defined in

src/runtime.ts:343

___

### url

• **url**: `string`

#### Defined in

src/runtime.ts:342
