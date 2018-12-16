const router = require('express').Router()
const axios = require('axios');
const confing = require('../config/config');

const apiKey = confing.markCapKey
const marktUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD&start=1&limit=4'
const marktCapApi =  axios.create({
    baseURL: marktUrl,
    headers:{'X-CMC_PRO_API_KEY':apiKey}
})

router.get('/', async  (req,res, next)=>{
    let resposn
    try {
        resposn  = await marktCapApi.get(marktUrl)
        res.json({
            data: resposn.data.data
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router