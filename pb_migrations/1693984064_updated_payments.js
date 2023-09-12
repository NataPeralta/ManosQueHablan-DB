/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // remove
  collection.schema.removeField("zlvng0xg")

  // add
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
      "pattern": "^(0[1-9]|[12][0-9]|3[01])[- /.] (0[1-9]|1[012])[- /.] (19|20)\\d\\d$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zlvng0xg",
    "name": "payday",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("xv5nxgxk")

  return dao.saveCollection(collection)
})
