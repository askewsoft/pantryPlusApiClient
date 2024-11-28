# pantryPlusApiClient
Client library for interacting with the pantryPlus REST API

## Swagger Codegen
This package was created using swagger-codegen CLI from a peer repo [pantryPlusApiTs](https://github.com/askewsoft/pantryPlusApiTs). The TypeScript/JavaScript client utilizes [axios](https://github.com/axios/axios).

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`.

## Installation
Navigate to the folder of your consuming project and run the following command.

```
npm i git+https://github.com/askewsoft/pantryPlusApiClient -E
```

## Building
To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```
If You get the below error, then manually fixe and rerun the build.

```sh
apis/shoppers-api.ts:438:175 - error TS2314: Generic type 'Array<T>' requires 1 type argument(s).

438 async getLists(xAuthUser: string, shopperId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Array>>>> {
```

* I have not yet figured out why codegen botches the response type of `getLists`
* Need to include the import of `List` from models in the `apis/shopper-api.ts` file
* Need to refactor `Promise<AxiosResponse<Array<Array>>>` to be `Promise<AxiosResponse<Array<List>>>`

## Usage Example

```typescript
import {
    ListsApi,
    LocationsApi,
    ShoppersApi,
    GroupsApi,
    CategoriesApi,
    Configuration
} from 'pantryPlusApiClient';

const configuration = new Configuration({
  basePath: process.env.PUBLIC_API_URL,
});

const api = {
    shopper: new ShoppersApi(configuration),
    list: new ListsApi(configuration),
    location: new LocationsApi(configuration),
    group: new GroupsApi(configuration),
    category: new CategoriesApi(configuration),
};

export default api;
```

Then in your consuming project, you can use the api as follows:

```typescript
import api from './path/to/pantryPlusApiClient';

const shopper = await api.shopper.createShopper({
    id: '123',
    email: 'test@test.com',
    nickName: 'test',
});
```
