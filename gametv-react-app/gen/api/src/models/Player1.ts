/* tslint:disable */
/* eslint-disable */
/**
 * GameTV service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface Player1
 */
export interface Player1 {
    /**
     * 
     * @type {string}
     * @memberof Player1
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Player1
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Player1
     */
    score?: string;
}

export function Player1FromJSON(json: any): Player1 {
    return Player1FromJSONTyped(json, false);
}

export function Player1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Player1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'score': !exists(json, 'score') ? undefined : json['score'],
    };
}

export function Player1ToJSON(value?: Player1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'score': value.score,
    };
}

