var fs = require('fs');

function writeToFile(path, data, callback){
    try{
        fs.writeFileSync(path, JSON.stringify(data), 'utf-8');
        callback(null);
    }catch(err){
        callback(err);
    }
}

module.exports = writeToFile;