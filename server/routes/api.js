var express = require('express');
var router = express.Router();

require('./userRoutes')(router);

router.get('/', (req, res, next) => {
    res.send('sample response');
});

module.exports = router;