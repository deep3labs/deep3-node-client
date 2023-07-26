/* tslint:disable */
/* eslint-disable */
/**
 * Deep3 Labs API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.0.2
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
 * @interface GetModelsResult
 */
export interface GetModelsResult {
    /**
     * 
     * @type {string}
     * @memberof GetModelsResult
     */
    name: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetModelsResult
     */
    chains: Array<number>;
}

/**
 * Check if a given object implements the GetModelsResult interface.
 */
export function instanceOfGetModelsResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function GetModelsResultFromJSON(json: any): GetModelsResult {
    return GetModelsResultFromJSONTyped(json, false);
}

export function GetModelsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetModelsResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'chains': json['chains'],
    };
}

export function GetModelsResultToJSON(value?: GetModelsResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'chains': value.chains,
    };
}

