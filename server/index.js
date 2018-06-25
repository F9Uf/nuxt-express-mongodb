
// const express = require('express')
// const bodyparser = require('body-parser')
// const { Nuxt, Builder } = require('nuxt')
// const app = express()
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
// // const mongoose = require('mongoose')
// const users = require('./routes/user')
// const db = 'mongodb://localhost:27017'

// app.use(bodyparser.json())

// app.set('port', port)

// // Import and Set Nuxt.js options
// let config = require('../nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')

// async function start() {
//   // Init Nuxt.js
//   const nuxt = new Nuxt(config)

//   // Build only in dev mode
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   // Give nuxt middleware to express
  
//   app.use(nuxt.render)

//   app.use('/api', users)

//   // mongoose.connect(db, function(err, res) {
//   //   if(err)
//   //     console.log('Failed to connected to ' + db)
//   //   else
//   //     console.log('Connected to ' + db)      
      
//   // })

//   // Listen the server
//   app.listen(port, host)
//   console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
// }
// start()

const { Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const apiRoutes = require('./routes/api-routes')
app.use('/api', apiRoutes)

let config = require('../nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(port, host)
console.log('Server is listening on ' + host + ':' + port)
