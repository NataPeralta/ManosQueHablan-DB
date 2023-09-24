/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3nq4xna",
    "name": "direction",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3nq4xna",
    "name": "direction",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
