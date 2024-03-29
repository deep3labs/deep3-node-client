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
 * @interface HodlC1XTokenResponse
 */
export interface HodlC1XTokenResponse {
    /**
     * 
     * @type {number}
     * @memberof HodlC1XTokenResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof HodlC1XTokenResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the HodlC1XTokenResponse interface.
 */
export function instanceOfHodlC1XTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function HodlC1XTokenResponseFromJSON(json: any): HodlC1XTokenResponse {
    return HodlC1XTokenResponseFromJSONTyped(json, false);
}

export function HodlC1XTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HodlC1XTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function HodlC1XTokenResponseToJSON(value?: HodlC1XTokenResponse | null): any {
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

