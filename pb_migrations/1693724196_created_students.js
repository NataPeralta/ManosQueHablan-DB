/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kh25thfbdoqy3rz",
    "created": "2023-09-03 06:56:36.788Z",
    "updated": "2023-09-03 06:56:36.788Z",
    "name": "students",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dxgc8doo",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 40,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "f8nrwgmz",
        "name": "attends",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ]
        }
      },
      {
        "system": false,
        "id": "i66fnm0f",
        "name": "attended",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 6,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ]
        }
      },
      {
        "system": false,
        "id": "kclcahpd",
        "name": "document",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz");

  return dao.deleteCollection(collection);
})
