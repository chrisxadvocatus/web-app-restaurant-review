import express from 'express'
import { start, update, clearUp } from '../controllers/SessionControllers.js'
import cookie from '../middlewares/cookie.js'

// Initialize router
const router = express.Router()

router.get('/', cookie.setCookie, start)

router.post('/update', update)

router.delete('/clearUp', clearUp)

export default router
