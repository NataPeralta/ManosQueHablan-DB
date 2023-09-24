/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9byojd4",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 20,
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
    "id": "m9byojd4",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 15,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
