const express = require('express')
const router = express.Router();

//Router

router.get('/' , (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "simple blog created with nodejs"
    }
    res.render('index', { locals })
})
router.get('/about' , (req, res) => {
    res.render('about')
})
router.get('/contact' , (req, res) => {
    res.render('contact')
})

module.exports = router;
