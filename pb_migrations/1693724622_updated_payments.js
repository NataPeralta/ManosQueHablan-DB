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
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Bco Facu",
        "Bco Sonia",
        "MP Facu",
        "MP Sonia",
        "Dani"
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
      "maxSelect": 2,
      "values": [
        "Bco Facu",
        "Bco Sonia",
        "MP Facu",
        "MP Sonia",
        "Dani"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
