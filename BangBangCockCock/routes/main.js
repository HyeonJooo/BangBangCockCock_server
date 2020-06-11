var express = require('express');
var router = express.Router();
const concertController = require('../controller/concert');
const likeController = require('../controller/like');

router.get('/banner', concertController.getBanner);
router.get('/like/:concertIdx', likeController.getLike);
router.put('/like', likeController.toggleLike);
router.get('/', concertController.readAllConcert);
router.get('/mostlike', concertController.readMostLike);
router.get('/todayconcert', concertController.readTodayConcert);
router.get('/:concertIdx', concertController.readOneConcert);


module.exports = router;