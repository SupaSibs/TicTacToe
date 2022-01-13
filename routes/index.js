var express = require('express');
var router = express.Router();
let index = require("../controllers/index")
/* GET home page. */
router.get('/', index.render);

router.get('/api', (req, res, next) => res.json({message: "test"}));
module.exports = router;
