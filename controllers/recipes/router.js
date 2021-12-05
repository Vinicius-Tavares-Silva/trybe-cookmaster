const express = require('express');
const post = require('./post');
const list = require('./list');
const get = require('./get');
const remove = require('./remove');
const put = require('./put');
const auth = require('../../middlewares/auth');
const upload = require('./upload');
const uploadMiddleware = require('../../middlewares/upload');

const router = express.Router({ mergeParams: true });

router.post('/', auth, post);
router.get('/', list);
router.get('/:id', get);
router.delete('/:id', auth, remove);
router.put('/:id', auth, put);
router.put('/:id/image', auth, uploadMiddleware.single('image'), upload);

module.exports = router;