/**
 * @flow
 * @relayHash 36967b3efc70c0d09ac723b44d0faf08
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ManagerPageQueryVariables = {||};
export type ManagerPageQueryResponse = {|
  +categoriesList: ?$ReadOnlyArray<?{|
    +label: ?string
  |}>
|};
export type ManagerPageQuery = {|
  variables: ManagerPageQueryVariables,
  response: ManagerPageQueryResponse,
|};
*/


/*
query ManagerPageQuery {
  categoriesList {
    label
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ManagerPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ManagerPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ManagerPageQuery",
    "id": null,
    "text": "query ManagerPageQuery {\n  categoriesList {\n    label\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3344615f505a4dbc6b63b8487fde275a';

module.exports = node;
