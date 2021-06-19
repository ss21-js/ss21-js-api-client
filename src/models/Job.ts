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
 * @interface Job
 */
export interface Job {
    /**
     * id
     * @type {string}
     * @memberof Job
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    publisherId: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    contactMail: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    jobName: string;
    /**
     * 
     * @type {object}
     * @memberof Job
     */
    headerImageUrl: object;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    jobDescription: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    jobQualifications: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    skills: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    workArea: string;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    workBasis: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    languages: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Job
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof Job
     */
    to: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Job
     */
    active: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    requestedByStudents: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    requestedIds: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof Job
     */
    finalAcceptedId: object;
}

export function JobFromJSON(json: any): Job {
    return JobFromJSONTyped(json, false);
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['_id'],
        'publisherId': json['publisher_id'],
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
        'active': json['active'],
        'requestedByStudents': json['requested_by_students'],
        'requestedIds': json['requested_ids'],
        'finalAcceptedId': json['final_accepted_id'],
    };
}

export function JobToJSON(value?: Job | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_id': value.id,
        'publisher_id': value.publisherId,
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
        'active': value.active,
        'requested_by_students': value.requestedByStudents,
        'requested_ids': value.requestedIds,
        'final_accepted_id': value.finalAcceptedId,
    };
}


