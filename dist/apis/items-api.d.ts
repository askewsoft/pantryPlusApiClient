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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { ItemsBody } from '../models';
import { ItemsItemIdBody } from '../models';
/**
 * ItemsApi - axios parameter creator
 * @export
 */
export declare const ItemsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Creates an item
     * @param {ItemsBody} body the body of the request
     * @param {string} xAuthUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem: (body: ItemsBody, xAuthUser: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Updates an item
     * @param {ItemsItemIdBody} body the body of the request
     * @param {string} xAuthUser
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateItem: (body: ItemsItemIdBody, xAuthUser: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ItemsApi - functional programming interface
 * @export
 */
export declare const ItemsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Creates an item
     * @param {ItemsBody} body the body of the request
     * @param {string} xAuthUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem(body: ItemsBody, xAuthUser: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Updates an item
     * @param {ItemsItemIdBody} body the body of the request
     * @param {string} xAuthUser
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateItem(body: ItemsItemIdBody, xAuthUser: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * ItemsApi - factory interface
 * @export
 */
export declare const ItemsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Creates an item
     * @param {ItemsBody} body the body of the request
     * @param {string} xAuthUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem(body: ItemsBody, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates an item
     * @param {ItemsItemIdBody} body the body of the request
     * @param {string} xAuthUser
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateItem(body: ItemsItemIdBody, xAuthUser: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export declare class ItemsApi extends BaseAPI {
    /**
     *
     * @summary Creates an item
     * @param {ItemsBody} body the body of the request
     * @param {string} xAuthUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    createItem(body: ItemsBody, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates an item
     * @param {ItemsItemIdBody} body the body of the request
     * @param {string} xAuthUser
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    updateItem(body: ItemsItemIdBody, xAuthUser: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}
