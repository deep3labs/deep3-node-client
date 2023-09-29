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
 * @interface PredictionResponse
 */
export interface PredictionResponse {
    /**
     * 
     * @type {number}
     * @memberof PredictionResponse
     */
    code: number;
    /**
     * 
     * @type {number}
     * @memberof PredictionResponse
     */
    result?: number;
}

/**
 * Check if a given object implements the PredictionResponse interface.
 */
export function instanceOfPredictionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PredictionResponseFromJSON(json: any): PredictionResponse {
    return PredictionResponseFromJSONTyped(json, false);
}

export function PredictionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function PredictionResponseToJSON(value?: PredictionResponse | null): any {
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
