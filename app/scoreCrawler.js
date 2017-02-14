var webCrawler = require("./webCrawler.js");
var db = require("./firebaseWrapper.js");
var settings = require("../config/settings.js");

var scoreCrawler = {
    crawlScores: crawlScores,
    crawlAndSaveScores: crawlAndSaveScores
}

// callback hell, change this to promises
function crawlAndSaveScores(callback){
    webCrawler.crawlPage(function(crawlErr, crawlResponse){
        if (crawlErr){
            console.error("Error crawling scores: ", crawlErr, crawlResponse);
            callback();
        }else{
            if (settings.firebase.databaseUrl){
                db.saveScores(crawlResponse, function(saveErr){
                    if (saveErr){
                        console.error("Error saving scores: ", saveErr, crawlResponse);
                    }
                    callback(crawlResponse);
                });
            }else{
                console.error("Error saving scores, no firebase url defined in settings!");
            }
        }
    });
}

function crawlScores(callback){
    webCrawler.crawlPage(function(crawlErr, crawlResponse){
        if (crawlErr){
            console.error("Error crawling scores: ", crawlErr, crawlResponse);
            callback();
        }else{
            callback(crawlResponse);
        }
    });
}

module.exports = scoreCrawler;