import Authcontroller from '../conrollerlayer/Authcontroller'
import { Router } from 'express'
const router=Router()
const authcontroller=new Authcontroller()

router.post('/signup',(req,res,next)=>authcontroller.signup(req,res,next))
router.post('/login',(req,res,next)=>authcontroller.login(req,res,next))

export default router