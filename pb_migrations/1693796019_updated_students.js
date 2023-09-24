/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3nq4xna",
    "name": "direction",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 50,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxxmbxan",
    "name": "instagram",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvenbai3",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // remove
  collection.schema.removeField("f3nq4xna")

  // remove
  collection.schema.removeField("pxxmbxan")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvenbai3",
    "name": "field",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
