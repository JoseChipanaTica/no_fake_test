import { app } from './app'
import { runDB } from '../db/db'

app.listen(app.get('port'), () => {
  console.log('Server on Port: ' + process.env.PORT)
})


runDB().then().catch()
