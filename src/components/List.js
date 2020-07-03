import React, { useEffect, useState } from "react"
import db from "../db"

const List = () => {
  const [list, setList] = useState([])

  const getList = async () => {
    await db.myData
      .limit(500)
      .toArray()
      .then(myData => {
        setList(myData)
      })
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <div className="list">
      List :
      {list.map(item => (
        <div className="list-item" key={`list-item-id-${item.id}`}>
          <div>{item.id}</div>
          title: {item.title}
        </div>
      ))}
    </div>
  )
}

export default List
