import React, { useState, useEffect } from "react"
import Dexie from "dexie"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Form from "../components/Form"
import db from "../db"
import List from "../components/List"

const IndexPage = () => {
  // Download and store an image
  async function downloadAndStoreImage(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    // console.log("downloadAndStoreImage -> res", res)
    const blob = await res.blob()
    // console.log("downloadAndStoreImage -> blob", blob)
    return blob
  }

  async function store(data) {
    await db.myData
      .bulkAdd(data)
      .then(lastKey => {
        console.log("Done adding 5000 items")
        console.log("Last item id was: " + lastKey) // Will be 5000.
      })
      .catch(Dexie.BulkError, function (e) {
        // Explicitely catching the bulkAdd() operation makes those successful
        // additions commit despite that there were errors.
        console.error(
          "Some items did not succeed. However, " +
            5000 -
            e.failures.length +
            " items was added successfully"
        )
      })
  }

  async function test(data) {
    const res = data.map(async item => ({
      albumId: item.albumId,
      id: item.id,
      // thumbnailUrl: await downloadAndStoreImage(item.thumbnailUrl),
      title: item.title,
      url: await downloadAndStoreImage(item.url),
    }))

    Promise.all(res).then(async completed => {
      console.log("test -> completed", completed)
      await store(completed)
    })
  }

  useEffect(() => {
    const photos = fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(async json => {
        console.log(json)
        // const a = await test(json)
        await store(json)
      })
  }, [])

  // const getResult = async () => {
  //   const res = await db.myData.limit(100).toArray()
  //   setResult(res)
  // }

  // console.log(getResult())

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        {/* <button onClick={() => setOpen(!open)}>{`${
          open ? "Close" : "Open"
        } Form`}</button>

        {open && <Form db={new Dexie("FormDatabase")} />} */}
        <List />
      </div>
    </Layout>
  )
}

export default IndexPage
