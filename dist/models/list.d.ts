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
* A List is a grouping of items.
*
* @export
* @interface List
*/
export interface List {
    /**
     * UUID representation of the list's ID
     *
     * @type {string}
     * @memberof List
     */
    id: string;
    /**
     * The name of the list
     *
     * @type {string}
     * @memberof List
     */
    name: string;
    /**
     * The shopper that originally created the list
     *
     * @type {string}
     * @memberof List
     */
    ownerId: string;
    /**
     * The group of users with whom this list is shared
     *
     * @type {string}
     * @memberof List
     */
    groupId?: string;
    /**
     * The ordinal of the list
     *
     * @type {number}
     * @memberof List
     */
    ordinal: number;
}
