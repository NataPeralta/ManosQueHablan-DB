/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // remove
  collection.schema.removeField("wyxie5fh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8n5et2n",
    "name": "invoiced",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyxie5fh",
    "name": "invoiced",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("c8n5et2n")

  return dao.saveCollection(collection)
})
