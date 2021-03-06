/* tslint:disable */
/* eslint-disable */
/**
 * JS-SS21 API Documentation
 * API description
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    street1: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    street2: string;
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    zip: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country: string;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'street1': json['street1'],
        'street2': json['street2'],
        'zip': json['zip'],
        'city': json['city'],
        'state': json['state'],
        'country': json['country'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'street1': value.street1,
        'street2': value.street2,
        'zip': value.zip,
        'city': value.city,
        'state': value.state,
        'country': value.country,
    };
}


