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
import type { V1NMStateSpec } from './V1NMStateSpec';
import {
    V1NMStateSpecFromJSON,
    V1NMStateSpecFromJSONTyped,
    V1NMStateSpecToJSON,
} from './V1NMStateSpec';
import type { V1NMStateStatus } from './V1NMStateStatus';
import {
    V1NMStateStatusFromJSON,
    V1NMStateStatusFromJSONTyped,
    V1NMStateStatusToJSON,
} from './V1NMStateStatus';

/**
 * NMState is the Schema for the nmstates API
 * @export
 * @interface V1NMState
 */
export interface V1NMState {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {any}
     * @memberof V1NMState
     */
    apiVersion?: any | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {any}
     * @memberof V1NMState
     */
    kind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof V1NMState
     */
    metadata?: any | null;
    /**
     * 
     * @type {V1NMStateSpec}
     * @memberof V1NMState
     */
    spec?: V1NMStateSpec;
    /**
     * 
     * @type {V1NMStateStatus}
     * @memberof V1NMState
     */
    status?: V1NMStateStatus;
}

/**
 * Check if a given object implements the V1NMState interface.
 */
export function instanceOfV1NMState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NMStateFromJSON(json: any): V1NMState {
    return V1NMStateFromJSONTyped(json, false);
}

export function V1NMStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NMState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'spec': !exists(json, 'spec') ? undefined : V1NMStateSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1NMStateStatusFromJSON(json['status']),
    };
}

export function V1NMStateToJSON(value?: V1NMState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': value.metadata,
        'spec': V1NMStateSpecToJSON(value.spec),
        'status': V1NMStateStatusToJSON(value.status),
    };
}

