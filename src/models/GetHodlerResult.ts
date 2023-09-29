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
 * @interface GetHodlerResult
 */
export interface GetHodlerResult {
    /**
     * 
     * @type {number}
     * @memberof GetHodlerResult
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof GetHodlerResult
     */
    result?: number;
}

/**
 * Check if a given object implements the GetHodlerResult interface.
 */
export function instanceOfGetHodlerResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function GetHodlerResultFromJSON(json: any): GetHodlerResult {
    return GetHodlerResultFromJSONTyped(json, false);
}

export function GetHodlerResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetHodlerResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function GetHodlerResultToJSON(value?: GetHodlerResult | null): any {
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

