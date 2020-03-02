/**
 * @flow
 * @relayHash 1a08ddf2c958d4e86844fd1a53ec049b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Create33MutationVariables = {|
  title: string
|};
export type Create33MutationResponse = {|
  +createCourse: ?{|
    +course: ?{|
      +title: ?string
    |}
  |}
|};
export type Create33Mutation = {|
  variables: Create33MutationVariables,
  response: Create33MutationResponse,
|};
*/


/*
mutation Create33Mutation(
  $title: String!
) {
  createCourse(courseData: {title: $title}) {
    course {
      title
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "courseData",
    "fields": [
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Create33Mutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCourseMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "course",
            "storageKey": null,
            "args": null,
            "concreteType": "CourseType",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Create33Mutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCourseMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "course",
            "storageKey": null,
            "args": null,
            "concreteType": "CourseType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "Create33Mutation",
    "id": null,
    "text": "mutation Create33Mutation(\n  $title: String!\n) {\n  createCourse(courseData: {title: $title}) {\n    course {\n      title\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '840791e3a40ac86147088464f11ec41f';

module.exports = node;
