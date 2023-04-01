import express from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'

import endpointsRoutes from './endpoints/endpoints.routes'

const swaggerDocument = require('./swagger.json')
dotenv.config({ path: __dirname + '/config.env' })

export const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API v1' })
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api', endpointsRoutes)
