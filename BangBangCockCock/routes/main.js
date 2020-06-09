var express = require('express');
var router = express.Router();
const concertController = require('../controller/concert');
const likeController = require('../controller/like');

router.get('/banner', concertController.getBanner);
router.get('/like/:concertIdx', likeController.getLike);
router.put('/like', likeController.toggleLike);
router.get('/', concertController.readAllConcert);
// router.get('/todayConcert', async (req, res) =>{
//   const {concert_date} = req.body;
//   let today = moment(new Date());
//   const result = await concert.todaycon(concert_date);
//   return await res.status(200).send(util.success(200, "오늘열리는 콘서트", {todaycon:result}));
// });

module.exports = router;