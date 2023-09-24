/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a0tgc6nopp67rs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbb5m85l",
    "name": "level",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a0tgc6nopp67rs")

  // remove
  collection.schema.removeField("dbb5m85l")

  return dao.saveCollection(collection)
})
