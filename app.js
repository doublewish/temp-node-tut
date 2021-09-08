#!/usr/bin/env node
const util = require('util')
const timerPromise = util.promisify(setTimeout)



const start = async() => {
  try {
    const res = await timerPromise(1000, "Finally")
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

start()
