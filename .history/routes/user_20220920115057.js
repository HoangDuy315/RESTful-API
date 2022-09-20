import express from "express";

const router = express.Router();

const users = [
    {
        firstname: "Hoang",
        lastname: "Duy",
        age: 21
    }
]

router.get('/', (req, res) => {
    console.log(users)
    res.send('hello');
});

export default router;