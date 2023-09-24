/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctoaziqc",
    "name": "modality",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Asincronico",
        "Sincronico"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctoaziqc",
    "name": "modality",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Asincrono",
        "Sincronico"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
