const concert = require('../models/concert');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

module.exports = {
    getBanner : async(req, res) => {
        const data = await concert.getBanner();
        return await res.status(200).send(util.success(200, "배너 가져오기 성공", data));
    },

    readAllConcert : async(req, res) => {
        const data = await concert.getAllConcert();
        return await res.status(200).send(util.success(200, "모든 콘서트 정보 가져오기 성공", data));
    }
}