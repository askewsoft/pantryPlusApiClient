/* tslint:disable */
/* eslint-disable */
/**
 * pantryplus-api
 * This is the API layer for the PantryPlus mobile app
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface LocationArea
 */
export interface LocationArea {

    /**
     * The latitude of the user's current location
     *
     * @type {number}
     * @memberof LocationArea
     */
    latitude: number;

    /**
     * The longitude of the user's current location
     *
     * @type {number}
     * @memberof LocationArea
     */
    longitude: number;

    /**
     * The radius of the search
     *
     * @type {number}
     * @memberof LocationArea
     */
    radius: number;
}
