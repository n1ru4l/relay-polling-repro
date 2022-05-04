/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +test: ?boolean
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  test
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "test",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "838cbffc1a599a9f8e311037e8728fc4",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  test\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eeb05d3a614859fe2803bebeedb1995d';

module.exports = node;
