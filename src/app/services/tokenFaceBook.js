const axios = require("axios")


module.exports =  axios.get("https://graph.facebook.com/v5.0/me?fields=email%2Cname%2Cage_range%2Cbirthday%2Cgender%2Cpicture%2Chometown&access_token=EAAIUD0ZBRWe8BAJUQlwTZCJzEXyFZCd6JQG2lVZCJcfpGTIQj6sdC4b689JSHf8nuR84M4NbmDh3uUx1YYkhyLwHfJVmiFYuzreuZC76jZAFwzONhmoNeMzbFCLKkFlkHvpFkvdHoGEmpyvEhGlhDdIb5ooZCnpwkfZByyMJfQwLNq4VhzAEFRYVtPcc8sb0eawZBW6YcRVypABDFhx9U8eKjU04dMn92UZBUsC4DG5N3Y2ACJmL7ZAOLQyz2ulZBhBEojcZD")
.then((gitResposta) => {
    console.log(gitResposta.data)}
    ).catch((error) => {
    if(error){
        consolog.log("Error 404")
    }
})
