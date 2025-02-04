import express, { Router } from "express"
import { login, loguot, signup } from "../controllers/auth.controllers.js"

const router = express.Router()

// resp.send("my server is running") 


router.get("/signup",signup)

router.post("/login",login)

router.post("/logout",loguot)

export default  router;