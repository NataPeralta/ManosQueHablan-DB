/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g22ialtn",
    "name": "invoice",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8n5et2n",
    "name": "billing",
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

  // remove
  collection.schema.removeField("g22ialtn")

  // update
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
})
