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
 * @interface StakeSageLResponse
 */
export interface StakeSageLResponse {
    /**
     * 
     * @type {number}
     * @memberof StakeSageLResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof StakeSageLResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the StakeSageLResponse interface.
 */
export function instanceOfStakeSageLResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function StakeSageLResponseFromJSON(json: any): StakeSageLResponse {
    return StakeSageLResponseFromJSONTyped(json, false);
}

export function StakeSageLResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakeSageLResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function StakeSageLResponseToJSON(value?: StakeSageLResponse | null): any {
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
