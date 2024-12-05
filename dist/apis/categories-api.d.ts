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
import { CategoriesCategoryIdBody } from '../models';
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export declare const CategoriesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Removes an item from a category
     * @param {string} xAuthUser
     * @param {string} categoryId the ID of the category
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItemFromCategory: (xAuthUser: string, categoryId: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Updates a category
     * @param {CategoriesCategoryIdBody} body the body of the request
     * @param {string} xAuthUser the email of the user
     * @param {string} categoryId the ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCategory: (body: CategoriesCategoryIdBody, xAuthUser: string, categoryId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CategoriesApi - functional programming interface
 * @export
 */
export declare const CategoriesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Removes an item from a category
     * @param {string} xAuthUser
     * @param {string} categoryId the ID of the category
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItemFromCategory(xAuthUser: string, categoryId: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Updates a category
     * @param {CategoriesCategoryIdBody} body the body of the request
     * @param {string} xAuthUser the email of the user
     * @param {string} categoryId the ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCategory(body: CategoriesCategoryIdBody, xAuthUser: string, categoryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * CategoriesApi - factory interface
 * @export
 */
export declare const CategoriesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Removes an item from a category
     * @param {string} xAuthUser
     * @param {string} categoryId the ID of the category
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItemFromCategory(xAuthUser: string, categoryId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates a category
     * @param {CategoriesCategoryIdBody} body the body of the request
     * @param {string} xAuthUser the email of the user
     * @param {string} categoryId the ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCategory(body: CategoriesCategoryIdBody, xAuthUser: string, categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export declare class CategoriesApi extends BaseAPI {
    /**
     *
     * @summary Removes an item from a category
     * @param {string} xAuthUser
     * @param {string} categoryId the ID of the category
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    removeItemFromCategory(xAuthUser: string, categoryId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates a category
     * @param {CategoriesCategoryIdBody} body the body of the request
     * @param {string} xAuthUser the email of the user
     * @param {string} categoryId the ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    updateCategory(body: CategoriesCategoryIdBody, xAuthUser: string, categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}
