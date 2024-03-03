/* tslint:disable */
/* eslint-disable */
/**
 * Deep3 Labs API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HodlC1XTokenRequestMappingsInner } from './HodlC1XTokenRequestMappingsInner';
import {
    HodlC1XTokenRequestMappingsInnerFromJSON,
    HodlC1XTokenRequestMappingsInnerFromJSONTyped,
    HodlC1XTokenRequestMappingsInnerToJSON,
} from './HodlC1XTokenRequestMappingsInner';

/**
 * 
 * @export
 * @interface HodlC1XTokensRequestAddressesInner
 */
export interface HodlC1XTokensRequestAddressesInner {
    /**
     * 
     * @type {string}
     * @memberof HodlC1XTokensRequestAddressesInner
     */
    address: string;
    /**
     * 
     * @type {Array<HodlC1XTokenRequestMappingsInner>}
     * @memberof HodlC1XTokensRequestAddressesInner
     */
    mappings?: Array<HodlC1XTokenRequestMappingsInner>;
}

/**
 * Check if a given object implements the HodlC1XTokensRequestAddressesInner interface.
 */
export function instanceOfHodlC1XTokensRequestAddressesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function HodlC1XTokensRequestAddressesInnerFromJSON(json: any): HodlC1XTokensRequestAddressesInner {
    return HodlC1XTokensRequestAddressesInnerFromJSONTyped(json, false);
}

export function HodlC1XTokensRequestAddressesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): HodlC1XTokensRequestAddressesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'mappings': !exists(json, 'mappings') ? undefined : ((json['mappings'] as Array<any>).map(HodlC1XTokenRequestMappingsInnerFromJSON)),
    };
}

export function HodlC1XTokensRequestAddressesInnerToJSON(value?: HodlC1XTokensRequestAddressesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'mappings': value.mappings === undefined ? undefined : ((value.mappings as Array<any>).map(HodlC1XTokenRequestMappingsInnerToJSON)),
    };
}

