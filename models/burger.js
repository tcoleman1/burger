let orm = require('../config/orm');

const burger = {
selectAll: function(cb){
    orm.selectAll(function(res){
        cb(res);
    })
},
insertOne: function(burger_name, cb){
    orm.insertOne(burger_name, function(res){
        cb(res);
    })
},
updateOne: function(id){
    orm.updateOne(id, function(res){
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