const pool = require('../modules/pool');
const table = "concert";

const concerts = {
    getBanner : async() =>{
        const query = `SELECT concertIdx, concert_title, concert_date, concert_image, concert_tag FROM ${table} WHERE concertIdx=1`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getBanner err' + err);
            throw err;
        }
    },
    isConcertIdx: async(concertIdx) =>{
        const query = `SELECT concertIdx FROM ${table} WHERE concertIdx = "${concertIdx}"`;
        try{
            const result = await pool.queryParam(query);
            if(result.length >0 ){
                return true;
            }
            else{
                return false;
            }
        }catch(err){
            console.log('isConcertIdx err' + err);
            throw err;
        }
    },

    getAllConcert: async() =>{
        const query = `SELECT concertIdx, concert_title, concert_date, concert_image, concert_tag FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getAllConcert err'+ err);
        }throw err;
    },

    getMostLike: async() =>{
        const query = `SELECT concertIdx, concert_title, concert_date, concert_image, concert_category 
                        FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getMostLike err' + err);
        }throw err;
    },

    getTodayConcert: async(concert_date) =>{
        const query = `SELECT concertIdx, concert_title, concert_date, concert_image, concert_tag 
                        FROM ${table} 
                        WHERE concert_date = "2020-06-11"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getTodayConcert err' + err);
        }throw err;
    },

    getOneConcert: async(concertIdx) =>{
        const query = `SELECT concertIdx, concert_title, concert_image, concert_link, concert_content,
        concert_startTime, concert_endTime, concert_date, concert_gif, concert_category, concert_tag
                        FROM ${table} WHERE concertIdx=${concertIdx}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getOneConcert err' + err);
        }throw err;
    },

    getCategory: async(category) =>{
        const query = `SELECT concertIdx, concert_title, concert_date, concert_image, concert_tag
                        FROM ${table} WHERE concert_category = "${category}"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getCategory err' + err);
        }throw err;
    }



//     todaycon: async(concert_date) =>{
//         const query = `select concert_title, concert_date, concert_image, concert_category 
//                         from ${table}`;
//         try{
//             const result = await pool.queryParam(query);
//             console.log(result);
//             return result;
//         }catch(err){
//             console.log(err);
//             throw err;
//         }                    
//     }
}

module.exports = concerts;