let connection = require('./connection')

//create selectAll(), insertOne() and updateOne() methods

let orm = {

    selectAll: function(){
        
         let queryString = "SELECT * FROM burgers"
         connection.query(queryString, function(err,res){
             if(err) throw err;
            //  for(var i=0; i < res.length; i++){
            //     if(res[i].devoured === "true"){

            //     }
            //  }
         })
    }

    insertOne: 


    updateOne

}


module.exports = orm;