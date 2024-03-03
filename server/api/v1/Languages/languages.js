// const express = require('express')
// const language = require("./language.json")

// const router = express.Router();

// router.get('/',(req, res)=>{
//     return res.json(language)
// });

// export default router;


const express = require('express');
const Languages = require('../../../../models/languageModel')
const language = require('../../../../language.json')

const router = express.Router();

router.get('/api/v1/languages',async(req, res)=>{
    try {
        const languages = await Languages.find({}, {_id: 0})
        res.status(200).json(languages)
    } catch (error) {
        res.send(500).json({message:error.message})
    }
});

module.exports = router;


