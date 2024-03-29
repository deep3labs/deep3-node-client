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
 * @interface ChainsResponseInner
 */
export interface ChainsResponseInner {
    /**
     * 
     * @type {number}
     * @memberof ChainsResponseInner
     */
    chainId: number;
    /**
     * 
     * @type {string}
     * @memberof ChainsResponseInner
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChainsResponseInner
     */
    models: Array<string>;
}

/**
 * Check if a given object implements the ChainsResponseInner interface.
 */
export function instanceOfChainsResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "models" in value;

    return isInstance;
}

export function ChainsResponseInnerFromJSON(json: any): ChainsResponseInner {
    return ChainsResponseInnerFromJSONTyped(json, false);
}

export function ChainsResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainsResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainId': json['chainId'],
        'name': json['name'],
        'models': json['models'],
    };
}

export function ChainsResponseInnerToJSON(value?: ChainsResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainId': value.chainId,
        'name': value.name,
        'models': value.models,
    };
}

