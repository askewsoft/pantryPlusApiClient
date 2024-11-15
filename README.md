# pantryPlusApiClient
Client library for interacting with the REST API

## Swagger Codegen
This package was created using swagger-codegen CLI from a peer repo [pantryPlusApiTs](https://github.com/askewsoft/pantryPlusApiTs). The TypeScript/JavaScript client utilizes [axios](https://github.com/axios/axios).

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building
To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```
### Consuming
Navigate to the folder of your consuming project and run the following command.


```
npm i git+https://github.com/askewsoft/pantryPlusApiClient -E
```
