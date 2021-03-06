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
 * @interface CreateJobDto
 */
export interface CreateJobDto {
    /**
     * 
     * @type {string}
     * @memberof CreateJobDto
     */
    contactMail: string;
    /**
     * 
     * @type {string}
     * @memberof CreateJobDto
     */
    jobName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateJobDto
     */
    headerImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof CreateJobDto
     */
    jobDescription: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateJobDto
     */
    jobQualifications: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateJobDto
     */
    skills: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateJobDto
     */
    workArea: string;
    /**
     * 
     * @type {number}
     * @memberof CreateJobDto
     */
    workBasis: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateJobDto
     */
    languages: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof CreateJobDto
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateJobDto
     */
    to: Date;
}

export function CreateJobDtoFromJSON(json: any): CreateJobDto {
    return CreateJobDtoFromJSONTyped(json, false);
}

export function CreateJobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateJobDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactMail': json['contactMail'],
        'jobName': json['jobName'],
        'headerImageUrl': json['headerImageUrl'],
        'jobDescription': json['jobDescription'],
        'jobQualifications': json['jobQualifications'],
        'skills': json['skills'],
        'workArea': json['workArea'],
        'workBasis': json['workBasis'],
        'languages': json['languages'],
        'from': (new Date(json['from'])),
        'to': (new Date(json['to'])),
    };
}

export function CreateJobDtoToJSON(value?: CreateJobDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contactMail': value.contactMail,
        'jobName': value.jobName,
        'headerImageUrl': value.headerImageUrl,
        'jobDescription': value.jobDescription,
        'jobQualifications': value.jobQualifications,
        'skills': value.skills,
        'workArea': value.workArea,
        'workBasis': value.workBasis,
        'languages': value.languages,
        'from': (value.from.toISOString()),
        'to': (value.to.toISOString()),
    };
}


