/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xv5nxgxk",
    "name": "payday",
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
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xv5nxgxk",
    "name": "payday",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "/^(0[1-9]|1[0-2])\\/(0[1-9]|[12]\\d|3[01])\\/\\d{2}$/"
    }
  }))

  return dao.saveCollection(collection)
})
