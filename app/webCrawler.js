var xrayBase = require('x-ray');
var xray = xrayBase();

var settings = require("../config/settings.js");

var WebCrawler = {
    crawlPage: crawlPage
}

var crawlScope = {
    items: xray(settings.crawler.root, settings.crawler.scope)
};

function crawlPage(callback){
    xray(settings.crawler.baseUrl, crawlScope)(callback);
}

module.exports = WebCrawler;