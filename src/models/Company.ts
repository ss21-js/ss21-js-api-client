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
import { Address, AddressFromJSON, AddressFromJSONTyped, AddressToJSON } from './';

/**
 *
 * @export
 * @interface Company
 */
export interface Company {
	/**
	 * id
	 * @type {string}
	 * @memberof Company
	 */
	id: string;
	/**
	 * address field
	 * @type {Address}
	 * @memberof Company
	 */
	address: Address;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	email: string;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	name: string;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	companyInfo: string;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	homepage: string;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	companyProfileImageUrl: string;
	/**
	 *
	 * @type {string}
	 * @memberof Company
	 */
	companyHeaderImageUrl: string;
}

export function CompanyFromJSON(json: any): Company {
	return CompanyFromJSONTyped(json, false);
}

export function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['_id'],
		address: AddressFromJSON(json['address']),
		email: json['email'],
		name: json['name'],
		companyInfo: json['company_info'],
		homepage: json['homepage'],
		companyProfileImageUrl: json['companyProfileImageUrl'],
		companyHeaderImageUrl: json['companyHeaderImageUrl'],
	};
}

export function CompanyToJSON(value?: Company | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		_id: value.id,
		address: AddressToJSON(value.address),
		email: value.email,
		name: value.name,
		company_info: value.companyInfo,
		homepage: value.homepage,
		companyProfileImageUrl: value.companyProfileImageUrl,
		companyHeaderImageUrl: value.companyHeaderImageUrl,
	};
}
