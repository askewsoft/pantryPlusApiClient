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
import { Location } from '../models';
import { PickLocationId_ } from '../models';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a new location
         * @param {Location} body the location to create
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLocation: async (body: Location, xAuthUser: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createLocation.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling createLocation.');
            }
            const localVarPath = `/locations`;
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
         * @summary Updates an existing location name
         * @param {string} body the new name of the location
         * @param {string} xAuthUser the email address of the user
         * @param {string} locationId the ID of the location to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocation: async (body: string, xAuthUser: string, locationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateLocation.');
            }
            // verify required parameter 'xAuthUser' is not null or undefined
            if (xAuthUser === null || xAuthUser === undefined) {
                throw new RequiredError('xAuthUser','Required parameter xAuthUser was null or undefined when calling updateLocation.');
            }
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling updateLocation.');
            }
            const localVarPath = `/locations/{locationId}`
                .replace(`{${"locationId"}}`, encodeURIComponent(String(locationId)));
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
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a new location
         * @param {Location} body the location to create
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLocation(body: Location, xAuthUser: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PickLocationId_>>> {
            const localVarAxiosArgs = await LocationsApiAxiosParamCreator(configuration).createLocation(body, xAuthUser, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates an existing location name
         * @param {string} body the new name of the location
         * @param {string} xAuthUser the email address of the user
         * @param {string} locationId the ID of the location to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocation(body: string, xAuthUser: string, locationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await LocationsApiAxiosParamCreator(configuration).updateLocation(body, xAuthUser, locationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates a new location
         * @param {Location} body the location to create
         * @param {string} xAuthUser the email address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLocation(body: Location, xAuthUser: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PickLocationId_>> {
            return LocationsApiFp(configuration).createLocation(body, xAuthUser, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an existing location name
         * @param {string} body the new name of the location
         * @param {string} xAuthUser the email address of the user
         * @param {string} locationId the ID of the location to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocation(body: string, xAuthUser: string, locationId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return LocationsApiFp(configuration).updateLocation(body, xAuthUser, locationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocationsApi - object-oriented interface
 * @export
 * @class LocationsApi
 * @extends {BaseAPI}
 */
export class LocationsApi extends BaseAPI {
    /**
     * 
     * @summary Creates a new location
     * @param {Location} body the location to create
     * @param {string} xAuthUser the email address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public async createLocation(body: Location, xAuthUser: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<PickLocationId_>> {
        return LocationsApiFp(this.configuration).createLocation(body, xAuthUser, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Updates an existing location name
     * @param {string} body the new name of the location
     * @param {string} xAuthUser the email address of the user
     * @param {string} locationId the ID of the location to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public async updateLocation(body: string, xAuthUser: string, locationId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return LocationsApiFp(this.configuration).updateLocation(body, xAuthUser, locationId, options).then((request) => request(this.axios, this.basePath));
    }
}
