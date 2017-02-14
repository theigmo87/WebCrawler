var privateSettings = require("./privateSettings.js");

var settings = {    
    paths: {
        firebaseAccountCreds: "./config/firebaseCreds.json"
    },

    crawler: {
        baseUrl: "http://www.myherocard.com/benefit-summary-page/",
        root: '.portfolio',
        scope: [{
            image: 'img@src',
            moreInfoUrl: '.post_more_link a@href',
            phone: 'a[href*="tel:"]@href',
            description: '.post_excerpt' 
        }],
    }, 

    scheduler: {
        cronJobString: "0 0 * * 3"
    },

    firebase: {
        databaseUrl: privateSettings.firebaseUrl,
        uid: privateSettings.firebaseUid
    }
}

module.exports = settings;