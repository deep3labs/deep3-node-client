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
 * @interface ModelsResponseInner
 */
export interface ModelsResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ModelsResponseInner
     */
    model: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ModelsResponseInner
     */
    chains: Array<number>;
}

/**
 * Check if a given object implements the ModelsResponseInner interface.
 */
export function instanceOfModelsResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function ModelsResponseInnerFromJSON(json: any): ModelsResponseInner {
    return ModelsResponseInnerFromJSONTyped(json, false);
}

export function ModelsResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'chains': json['chains'],
    };
}

export function ModelsResponseInnerToJSON(value?: ModelsResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'chains': value.chains,
    };
}

