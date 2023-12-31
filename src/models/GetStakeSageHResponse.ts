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
 * @interface GetStakeSageHResponse
 */
export interface GetStakeSageHResponse {
    /**
     * 
     * @type {number}
     * @memberof GetStakeSageHResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof GetStakeSageHResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the GetStakeSageHResponse interface.
 */
export function instanceOfGetStakeSageHResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function GetStakeSageHResponseFromJSON(json: any): GetStakeSageHResponse {
    return GetStakeSageHResponseFromJSONTyped(json, false);
}

export function GetStakeSageHResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStakeSageHResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function GetStakeSageHResponseToJSON(value?: GetStakeSageHResponse | null): any {
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

