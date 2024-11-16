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
* From T, pick a set of properties whose keys are in the union K
*
* @export
* @interface PickLocationExcludeKeyofLocationId_
*/
export interface PickLocationExcludeKeyofLocationId_ {
    /**
     * The name of the location
     *
     * @type {string}
     * @memberof PickLocationExcludeKeyofLocationId_
     */
    name: string;
    /**
     * The latitude of the user's current location
     *
     * @type {number}
     * @memberof PickLocationExcludeKeyofLocationId_
     */
    latitude: number;
    /**
     * The longitude of the user's current location
     *
     * @type {number}
     * @memberof PickLocationExcludeKeyofLocationId_
     */
    longitude: number;
}
