'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
  var util = require('util');
  const jsf = require('json-schema-faker');
  const chance = require('chance')
  const faker = require('faker')
  jsf.extend('chance', () => new chance.Chance());
  jsf.extend('faker', () => faker);
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
  module.exports = {
    results: getResults
  };
  /*
    Functions in a127 controllers used for operations should take two parameters:
    Param 1: a handle to the request object
    Param 2: a handle to the response object
   */
    var schema = {
        "type": "array",
        "minItems": 3,
        "maxItems": 9,
        "items": {
          "type": "object",
          "required": [
            "id", "team1", "team2", "user", "tournament", "comment" ,"players1", "players2"  
          ],
          "properties": {
            "id": {
              "type": "string",
              "faker": "random.number"
            },
            "team1": {
              "type": "string",
              "faker": "company.companyName"
            },
            "team2": {
              "type": "string",
              "faker": "company.companyName"
            },
            "user": {
              "type": "string",
              "faker": "name.firstName"
            },
            "tournament": {
              "type": "string",
              "faker": "company.companyName"
            },
            "comment": {
               "type": "string",
               "faker": "lorem.sentence"
            },
            "players1": {
              "type": "array",
              "minItems": 5,
              "maxItems": 5,
              "items": {
                "type": "object",
                "required": [
                  "id", "name", "score"
                ],
                "properties": {
                  "id": {
                    "type": "string",
                    "faker": "random.number"
                  },
                  "name": {
                    "type": "string",
                    "faker": "name.firstName"
                  },
                  "score": {
                    "type": "string",
                    "faker": "random.number"
                  }
                },
              },
            },
            "players2": {
              "type": "array",
              "minItems": 5,
              "maxItems": 5,
              "items": {
                "type": "object",
                "required": [
                  "id", "name", "score"
                ],
                "properties": {
                  "id": {
                    "type": "string",
                    "faker": "random.number"
                  },
                  "name": {
                    "type": "string",
                    "faker": "name.firstName"
                  },
                  "score": {
                    "type": "string",
                    "faker": "random.number"
                  }
                },
              },
            }
          }
        }
      }


  function getResults(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var date = req.swagger.params.date.value || '2020-04-20';
  
    // this sends back a JSON response which is a single string
    jsf.resolve(schema).then(sample => res.json(sample));
  }