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

## Usage
There are 3 ways to use this library. For each domain object, the module exports these options:
* Functional Programming Interface
* Object Oriented Interface
* Factory Interface

### Functional Programming Interface - Example

The example below shows the functional programming interface.

```typescript
import {
    ListsApiFp,
    LocationsApiFp,
    ShoppersApiFp,
    GroupsApiFp,
    CategoriesApiFp,
    Configuration
} from 'pantryPlusApiClient';

const configuration = new Configuration({
  basePath: process.env.PUBLIC_API_URL,
});

const api = {
    shopper: ShoppersApiFp(configuration),
    list: ListsApiFp(configuration),
    location: LocationsApiFp(configuration),
    group: GroupsApiFp(configuration),
    category: CategoriesApiFp(configuration),
};

export default api;
```

Then in your consuming project, you can use the api as follows:

```typescript
import api from './path/to/pantryPlusApiClient';

const shopper = await api.shopper.createShopper({
    id: '123',
    email: 'test@test.com',
    nickname: 'test',
});
```