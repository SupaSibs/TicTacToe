var express = require('express');
var router = express.Router();
let index = require("../controllers/index")
/* GET home page. */
router.post('/', index.signUp);
module.exports = router;
