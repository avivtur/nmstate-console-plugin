/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * NMStateStatus defines the observed state of NMState
 * @export
 * @interface V1NMStateStatus
 */
export interface V1NMStateStatus {
    /**
     * 
     * @type {any}
     * @memberof V1NMStateStatus
     */
    conditions?: any | null;
}

/**
 * Check if a given object implements the V1NMStateStatus interface.
 */
export function instanceOfV1NMStateStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NMStateStatusFromJSON(json: any): V1NMStateStatus {
    return V1NMStateStatusFromJSONTyped(json, false);
}

export function V1NMStateStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NMStateStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
    };
}

export function V1NMStateStatusToJSON(value?: V1NMStateStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions,
    };
}

