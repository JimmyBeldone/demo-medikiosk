import Dexie from "dexie"

const db = new Dexie("myData")
db.version(1).stores({ myData: "++id,title" })

export default db
