var firebase = require("firebase");
var settings = require("../config/settings.js");

firebase.initializeApp({
    databaseURL: settings.firebase.databaseUrl,
    serviceAccount: settings.paths.firebaseAccountCreds,
    databaseAuthVariableOverride: {
        uid: settings.firebase.uid
    }
});

var firebaseWrapper = {
    getScores: getScores,
    saveScores: saveScores,
}

function getScores(callback){
    get("/scores", callback);
}

function saveScores(data, callback){
    save("/scores", data, callback);
}

function get(path, callback){
    var db = firebase.database();
    var ref = db.ref(path);
    ref.once("value", function(snapshot) {
        callback(snapshot.val());
    });
}

function save(path, data, callback){
    var db = firebase.database();
    var ref = db.ref(path);
    ref.set(data, function (err){
        callback(err);
    });
}

module.exports = firebaseWrapper;