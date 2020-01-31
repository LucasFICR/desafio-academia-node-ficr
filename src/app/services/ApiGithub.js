const axios = require("axios")

axios.get("hppts://api.github.com/users/lucasficr")
.then( (gitResposta) => {
    console.log(gitResposta.data)}
    )
    .catch((error) => {
    if(error){
        consolog.log("Error 404")
    }
})