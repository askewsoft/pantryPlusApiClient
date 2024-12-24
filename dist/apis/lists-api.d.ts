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
import { Category } from '../models';
import { Item } from '../models';
import { List } from '../models';
import { ListsListIdBody } from '../models';
import { PickListId_ } from '../models';
/**
 * ListsApi - axios parameter creator
 * @export
 */
export declare const ListsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Associates an item with a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to associate with the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem: (xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Adds a category to a list
     * @param {Category} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCategory: (body: Category, xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Creates a new list of items
     * @param {List} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList: (body: List, xAuthUser: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
     * @summary Retrieves the uncategorized items for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems: (xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
     * @param {ListsListIdBody} body
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList: (body: ListsListIdBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ListsApi - functional programming interface
 * @export
 */
export declare const ListsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Associates an item with a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to associate with the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Adds a category to a list
     * @param {Category} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCategory(body: Category, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {List} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList(body: List, xAuthUser: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickListId_>>>;
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
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Category>>>>;
    /**
     *
     * @summary Retrieves the uncategorized items for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Item>>>>;
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
     * @param {ListsListIdBody} body
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList(body: ListsListIdBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * ListsApi - factory interface
 * @export
 */
export declare const ListsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Associates an item with a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to associate with the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Adds a category to a list
     * @param {Category} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCategory(body: Category, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {List} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createList(body: List, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickListId_>>;
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
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Category>>>;
    /**
     *
     * @summary Retrieves the uncategorized items for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Item>>>;
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
     * @param {ListsListIdBody} body
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateList(body: ListsListIdBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
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
     * @summary Associates an item with a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {string} itemId the ID of the item to associate with the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    addItem(xAuthUser: string, listId: string, itemId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Adds a category to a list
     * @param {Category} body the category to add
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    createCategory(body: Category, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Creates a new list of items
     * @param {List} body the list to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    createList(body: List, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickListId_>>;
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
    getCategories(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Category>>>;
    /**
     *
     * @summary Retrieves the uncategorized items for a list
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    getItems(xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Item>>>;
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
     * @param {ListsListIdBody} body
     * @param {string} xAuthUser the email address of the user
     * @param {string} listId the ID of the list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    updateList(body: ListsListIdBody, xAuthUser: string, listId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}
