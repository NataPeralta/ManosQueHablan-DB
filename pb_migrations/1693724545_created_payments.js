/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b45mk3wkxnyxz7e",
    "created": "2023-09-03 07:02:25.359Z",
    "updated": "2023-09-03 07:02:25.359Z",
    "name": "payments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dx0oimbm",
        "name": "account",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Bco Facu",
            "Bco Sonia",
            "MP Facu",
            "MP Sonia",
            "Dani"
          ]
        }
      },
      {
        "system": false,
        "id": "zfa1cvh5",
        "name": "concept",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ctoaziqc",
        "name": "modality",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Asincrono",
            "Sincrono"
          ]
        }
      },
      {
        "system": false,
        "id": "wyxie5fh",
        "name": "invoiced",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "apbnasjn",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "3eooisnw",
        "name": "field",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "kh25thfbdoqy3rz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e");

  return dao.deleteCollection(collection);
})
