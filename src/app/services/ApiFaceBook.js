const FB = require('fb');
FB.setAccessToken()
FB.api("/me", {
    locale:'pt_BR',
    fields: ''

},
    (response) => {
        console.log("response");
    }
);
