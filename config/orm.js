let connection = require('./connection')


let orm = {

    selectAll: function(){
        
        let allburgers = [];
         let queryString = "SELECT * FROM burgers"
         connection.query(queryString, function(err,res){
             if(err) throw err;
             for(var i=0; i < res.length; i++){
                if(res[i].devoured === 0){
                    allburgers.push(res[i])
                }
             }
         })

         return allburgers;
    },

    insertOne: function(burger_name) {
        let queryString = "INSERT INTO burgers(burger_name) VALUES (?)"
        connection.query(queryString, [burger_name], function(err){
            if (err) throw err;
        })
    },


    updateOne: function (select){
        let queryString = "UPDATE burgers SET devoured = true WHERE id =?"
        connection.query(queryString, [select], function (err){
            if(err) throw err;
        })
    },

    devour: function() {

        let devour = [];
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res){
            if(err) throw err;
            for (i=0; i<res.length; i++){
                if(res[i].devoured === 1){
                    devour.push(res[i])
                }
            }
        })
        return devour;
    }

}


module.exports = orm;