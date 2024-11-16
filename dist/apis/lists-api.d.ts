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
import { CategoryResponse } from '../models';
import { ListIdItemsBody } from '../models';
import { OmitCategoryId_ } from '../models';
import { OmitListId_ } from '../models';
import { PickCategoryId_ } from '../models';
import { PickItemId_ } from '../models';
import { PickListId_ } from '../models';
/**
 * ListsApi - axios parameter creator
 * @export
 */
export declare const ListsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Adds a category to a list
     * @param {OmitCategoryId_} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCategory: (body: OmitCategoryId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Adds an item to a list
     * @param {ListIdItemsBody} body the item to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem: (body: ListIdItemsBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Creates a new list of items
     * @param {OmitListId_} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList: (body: OmitListId_, xAuthUser: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Deletes a list of items
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteList: (xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Retrieves the categories for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories: (xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Purchases an item on a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to purchase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchaseItem: (xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Removes a category from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} categoryId the ID of the category to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeCategory: (xAuthUser: string, listId: string, categoryId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Removes an item from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItem: (xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Removes the purchase of an item from purchase history
     * @param {string} body the date of purchase
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpurchaseItem: (body: string, xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Updates a list
     * @param {OmitListId_} body the updated list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList: (body: OmitListId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ListsApi - functional programming interface
 * @export
 */
export declare const ListsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Adds a category to a list
     * @param {OmitCategoryId_} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCategory(body: OmitCategoryId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickCategoryId_>>>;
    /**
     *
     * @summary Adds an item to a list
     * @param {ListIdItemsBody} body the item to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem(body: ListIdItemsBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickItemId_>>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {OmitListId_} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList(body: OmitListId_, xAuthUser: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickListId_>>>;
    /**
     *
     * @summary Deletes a list of items
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteList(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Retrieves the categories for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CategoryResponse>>>>;
    /**
     *
     * @summary Purchases an item on a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to purchase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchaseItem(xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Removes a category from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} categoryId the ID of the category to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeCategory(xAuthUser: string, listId: string, categoryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Removes an item from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Removes the purchase of an item from purchase history
     * @param {string} body the date of purchase
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpurchaseItem(body: string, xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Updates a list
     * @param {OmitListId_} body the updated list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList(body: OmitListId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * ListsApi - factory interface
 * @export
 */
export declare const ListsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Adds a category to a list
     * @param {OmitCategoryId_} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCategory(body: OmitCategoryId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickCategoryId_>>;
    /**
     *
     * @summary Adds an item to a list
     * @param {ListIdItemsBody} body the item to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem(body: ListIdItemsBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickItemId_>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {OmitListId_} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList(body: OmitListId_, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickListId_>>;
    /**
     *
     * @summary Deletes a list of items
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteList(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Retrieves the categories for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CategoryResponse>>>;
    /**
     *
     * @summary Purchases an item on a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to purchase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchaseItem(xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes a category from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} categoryId the ID of the category to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeCategory(xAuthUser: string, listId: string, categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes an item from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes the purchase of an item from purchase history
     * @param {string} body the date of purchase
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpurchaseItem(body: string, xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates a list
     * @param {OmitListId_} body the updated list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList(body: OmitListId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * ListsApi - object-oriented interface
 * @export
 * @class ListsApi
 * @extends {BaseAPI}
 */
export declare class ListsApi extends BaseAPI {
    /**
     *
     * @summary Adds a category to a list
     * @param {OmitCategoryId_} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    addCategory(body: OmitCategoryId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickCategoryId_>>;
    /**
     *
     * @summary Adds an item to a list
     * @param {ListIdItemsBody} body the item to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    addItem(body: ListIdItemsBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickItemId_>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {OmitListId_} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    createList(body: OmitListId_, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickListId_>>;
    /**
     *
     * @summary Deletes a list of items
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    deleteList(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Retrieves the categories for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CategoryResponse>>>;
    /**
     *
     * @summary Purchases an item on a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to purchase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    purchaseItem(xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes a category from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} categoryId the ID of the category to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    removeCategory(xAuthUser: string, listId: string, categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes an item from a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    removeItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Removes the purchase of an item from purchase history
     * @param {string} body the date of purchase
     * @param {string} xAuthUser the email address of the user
     * @param {string} xAuthLocation the ID of the location
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to remove
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    unpurchaseItem(body: string, xAuthUser: string, xAuthLocation: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Updates a list
     * @param {OmitListId_} body the updated list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    updateList(body: OmitListId_, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}
