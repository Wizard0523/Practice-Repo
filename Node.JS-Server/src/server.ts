//const express = require('express')
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log('hello from express')
    res.status(200)
    res.sendFile("Pages/BottlePlantForest.html")
})

export default app