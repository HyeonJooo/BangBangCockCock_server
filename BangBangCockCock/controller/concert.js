const concert = require('../models/concert');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const moment = require('moment');

module.exports = {
    getBanner : async(req, res) => {
        const data = await concert.getBanner();
        return await res.status(200).send(util.success(200, "배너 가져오기 성공", data));
    },

    readAllConcert : async(req, res) => {
        const data = await concert.getAllConcert();
        return await res.status(200).send(util.success(200, "모든 콘서트 정보 가져오기 성공", data));
    },

    readMostLike : async(req, res) =>{
        const data = await concert.getMostLike();
        return await res.status(200).send(util.success(200, "좋아요순 조회 성공", data));
    },

    readTodayConcert : async(req, res) =>{
        const today = moment().format('YYYY-MM-DD');
        const result = await concert.getTodayConcert(today);
        return await res.status(200).send(util.success(200, "오늘 열리는 콘서트 조회 성공", result));
    }
}