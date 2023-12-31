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
 * @interface PostHodlC1XTokenResponse
 */
export interface PostHodlC1XTokenResponse {
    /**
     * 
     * @type {number}
     * @memberof PostHodlC1XTokenResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof PostHodlC1XTokenResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the PostHodlC1XTokenResponse interface.
 */
export function instanceOfPostHodlC1XTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PostHodlC1XTokenResponseFromJSON(json: any): PostHodlC1XTokenResponse {
    return PostHodlC1XTokenResponseFromJSONTyped(json, false);
}

export function PostHodlC1XTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostHodlC1XTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function PostHodlC1XTokenResponseToJSON(value?: PostHodlC1XTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'result': value.result,
    };
}

