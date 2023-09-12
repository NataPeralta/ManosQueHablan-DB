/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3eooisnw",
    "name": "person",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
