/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // remove
  collection.schema.removeField("f8nrwgmz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hds1n1wq",
    "name": "courses",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8a0tgc6nopp67rs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8nrwgmz",
    "name": "attends",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 24,
      "values": [
        "Mar23-N1",
        "Mar23-N2",
        "Mar23-N3",
        "Mar23-N4",
        "Mar23-N5",
        "Mar23-N6",
        "Ago23-N1",
        "Ago23-N2",
        "Ago23-N3",
        "Ago23-N4",
        "Ago23-N5",
        "Ago23-N6",
        "Mar22-N1",
        "Mar22-N2",
        "Mar22-N3",
        "Mar22-N4",
        "Mar22-N5",
        "Mar22-N6",
        "Ago22-N1",
        "Ago22-N2",
        "Ago22-N3",
        "Ago22-N4",
        "Ago22-N5",
        "Ago22-N6",
        "Mar21-N1",
        "Mar21-N2",
        "Mar21-N3",
        "Mar21-N4",
        "Mar21-N5",
        "Mar21-N6",
        "Ago21-N1",
        "Ago21-N2",
        "Ago21-N3",
        "Ago21-N4",
        "Ago21-N5",
        "Ago21-N6",
        "Mar20-N1",
        "Mar20-N2",
        "Mar20-N3",
        "Mar20-N4",
        "Mar20-N5",
        "Mar20-N6",
        "Ago20-N1",
        "Ago20-N2",
        "Ago20-N3",
        "Ago20-N4",
        "Ago20-N5",
        "Ago20-N6",
        "Mar19-N1",
        "Mar19-N2",
        "Mar19-N3",
        "Mar19-N4",
        "Mar19-N5",
        "Mar19-N6",
        "Ago19-N1",
        "Ago19-N2",
        "Ago19-N3",
        "Ago19-N4",
        "Ago19-N5",
        "Ago19-N6"
      ]
    }
  }))

  // remove
  collection.schema.removeField("hds1n1wq")

  return dao.saveCollection(collection)
})
