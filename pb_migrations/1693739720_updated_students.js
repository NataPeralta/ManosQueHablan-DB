/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9byojd4",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 15,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // remove
  collection.schema.removeField("m9byojd4")

  // remove
  collection.schema.removeField("rvenbai3")

  return dao.saveCollection(collection)
})
