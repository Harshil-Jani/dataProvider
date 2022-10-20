## React-DataProvider

Standalone use of [Data Provider](https://marmelab.com/react-admin/DataProviders.html) in React Based applications through React Hooks. 

A brief on what dataProviders are and what they help with (taken from original site). 

> Thanks to this adapter system, react can communicate with any API, whether it uses REST, GraphQL, RPC, or even SOAP, regardless of the dialect it uses. Check out the [list of supported backends](https://marmelab.com/react-admin/DataProviderList.html) to pick an open-source package for your API.

> You can also [Write your own Data Provider](https://marmelab.com/react-admin/DataProviderWriting.html) so that it fits the particularities of your backend(s). Data Providers can use `fetch`, `axios`, `apollo-client`, or any other library to communicate with APIs. The Data Provider is also the ideal place to add custom HTTP headers, authentication, etc.

> A Data Provider must have the following methods:

```jsx
const dataProvider = {
    getList:    (resource, params) => Promise, // get a list of records based on sort, filter, and pagination
    getOne:     (resource, params) => Promise, // get a single record by id
    getMany:    (resource, params) => Promise, // get a list of records based on an array of ids
    getManyReference: (resource, params) => Promise, // get the records referenced to another record, e.g. comments for a post
    create:     (resource, params) => Promise, // create a record
    update:     (resource, params) => Promise, // update a record based on a patch
    updateMany: (resource, params) => Promise, // update a list of records based on an array of ids and a common patch
    delete:     (resource, params) => Promise, // delete a record by id
    deleteMany: (resource, params) => Promise, // delete a list of records based on an array of ids
}
```

Given it's generic nature, it's easy to integrate them in any application, not just react-admin. This project does just that.

## Setup
This is just a playground with [ra-data-fakerest](https://www.npmjs.com/package/ra-data-fakerest) as a dataProvider with a bare bones react setup.

```sh
npm i
npm run start
```
