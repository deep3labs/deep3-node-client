/* tslint:disable */
/* eslint-disable */
/**
 * Deep3 Labs API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.0.3
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
 * @interface PostHodlC1XTokensResponseInner
 */
export interface PostHodlC1XTokensResponseInner {
    /**
     * 
     * @type {string}
     * @memberof PostHodlC1XTokensResponseInner
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof PostHodlC1XTokensResponseInner
     */
    result?: number;
}

/**
 * Check if a given object implements the PostHodlC1XTokensResponseInner interface.
 */
export function instanceOfPostHodlC1XTokensResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function PostHodlC1XTokensResponseInnerFromJSON(json: any): PostHodlC1XTokensResponseInner {
    return PostHodlC1XTokensResponseInnerFromJSONTyped(json, false);
}

export function PostHodlC1XTokensResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostHodlC1XTokensResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function PostHodlC1XTokensResponseInnerToJSON(value?: PostHodlC1XTokensResponseInner | null): any {
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

