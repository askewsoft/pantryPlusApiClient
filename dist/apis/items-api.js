"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsApi = exports.ItemsApiFactory = exports.ItemsApiFp = exports.ItemsApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * ItemsApi - axios parameter creator
 * @export
 */
exports.ItemsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary Creates an item
         * @param {PickItemIdOrNameOrUpc_} body an object containing the ID, name, and UPC of the item
         * @param {string} xAuthUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: function (body, xAuthUser, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling createItem.');
                    }
                    // verify required parameter 'xAuthUser' is not null or undefined
                    if (xAuthUser === null || xAuthUser === undefined) {
                        throw new base_1.RequiredError('xAuthUser', 'Required parameter xAuthUser was null or undefined when calling createItem.');
                    }
                    localVarPath = "/items";
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    if (xAuthUser !== undefined && xAuthUser !== null) {
                        localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
                    }
                    localVarHeaderParameter['Content-Type'] = 'application/json';
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         *
         * @summary Updates an item
         * @param {PickItemNameOrUpc_} body an object containing the new name and UPC of the item
         * @param {string} xAuthUser
         * @param {string} itemId the ID of the item
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: function (body, xAuthUser, itemId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling updateItem.');
                    }
                    // verify required parameter 'xAuthUser' is not null or undefined
                    if (xAuthUser === null || xAuthUser === undefined) {
                        throw new base_1.RequiredError('xAuthUser', 'Required parameter xAuthUser was null or undefined when calling updateItem.');
                    }
                    // verify required parameter 'itemId' is not null or undefined
                    if (itemId === null || itemId === undefined) {
                        throw new base_1.RequiredError('itemId', 'Required parameter itemId was null or undefined when calling updateItem.');
                    }
                    localVarPath = "/items/{itemId}"
                        .replace("{" + "itemId" + "}", encodeURIComponent(String(itemId)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    if (xAuthUser !== undefined && xAuthUser !== null) {
                        localVarHeaderParameter['X-Auth-User'] = String(xAuthUser);
                    }
                    localVarHeaderParameter['Content-Type'] = 'application/json';
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
/**
 * ItemsApi - functional programming interface
 * @export
 */
exports.ItemsApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Creates an item
         * @param {PickItemIdOrNameOrUpc_} body an object containing the ID, name, and UPC of the item
         * @param {string} xAuthUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: function (body, xAuthUser, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.ItemsApiAxiosParamCreator(configuration).createItem(body, xAuthUser, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates an item
         * @param {PickItemNameOrUpc_} body an object containing the new name and UPC of the item
         * @param {string} xAuthUser
         * @param {string} itemId the ID of the item
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: function (body, xAuthUser, itemId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.ItemsApiAxiosParamCreator(configuration).updateItem(body, xAuthUser, itemId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
/**
 * ItemsApi - factory interface
 * @export
 */
exports.ItemsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @summary Creates an item
         * @param {PickItemIdOrNameOrUpc_} body an object containing the ID, name, and UPC of the item
         * @param {string} xAuthUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: function (body, xAuthUser, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, exports.ItemsApiFp(configuration).createItem(body, xAuthUser, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Updates an item
         * @param {PickItemNameOrUpc_} body an object containing the new name and UPC of the item
         * @param {string} xAuthUser
         * @param {string} itemId the ID of the item
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: function (body, xAuthUser, itemId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, exports.ItemsApiFp(configuration).updateItem(body, xAuthUser, itemId, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
var ItemsApi = /** @class */ (function (_super) {
    __extends(ItemsApi, _super);
    function ItemsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Creates an item
     * @param {PickItemIdOrNameOrUpc_} body an object containing the ID, name, and UPC of the item
     * @param {string} xAuthUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    ItemsApi.prototype.createItem = function (body, xAuthUser, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, exports.ItemsApiFp(this.configuration).createItem(body, xAuthUser, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Updates an item
     * @param {PickItemNameOrUpc_} body an object containing the new name and UPC of the item
     * @param {string} xAuthUser
     * @param {string} itemId the ID of the item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    ItemsApi.prototype.updateItem = function (body, xAuthUser, itemId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, exports.ItemsApiFp(this.configuration).updateItem(body, xAuthUser, itemId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return ItemsApi;
}(base_1.BaseAPI));
exports.ItemsApi = ItemsApi;
