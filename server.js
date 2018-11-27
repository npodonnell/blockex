const PORT = 9997
const INDEXFILE = 'index.html'
const ROOTDIR = 'webroot'

const path = require('path')
const express = require('express')
const send = require('send')
const parseUrl = require('parseurl')

const server = express()

process.chdir(ROOTDIR)

const indexFilename = path.join(process.cwd(), INDEXFILE)

// static files live under /static
server.get(/^\/static\//, (req, res) => {
	const filename = path.join(process.cwd(), parseUrl(req).pathname)
	console.log(`Serving ${filename}`)
	send(req, filename).pipe(res)
})

// everything else
server.get(/.*/, (req, res) => {
	console.log(`Serving ${indexFilename}`)
	send(req, indexFilename).pipe(res)
})

server.listen(PORT)
console.log(`Server is running on port ${PORT}`)
