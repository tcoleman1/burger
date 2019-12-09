let orm = require('../config/orm');

const burger = {
selectAll: function(cb){
    orm.selectAll("burger", function(res){
        cb(res);
    })
},
insertOne: function(col,val, cb){
    orm.insertOne("burger",col, val, function(res){
        cb(res);
    })
},
updateOne: function(objColVal, conditions,cb){
    orm.updateOne("burger", objColVal, conditions, function(res){
        cb(res);
    })
},
devour: function(conditions, cb){
    orm.devour("burger", conditions, function(res){
        cb(res);
    })
}
};

module.exports = burger;