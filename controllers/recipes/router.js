const express = require('express');
const post = require('./post');
const list = require('./list');
const get = require('./get');
const remove = require('./remove');
const put = require('./put');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, post);
router.get('/', list);
router.get('/:id', get);
router.delete('/:id', remove);
router.put('/:id', auth, put);

module.exports = router;