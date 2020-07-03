import React, { useEffect, useState } from "react"
import db from "../db"
import Image from "./image"

const List = () => {
  const [list, setList] = useState([])

  const getList = async () => {
    await db.myData
      .limit(100)
      .toArray()
      .then(myData => {
        setList(myData)
      })
  }

  useEffect(() => {
    getList()
  })

  const getUrlFromBlob = blob => {
    const objectURL = URL.createObjectURL(blob)
    const imageSrc = objectURL
    return imageSrc
  }

  return (
    <div className="list">
      List :
      {list.map(item => (
        <div className="list-item" key={`list-item-id-${item.id}`}>
          <div>{item.id}</div>
          title: {item.title}
          {/* <img src={getUrlFromBlob(item.url)} alt="" /> */}
          <img src={item.url} alt="" />
        </div>
      ))}
    </div>
  )
}

export default List
