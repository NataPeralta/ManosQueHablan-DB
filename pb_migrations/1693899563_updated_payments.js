/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b45mk3wkxnyxz7e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dx0oimbm",
    "name": "account",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Bco Facu",
        "Bco Sonia",
        "MP Facu",
        "MP Sonia",
        "MP Instituto",
        "Dani"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfa1cvh5",
    "name": "concept",
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
    "id": "ctoaziqc",
    "name": "modality",
    "type": "select",
    "required": false,
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
    "id": "dx0oimbm",
    "name": "account",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Bco Facu",
        "Bco Sonia",
        "MP Facu",
        "MP Sonia",
        "MP Instituto",
        "Dani"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfa1cvh5",
    "name": "concept",
    "type": "text",
    "required": true,
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
})
