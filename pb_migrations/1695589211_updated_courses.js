/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a0tgc6nopp67rs")

  // remove
  collection.schema.removeField("udutljjs")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a0tgc6nopp67rs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udutljjs",
    "name": "students",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kh25thfbdoqy3rz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
