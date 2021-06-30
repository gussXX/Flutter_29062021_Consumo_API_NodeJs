const  mongosse = require("mongoose");

async function connect(){
    await mongosse.connect('mongodb://localhost/',{
        useNewUrlParser:true
    })
};

module.exports = {connect};