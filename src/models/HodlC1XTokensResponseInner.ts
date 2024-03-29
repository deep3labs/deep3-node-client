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
/**
 * 
 * @export
 * @interface HodlC1XTokensResponseInner
 */
export interface HodlC1XTokensResponseInner {
    /**
     * 
     * @type {string}
     * @memberof HodlC1XTokensResponseInner
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof HodlC1XTokensResponseInner
     */
    result?: number;
}

/**
 * Check if a given object implements the HodlC1XTokensResponseInner interface.
 */
export function instanceOfHodlC1XTokensResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function HodlC1XTokensResponseInnerFromJSON(json: any): HodlC1XTokensResponseInner {
    return HodlC1XTokensResponseInnerFromJSONTyped(json, false);
}

export function HodlC1XTokensResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): HodlC1XTokensResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function HodlC1XTokensResponseInnerToJSON(value?: HodlC1XTokensResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'result': value.result,
    };
}

