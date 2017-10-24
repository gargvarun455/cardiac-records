var express = require('express');
var router = express.Router();

require('./userRoutes')(router);

router.get('/', (req, res, next) => {
    res.send('sample respopnse');
});

module.exports = router;