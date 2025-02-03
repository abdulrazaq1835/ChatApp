import express, { Router } from "express"

const router = express.Router()

// resp.send("my server is running") 


router.get("/signup",(req,res)=>{
    res.send("signup")
})
router.post("/login",(req,res)=>{
    res.send("Login")
})

router.post("/logout",(req,res)=>{
    res.send("logout")
})

export default  router;