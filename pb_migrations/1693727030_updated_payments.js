/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyxie5fh",
    "name": "invoiced",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyxie5fh",
    "name": "invoiced",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
