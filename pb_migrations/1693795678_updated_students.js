/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8nrwgmz",
    "name": "attends",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
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
        "Ago23-N6"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i66fnm0f",
    "name": "attended",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
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
        "Ago23-N6"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kh25thfbdoqy3rz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8nrwgmz",
    "name": "attends",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i66fnm0f",
    "name": "attended",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
