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
* @interface RecentLocation
*/
export interface RecentLocation {
    /**
     * UUID representation of the location's ID
     *
     * @type {string}
     * @memberof RecentLocation
     */
    id: string;
    /**
     * The name of the location
     *
     * @type {string}
     * @memberof RecentLocation
     */
    name: string;
    /**
     * The latitude of the user's current location
     *
     * @type {number}
     * @memberof RecentLocation
     */
    latitude: number;
    /**
     * The longitude of the user's current location
     *
     * @type {number}
     * @memberof RecentLocation
     */
    longitude: number;
    /**
     * The date of the purchase
     *
     * @type {string}
     * @memberof RecentLocation
     */
    lastPurchaseDate: string;
}
