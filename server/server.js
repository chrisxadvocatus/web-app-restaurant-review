import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/UserRoutes.js'
import reviewRoutes from './routes/ReviewRoutes.js'
import sessionRoutes from './routes/SessionRoutes.js'
import NotesRoutes from './routes/NotesRoutes.js'
import bcrypt from 'bcrypt'
// import cookieController from './controllers/cookieController.js'
import verifyJwt from './middlewares/verifyJwt.js'
//import cors from 'cors'
//import corsOptions from './config/corsOptions.js'

// import path from 'path'

dotenv.config()

// Instantiate Express App
const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(cors(corsOptions))

// Routes
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/session', sessionRoutes)
app.use('/api/note',verifyJwt, NotesRoutes)

//test
// app.post(
//   '/test',
//   (req, res) => {
//     return res.json('test')
//   }
// )


// test^^^




// Not Found
app.use('*', (req, res) => {
  res.status(404).send('Not Found - 404 handler in server.js')
})

app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = { error: 'An error occur' }
  const errObj = Object.assign({}, defaultErr, err)
  console.log('errObj in global handler', errObj)
  res.status(500).json(errObj)
})


mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to Mongo Database')
    })
  .catch((e) => {
    console.log('Unable to connect to database')
    console.error('Mongo ERROR:', e)
  })


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


