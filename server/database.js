var config = require("../config/config");

module.exports = (mongoose) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.database.db_url, {useMongoClient: true}, (err) => {
        if(err){
            console.error("Error! " + err);
        }
        else{
            console.log('Mongo Db connection successful');
        }
    });
}