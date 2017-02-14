var express = require('express');
var schedule = require('node-schedule');
var settings = require("./config/settings.js");
var scoreCrawler = require("./app/scoreCrawler");

var app = express();

function init(){
    //var crawlScoresJob = schedule.scheduleJob(settings.scheduler.cronJobString, crawlScores);

    getInitialScores();
    startApi();
}

function getInitialScores(callback){
    scoreCrawler.crawlAndSaveScores(function(results){
        console.log(results);
        if (callback){
            callback(results);
        }
    });
}

function startApi(){
    app.get('/', function(req, res){
        scoreCrawler.crawlScores(function(results){
            res.send(results);
        });
    });

    var port = 3000;
    app.listen(port);
    console.info("App listening on:", port);
}

init();