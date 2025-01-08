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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { PickGroupIdOrNameOrOwnerId_ } from '../models';
import { PickGroupNameOrId_ } from '../models';
import { Shopper } from '../models';
/**
 * GroupsApi - axios parameter creator
 * @export
 */
export const GroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds a shopper to a group
         * @param {string} body the ID of the shopper to be added
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addShopperToGroup: async (body: string, xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addShopperToGroup.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling addShopperToGroup.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling addShopperToGroup.');
            }
            const localVarPath = `/groups/{groupId}/shoppers`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new group of shoppers
         * @param {PickGroupNameOrId_} body 
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup: async (body: PickGroupNameOrId_, xAuthUser: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createGroup.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling createGroup.');
            }
            const localVarPath = `/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup: async (xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling deleteGroup.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroup.');
            }
            const localVarPath = `/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup: async (xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling getGroup.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling getGroup.');
            }
            const localVarPath = `/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all shoppers in an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupShoppers: async (xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling getGroupShoppers.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling getGroupShoppers.');
            }
            const localVarPath = `/groups/{groupId}/shoppers`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Invites a shopper to join a group
         * @param {string} body 
         * @param {string} xAuthUser the email address of the user the email address of the shopper to be invited
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inviteShopper: async (body: string, xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling inviteShopper.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling inviteShopper.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling inviteShopper.');
            }
            const localVarPath = `/groups/{groupId}/invite`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an existing group name
         * @param {string} body the new name of the group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroupName: async (body: string, xAuthUser: string, groupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateGroupName.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling updateGroupName.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGroupName.');
            }
            const localVarPath = `/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xAuthUser !== undefined && xAuthUser !== null) {
                localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsApi - functional programming interface
 * @export
 */
export const GroupsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds a shopper to a group
         * @param {string} body the ID of the shopper to be added
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addShopperToGroup(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).addShopperToGroup(body, xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Creates a new group of shoppers
         * @param {PickGroupNameOrId_} body 
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(body: PickGroupNameOrId_, xAuthUser: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).createGroup(body, xAuthUser, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).deleteGroup(xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickGroupIdOrNameOrOwnerId_>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).getGroup(xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets all shoppers in an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupShoppers(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Shopper>>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).getGroupShoppers(xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Invites a shopper to join a group
         * @param {string} body 
         * @param {string} xAuthUser the email address of the user the email address of the shopper to be invited
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteShopper(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).inviteShopper(body, xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates an existing group name
         * @param {string} body the new name of the group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroupName(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await GroupsApiAxiosParamCreator(configuration).updateGroupName(body, xAuthUser, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GroupsApi - factory interface
 * @export
 */
export const GroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Adds a shopper to a group
         * @param {string} body the ID of the shopper to be added
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addShopperToGroup(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return GroupsApiFp(configuration).addShopperToGroup(body, xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a new group of shoppers
         * @param {PickGroupNameOrId_} body 
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(body: PickGroupNameOrId_, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return GroupsApiFp(configuration).createGroup(body, xAuthUser, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return GroupsApiFp(configuration).deleteGroup(xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickGroupIdOrNameOrOwnerId_>> {
            return GroupsApiFp(configuration).getGroup(xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all shoppers in an existing group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupShoppers(xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Shopper>>> {
            return GroupsApiFp(configuration).getGroupShoppers(xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Invites a shopper to join a group
         * @param {string} body 
         * @param {string} xAuthUser the email address of the user the email address of the shopper to be invited
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteShopper(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return GroupsApiFp(configuration).inviteShopper(body, xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an existing group name
         * @param {string} body the new name of the group
         * @param {string} xAuthUser the email address of the user
         * @param {string} groupId the ID of the group to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroupName(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return GroupsApiFp(configuration).updateGroupName(body, xAuthUser, groupId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export class GroupsApi extends BaseAPI {
    /**
     * 
     * @summary Adds a shopper to a group
     * @param {string} body the ID of the shopper to be added
     * @param {string} xAuthUser the email address of the user
     * @param {string} groupId the ID of the group to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async addShopperToGroup(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return GroupsApiFp(this.configuration).addShopperToGroup(body, xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Creates a new group of shoppers
     * @param {PickGroupNameOrId_} body 
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async createGroup(body: PickGroupNameOrId_, xAuthUser: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return GroupsApiFp(this.configuration).createGroup(body, xAuthUser, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Deletes an existing group
     * @param {string} xAuthUser the email address of the user
     * @param {string} groupId the ID of the group to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async deleteGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return GroupsApiFp(this.configuration).deleteGroup(xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Gets an existing group
     * @param {string} xAuthUser the email address of the user
     * @param {string} groupId the ID of the group to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async getGroup(xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<PickGroupIdOrNameOrOwnerId_>> {
        return GroupsApiFp(this.configuration).getGroup(xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Gets all shoppers in an existing group
     * @param {string} xAuthUser the email address of the user
     * @param {string} groupId the ID of the group to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async getGroupShoppers(xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Shopper>>> {
        return GroupsApiFp(this.configuration).getGroupShoppers(xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Invites a shopper to join a group
     * @param {string} body 
     * @param {string} xAuthUser the email address of the user the email address of the shopper to be invited
     * @param {string} groupId the ID of the group to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async inviteShopper(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return GroupsApiFp(this.configuration).inviteShopper(body, xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Updates an existing group name
     * @param {string} body the new name of the group
     * @param {string} xAuthUser the email address of the user
     * @param {string} groupId the ID of the group to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public async updateGroupName(body: string, xAuthUser: string, groupId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return GroupsApiFp(this.configuration).updateGroupName(body, xAuthUser, groupId, options).then((request) => request(this.axios, this.basePath));
    }
}
