const axios = require("axios")
require('dotenv').config()

module.exports =  axios.get("https://graph.facebook.com/v5.0/me?fields=email%2Cname%2Cage_range%2Cbirthday%2Cgender%2Cpicture%2Chometown&access_token=process.env.TokenFB")
.then((gitResposta) => {
    console.log(gitResposta.data)}
    ).catch((error) => {
    if(error){
        consolog.log("Error 404")
    }
})
