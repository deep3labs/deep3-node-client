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
 * @interface StakeSageHResponse
 */
export interface StakeSageHResponse {
    /**
     * 
     * @type {number}
     * @memberof StakeSageHResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof StakeSageHResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the StakeSageHResponse interface.
 */
export function instanceOfStakeSageHResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function StakeSageHResponseFromJSON(json: any): StakeSageHResponse {
    return StakeSageHResponseFromJSONTyped(json, false);
}

export function StakeSageHResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakeSageHResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function StakeSageHResponseToJSON(value?: StakeSageHResponse | null): any {
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

